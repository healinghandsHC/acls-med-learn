import { Link } from "wouter";
import { medications } from "@/data/medications";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Pill } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function Medications() {
  const [search, setSearch] = useState("");

  const filtered = medications.filter(m => 
    m.name.toLowerCase().includes(search.toLowerCase()) || 
    m.class.toLowerCase().includes(search.toLowerCase()) ||
    m.indications.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 md:p-8 space-y-6 max-w-4xl mx-auto">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">ACLS Medications</h1>
        <p className="text-muted-foreground">Quick reference for code drugs, dosing, and indications.</p>
      </div>

      <Input 
        placeholder="Search by name, class, or indication..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-md bg-background"
      />

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((med) => (
          <Card key={med.id} className="hover:bg-muted/50 transition-colors">
            <Link href={`/medications/${med.id}`} className="block h-full w-full">
              <CardHeader className="flex flex-row items-center gap-3">
                <Pill className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <CardTitle className="text-lg">{med.name}</CardTitle>
                  <CardDescription className="text-sm mt-1">{med.class}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground truncate">
                {med.indications}
              </CardContent>
            </Link>
          </Card>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full py-8 text-center text-muted-foreground">
            No medications found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}

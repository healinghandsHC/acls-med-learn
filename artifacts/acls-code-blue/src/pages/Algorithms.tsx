import { Link } from "wouter";
import { algorithms } from "@/data/algorithms";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Activity } from "lucide-react";

export default function Algorithms() {
  return (
    <div className="p-6 md:p-8 space-y-6 max-w-4xl mx-auto">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">ACLS Algorithms</h1>
        <p className="text-muted-foreground">Select an algorithm to step through the clinical pathway.</p>
      </div>

      <div className="grid gap-4">
        {algorithms.map((algo) => (
          <Card key={algo.id} className="hover:bg-muted/50 transition-colors">
            <Link href={`/algorithms/${algo.id}`} className="block h-full w-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <Activity className="h-6 w-6 text-destructive" />
                <div>
                  <CardTitle className="text-xl">{algo.title}</CardTitle>
                  <CardDescription className="text-sm mt-1">{algo.description}</CardDescription>
                </div>
              </CardHeader>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}

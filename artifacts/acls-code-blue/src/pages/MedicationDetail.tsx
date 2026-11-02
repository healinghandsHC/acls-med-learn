import { useParams, Link } from "wouter";
import { medications } from "@/data/medications";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Syringe, Info, AlertOctagon, HeartPulse } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function MedicationDetail() {
  const { id } = useParams();
  const med = medications.find(m => m.id === id);

  if (!med) return <div className="p-8">Medication not found.</div>;

  return (
    <div className="p-6 md:p-8 max-w-3xl mx-auto space-y-6">
      <Link href="/medications" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Medications
      </Link>

      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight">{med.name}</h1>
          <Badge variant="secondary" className="text-sm px-3">{med.class}</Badge>
        </div>
      </div>

      <div className="grid gap-6">
        <Card className="border-l-4 border-l-primary">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <HeartPulse className="h-5 w-5 text-primary" />
              Indications
            </CardTitle>
          </CardHeader>
          <CardContent className="text-base">
            {med.indications}
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-destructive">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Syringe className="h-5 w-5 text-destructive" />
              Dose & Route
            </CardTitle>
          </CardHeader>
          <CardContent className="text-base font-semibold">
            {med.doseRoute}
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-warning">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertOctagon className="h-5 w-5 text-warning" />
              Contraindications
            </CardTitle>
          </CardHeader>
          <CardContent className="text-base text-muted-foreground">
            {med.contraindications}
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-500" />
              Nursing Notes
            </CardTitle>
          </CardHeader>
          <CardContent className="text-base">
            {med.nursingNotes}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

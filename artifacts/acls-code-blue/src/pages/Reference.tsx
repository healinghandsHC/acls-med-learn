import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Reference() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-6 md:p-8 max-w-5xl mx-auto space-y-8">
      <div className="flex justify-between items-center print:hidden">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">ACLS Quick Reference</h1>
          <p className="text-muted-foreground">Printable cheat sheet for code carts.</p>
        </div>
        <Button onClick={handlePrint}>
          <Printer className="mr-2 h-4 w-4" /> Print
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 print:grid-cols-2">
        {/* Cardiac Arrest */}
        <Card className="border-2 border-destructive/20 print:border-black print:shadow-none">
          <CardHeader className="bg-destructive/10 print:bg-gray-200 pb-3">
            <CardTitle className="text-destructive print:text-black">Cardiac Arrest (VF/pVT)</CardTitle>
          </CardHeader>
          <CardContent className="pt-4 space-y-2 text-sm">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>CPR:</strong> High-quality, 2 min cycles.</li>
              <li><strong>Shock:</strong> Biphasic 120-200J.</li>
              <li><strong>Epinephrine:</strong> 1 mg IV/IO q3-5 min.</li>
              <li><strong>Amiodarone:</strong> 1st dose 300 mg bolus, 2nd dose 150 mg. OR Lidocaine 1-1.5 mg/kg.</li>
            </ul>
          </CardContent>
        </Card>

        {/* PEA/Asystole */}
        <Card className="border-2 border-primary/20 print:border-black print:shadow-none">
          <CardHeader className="bg-primary/10 print:bg-gray-200 pb-3">
            <CardTitle className="text-primary print:text-black">PEA / Asystole</CardTitle>
          </CardHeader>
          <CardContent className="pt-4 space-y-2 text-sm">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>CPR:</strong> High-quality, 2 min cycles.</li>
              <li><strong>Epinephrine:</strong> 1 mg IV/IO ASAP, then q3-5 min.</li>
              <li><strong>NO SHOCK.</strong></li>
              <li><strong>Treat Hs & Ts:</strong> Hypovolemia, Hypoxia, Hydrogen ion (acid), Hypo/hyperkalemia, Hypothermia. Tension pneumo, Tamponade, Toxins, Thrombosis.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Bradycardia */}
        <Card className="border-2 border-warning/20 print:border-black print:shadow-none">
          <CardHeader className="bg-warning/10 print:bg-gray-200 pb-3">
            <CardTitle className="text-warning print:text-black">Symptomatic Bradycardia</CardTitle>
          </CardHeader>
          <CardContent className="pt-4 space-y-2 text-sm">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Atropine:</strong> 1 mg IV q3-5 min (Max 3 mg).</li>
              <li><strong>If ineffective:</strong>
                <ul className="list-circle pl-5 mt-1">
                  <li>Transcutaneous Pacing</li>
                  <li>Dopamine infusion 2-20 mcg/kg/min</li>
                  <li>Epinephrine infusion 2-10 mcg/min</li>
                </ul>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Tachycardia */}
        <Card className="border-2 border-blue-500/20 print:border-black print:shadow-none">
          <CardHeader className="bg-blue-500/10 print:bg-gray-200 pb-3">
            <CardTitle className="text-blue-600 print:text-black">Tachycardia (with pulse)</CardTitle>
          </CardHeader>
          <CardContent className="pt-4 space-y-2 text-sm">
            <div className="space-y-3">
              <div>
                <strong>Unstable (Hypotensive, Shock):</strong>
                <p>Synchronized Cardioversion immediately.</p>
              </div>
              <div>
                <strong>Stable (Narrow Regular):</strong>
                <p>Adenosine 6 mg IV rapid push. If no conversion, 12 mg.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <style>{`
        @media print {
          body { background: white; color: black; }
          .print\\:hidden { display: none; }
        }
      `}</style>
    </div>
  );
}

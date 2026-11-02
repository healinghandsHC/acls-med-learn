import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "wouter";
import { Activity, Pill, AlertTriangle, BrainCircuit, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="p-6 md:p-8 space-y-8 max-w-6xl mx-auto">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Code Blue Learning</h1>
        <p className="text-muted-foreground text-lg">ACLS clinical reference and scenario training.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hover:border-primary/50 transition-colors">
          <CardHeader>
            <Activity className="h-8 w-8 text-destructive mb-2" />
            <CardTitle>Algorithms</CardTitle>
            <CardDescription>Step-by-step clinical pathways.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/algorithms" className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
              View Algorithms
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:border-primary/50 transition-colors">
          <CardHeader>
            <Pill className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Medications</CardTitle>
            <CardDescription>Dosing, indications, and notes.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/medications" className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
              View Medications
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:border-primary/50 transition-colors">
          <CardHeader>
            <AlertTriangle className="h-8 w-8 text-warning mb-2" />
            <CardTitle>Simulation</CardTitle>
            <CardDescription>Practice interactive code scenarios.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/simulation" className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Start Simulation
            </Link>
          </CardContent>
        </Card>
        
        <Card className="hover:border-primary/50 transition-colors">
          <CardHeader>
            <BrainCircuit className="h-8 w-8 text-blue-500 mb-2" />
            <CardTitle>Knowledge Quiz</CardTitle>
            <CardDescription>Test your ACLS retention.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/quiz" className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
              Take Quiz
            </Link>
          </CardContent>
        </Card>
        
        <Card className="hover:border-primary/50 transition-colors">
          <CardHeader>
            <FileText className="h-8 w-8 text-green-600 mb-2" />
            <CardTitle>Quick Reference</CardTitle>
            <CardDescription>Printable cheat sheet.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/reference" className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
              Open Reference
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

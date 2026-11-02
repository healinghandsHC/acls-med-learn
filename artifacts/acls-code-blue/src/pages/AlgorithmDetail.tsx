import { useParams, Link } from "wouter";
import { algorithms } from "@/data/algorithms";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AlgorithmDetail() {
  const { id } = useParams();
  const algorithm = algorithms.find(a => a.id === id);
  const [currentStepId, setCurrentStepId] = useState("start");

  if (!algorithm) return <div className="p-8">Algorithm not found.</div>;

  const currentStep = algorithm.steps.find(s => s.id === currentStepId);

  return (
    <div className="p-6 md:p-8 max-w-3xl mx-auto">
      <Link href="/algorithms" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Algorithms
      </Link>

      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold text-destructive">{algorithm.title}</h1>
        <p className="text-muted-foreground">{algorithm.description}</p>
      </div>

      <div className="relative min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStepId}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {currentStep ? (
              <Card className="border-2 border-border shadow-md">
                <CardHeader className="bg-muted/30 border-b border-border pb-4">
                  <CardTitle className="text-2xl">{currentStep.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <p className="text-lg leading-relaxed">{currentStep.content}</p>
                  
                  {currentStep.action && (
                    <div className="p-4 bg-primary/10 text-primary font-semibold rounded-md border border-primary/20">
                      Action Required: {currentStep.action}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    {currentStep.options?.map((opt, i) => (
                      <Button
                        key={i}
                        variant={opt.type === "destructive" ? "destructive" : opt.type === "secondary" ? "secondary" : "default"}
                        size="lg"
                        className="w-full sm:w-auto"
                        onClick={() => setCurrentStepId(opt.nextStepId)}
                      >
                        {opt.label}
                      </Button>
                    ))}
                    {!currentStep.options?.length && currentStepId !== "start" && (
                      <Button variant="outline" onClick={() => setCurrentStepId("start")}>
                        Restart Algorithm
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card><CardContent className="p-8 text-center text-muted-foreground">End of pathway.</CardContent></Card>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

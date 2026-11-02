import { useState } from "react";
import { scenarios } from "@/data/scenarios";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Activity, PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Simulation() {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string | null>(null);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [feedback, setFeedback] = useState<{ text: string; isCorrect: boolean } | null>(null);

  const scenario = scenarios.find(s => s.id === selectedScenarioId);
  const currentStep = scenario?.steps[currentStepIdx];

  const reset = () => {
    setSelectedScenarioId(null);
    setCurrentStepIdx(0);
    setFeedback(null);
  };

  const handleOption = (option: any) => {
    setFeedback({ text: option.feedback, isCorrect: option.isCorrect });
    
    if (option.isCorrect) {
      setTimeout(() => {
        if (option.nextStepId === "done") {
          setFeedback({ text: "Scenario completed successfully.", isCorrect: true });
        } else {
          const nextIdx = scenario?.steps.findIndex(s => s.id === option.nextStepId) ?? -1;
          if (nextIdx !== -1) {
            setCurrentStepIdx(nextIdx);
            setFeedback(null);
          }
        }
      }, 2500);
    }
  };

  if (!selectedScenarioId) {
    return (
      <div className="p-6 md:p-8 max-w-4xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-destructive">Code Blue Simulation</h1>
          <p className="text-muted-foreground">Select a scenario to begin interactive clinical decision training.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {scenarios.map(s => (
            <Card key={s.id} className="hover:border-primary/50 transition-colors cursor-pointer group" onClick={() => setSelectedScenarioId(s.id)}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <PlayCircle className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  <CardTitle>{s.title}</CardTitle>
                </div>
                <CardDescription>Initial Rhythm: {s.initialRhythm}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (!scenario || !currentStep) return null;

  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">{scenario.title}</h1>
        <Button variant="outline" size="sm" onClick={reset}>End Scenario</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Patient Vitals Card */}
        <div className="md:col-span-1 space-y-6">
          <Card className="bg-black text-green-400 border-none rounded-xl overflow-hidden font-mono">
            <div className="p-2 bg-zinc-900 text-zinc-400 text-xs text-center border-b border-zinc-800">
              MONITOR
            </div>
            <CardContent className="p-4 space-y-4">
              <div>
                <div className="text-xs text-green-500/70 mb-1">HR / RHYTHM</div>
                <div className="text-4xl font-bold flex items-baseline gap-2">
                  {scenario.initialVitals.hr} <span className="text-sm font-normal">bpm</span>
                </div>
                <div className="text-sm mt-1 text-green-300">{scenario.initialRhythm}</div>
              </div>
              <div>
                <div className="text-xs text-red-500/70 mb-1">NIBP</div>
                <div className="text-2xl font-bold text-red-400">{scenario.initialVitals.bp}</div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="text-xs text-blue-500/70 mb-1">SpO2</div>
                  <div className="text-xl font-bold text-blue-400">{scenario.initialVitals.spo2}%</div>
                </div>
                <div>
                  <div className="text-xs text-yellow-500/70 mb-1">RR</div>
                  <div className="text-xl font-bold text-yellow-400">{scenario.initialVitals.rr}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Panel */}
        <div className="md:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStepIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="border-2 shadow-sm">
                <CardHeader className="bg-muted/20 border-b">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="h-5 w-5 text-destructive" />
                    <span className="font-semibold text-destructive uppercase tracking-wider text-sm">Action Required</span>
                  </div>
                  <CardTitle className="text-xl leading-relaxed">{currentStep.prompt}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  {!feedback ? (
                    <div className="space-y-3">
                      {currentStep.options.map((opt, i) => (
                        <Button
                          key={i}
                          variant="outline"
                          className="w-full justify-start text-left h-auto py-4 px-6 hover:bg-secondary hover:border-primary/50 text-base"
                          onClick={() => handleOption(opt)}
                        >
                          {opt.text}
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`p-6 rounded-lg border-2 flex items-start gap-4 ${
                        feedback.isCorrect ? "bg-green-50 border-green-200 text-green-900 dark:bg-green-950/30 dark:text-green-100" : "bg-red-50 border-red-200 text-red-900 dark:bg-red-950/30 dark:text-red-100"
                      }`}
                    >
                      {feedback.isCorrect ? <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 shrink-0" /> : <XCircle className="h-6 w-6 text-red-600 mt-1 shrink-0" />}
                      <div className="text-lg font-medium">{feedback.text}</div>
                    </motion.div>
                  )}
                  
                  {feedback && !feedback.isCorrect && (
                     <Button className="mt-4" variant="outline" onClick={() => setFeedback(null)}>Try Again</Button>
                  )}
                  
                  {feedback && feedback.isCorrect && feedback.text.includes("completed successfully") && (
                     <Button className="mt-4" onClick={reset}>Return to Scenarios</Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

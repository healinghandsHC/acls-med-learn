import { useState } from "react";
import { quizQuestions } from "@/data/quiz";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { Link } from "wouter";

export default function Quiz() {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const question = quizQuestions[currentQuestionIdx];
  const isAnswered = selectedAnswer !== null;

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedAnswer(idx);
    if (idx === question.correctAnswer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIdx < quizQuestions.length - 1) {
      setCurrentQuestionIdx((c) => c + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  if (showResults) {
    return (
      <div className="p-6 md:p-8 max-w-2xl mx-auto space-y-6">
        <Card className="text-center p-8 border-2 border-primary/20">
          <CardTitle className="text-3xl mb-4">Quiz Complete</CardTitle>
          <p className="text-2xl font-semibold mb-6">
            You scored {score} out of {quizQuestions.length}
          </p>
          <div className="flex justify-center gap-4">
            <Button onClick={() => {
              setCurrentQuestionIdx(0);
              setSelectedAnswer(null);
              setScore(0);
              setShowResults(false);
            }}>
              Retake Quiz
            </Button>
            <Link href="/">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 max-w-3xl mx-auto space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold tracking-tight">Knowledge Check</h1>
        <div className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
          Question {currentQuestionIdx + 1} of {quizQuestions.length}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="border-2 shadow-sm">
            <CardHeader className="bg-muted/20 border-b pb-6">
              <CardTitle className="text-xl leading-relaxed">{question.question}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-3">
                {question.options.map((opt, i) => {
                  const isSelected = selectedAnswer === i;
                  const isCorrect = i === question.correctAnswer;
                  const showCorrect = isAnswered && isCorrect;
                  const showIncorrect = isAnswered && isSelected && !isCorrect;

                  return (
                    <Button
                      key={i}
                      variant="outline"
                      className={`w-full justify-start text-left h-auto py-4 px-6 text-base ${
                        showCorrect ? "bg-green-500/10 border-green-500 hover:bg-green-500/20" : ""
                      } ${
                        showIncorrect ? "bg-red-500/10 border-red-500 hover:bg-red-500/20" : ""
                      } ${!isAnswered ? "hover:bg-secondary hover:border-primary/50" : ""}`}
                      onClick={() => handleSelect(i)}
                      disabled={isAnswered && !isSelected && !isCorrect}
                    >
                      <div className="flex items-center w-full">
                        <span className="flex-1">{opt}</span>
                        {showCorrect && <CheckCircle2 className="h-5 w-5 text-green-600 ml-2" />}
                        {showIncorrect && <XCircle className="h-5 w-5 text-red-600 ml-2" />}
                      </div>
                    </Button>
                  );
                })}
              </div>

              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="pt-6"
                >
                  <div className={`p-4 rounded-md border ${selectedAnswer === question.correctAnswer ? 'bg-green-50 border-green-200 dark:bg-green-950/30' : 'bg-red-50 border-red-200 dark:bg-red-950/30'}`}>
                    <p className="font-semibold mb-1">Explanation:</p>
                    <p className="text-sm">{question.explanation}</p>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <Button size="lg" onClick={handleNext}>
                      {currentQuestionIdx === quizQuestions.length - 1 ? "See Results" : "Next Question"}
                    </Button>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

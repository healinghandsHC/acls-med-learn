export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "What is the first drug given in cardiac arrest?",
    options: ["Amiodarone", "Epinephrine", "Lidocaine", "Atropine"],
    correctAnswer: 1,
    explanation: "Epinephrine 1 mg is the first drug given in cardiac arrest, regardless of the rhythm."
  },
  {
    id: "q2",
    question: "What is the dose of Adenosine for SVT?",
    options: ["3 mg rapid IV push", "6 mg rapid IV push", "12 mg rapid IV push", "150 mg over 10 min"],
    correctAnswer: 1,
    explanation: "The initial dose of Adenosine is 6 mg rapid IV push, followed by a flush."
  },
  {
    id: "q3",
    question: "Which of the following are part of the 'Hs' in Hs & Ts?",
    options: ["Hypoxia, Hypovolemia, Hydrogen ion (acidosis)", "Hypertension, Hyperthermia, Hemorrhage", "Hypercapnia, Heart failure, Hemothorax", "Hypoglycemia, Hypocalcemia, Hypokalemia"],
    correctAnswer: 0,
    explanation: "The Hs include Hypovolemia, Hypoxia, Hydrogen ion (acidosis), Hypo/hyperkalemia, and Hypothermia."
  },
  {
    id: "q4",
    question: "What rhythm is treated with synchronized cardioversion?",
    options: ["Ventricular Fibrillation", "Asystole", "Unstable SVT", "Pulseless Electrical Activity"],
    correctAnswer: 2,
    explanation: "Synchronized cardioversion is used for unstable tachycardias like SVT, AFib, or VT with a pulse."
  },
  {
    id: "q5",
    question: "What is a second-line treatment for symptomatic bradycardia if Atropine is ineffective?",
    options: ["Amiodarone infusion", "Adenosine 6mg", "Transcutaneous pacing", "Defibrillation"],
    correctAnswer: 2,
    explanation: "Second-line treatments include transcutaneous pacing, Dopamine infusion, or Epinephrine infusion."
  },
  {
    id: "q6",
    question: "What is the Amiodarone infusion rate after the initial loading dose in cardiac arrest with ROSC?",
    options: ["1 mg/min x 6 hrs", "0.5 mg/min x 6 hrs", "2 mg/min x 12 hrs", "150 mg over 10 min"],
    correctAnswer: 0,
    explanation: "The maintenance infusion is 1 mg/min for the first 6 hours, then 0.5 mg/min for 18 hours."
  },
  {
    id: "q7",
    question: "What is the maximum cumulative dose of Atropine in bradycardia?",
    options: ["1 mg", "2 mg", "3 mg", "4 mg"],
    correctAnswer: 2,
    explanation: "The max dose of Atropine is 3 mg (usually given as 1 mg every 3-5 mins)."
  },
  {
    id: "q8",
    question: "What is the recommended energy setting for initial defibrillation of VF using a biphasic monitor?",
    options: ["50 J", "100 J", "120-200 J", "360 J"],
    correctAnswer: 2,
    explanation: "Biphasic defibrillators typically recommend 120-200 J for the first shock."
  },
  {
    id: "q9",
    question: "Which of the following are acceptable routes for Naloxone administration?",
    options: ["IV only", "IV, IM, IN", "Oral only", "Subcutaneous"],
    correctAnswer: 1,
    explanation: "Naloxone can be given IV, IM, or IN (intranasal)."
  },
  {
    id: "q10",
    question: "What is the dose of Vasopressin in cardiac arrest?",
    options: ["10 units", "20 units", "40 units", "80 units"],
    correctAnswer: 2,
    explanation: "Vasopressin 40 units IV/IO can replace the first or second dose of Epinephrine."
  },
  {
    id: "q11",
    question: "What is the target temperature range for Targeted Temperature Management (TTM) post-cardiac arrest?",
    options: ["30-32°C", "32-36°C", "36-38°C", "38-40°C"],
    correctAnswer: 1,
    explanation: "TTM should be maintained between 32°C and 36°C for at least 24 hours in comatose patients post-ROSC."
  },
  {
    id: "q12",
    question: "Which medication is preferred for Torsades de Pointes?",
    options: ["Amiodarone", "Lidocaine", "Magnesium Sulfate", "Sodium Bicarbonate"],
    correctAnswer: 2,
    explanation: "Magnesium Sulfate 1-2 g IV is the treatment of choice for Torsades de Pointes."
  },
  {
    id: "q13",
    question: "What is the primary intervention for a patient in PEA?",
    options: ["Defibrillation", "Synchronized Cardioversion", "Atropine", "CPR and Epinephrine"],
    correctAnswer: 3,
    explanation: "PEA is a non-shockable rhythm. Management focuses on CPR, Epinephrine, and identifying reversible causes."
  },
  {
    id: "q14",
    question: "Which of the following is a contraindication for Adenosine?",
    options: ["Asthma", "Wolff-Parkinson-White syndrome", "2nd or 3rd-degree AV block", "Hypertension"],
    correctAnswer: 2,
    explanation: "Adenosine is contraindicated in 2nd or 3rd-degree AV block or sick sinus syndrome (unless the patient has a functioning pacemaker)."
  },
  {
    id: "q15",
    question: "What is the correct compression-to-ventilation ratio for an adult without an advanced airway?",
    options: ["15:2", "30:2", "Continuous compressions", "100:1"],
    correctAnswer: 1,
    explanation: "The ratio is 30 compressions to 2 ventilations until an advanced airway is placed."
  },
  {
    id: "q16",
    question: "How often should pulse and rhythm checks be performed during cardiac arrest?",
    options: ["Every 1 minute", "Every 2 minutes", "Every 3 minutes", "Every 5 minutes"],
    correctAnswer: 1,
    explanation: "Pulse and rhythm checks should occur every 2 minutes, minimizing interruptions in CPR."
  },
  {
    id: "q17",
    question: "What is the recommended dose of Epinephrine for anaphylaxis?",
    options: ["1 mg IV", "0.3-0.5 mg IM", "0.1 mg IV", "1 mg IM"],
    correctAnswer: 1,
    explanation: "Epinephrine 0.3-0.5 mg IM in the anterolateral thigh is the treatment of choice for anaphylaxis."
  },
  {
    id: "q18",
    question: "Which medication can be used as an alternative to Amiodarone in refractory VF/pVT?",
    options: ["Atropine", "Adenosine", "Lidocaine", "Dopamine"],
    correctAnswer: 2,
    explanation: "Lidocaine (1-1.5 mg/kg IV) can be used as an alternative to Amiodarone in shock-refractory VF/pVT."
  },
  {
    id: "q19",
    question: "What is the minimum systolic blood pressure (or MAP) goal post-ROSC?",
    options: ["MAP >= 65 mm Hg", "SBP >= 120 mm Hg", "MAP >= 80 mm Hg", "SBP >= 100 mm Hg"],
    correctAnswer: 0,
    explanation: "Post-ROSC care aims to avoid hypotension, targeting a MAP >= 65 mm Hg or SBP >= 90 mm Hg."
  },
  {
    id: "q20",
    question: "What is the appropriate action if you achieve ROSC but the patient is not following commands?",
    options: ["Administer Amiodarone", "Initiate Targeted Temperature Management", "Administer Atropine", "Defibrillate"],
    correctAnswer: 1,
    explanation: "Comatose patients post-ROSC should receive Targeted Temperature Management (TTM) at 32-36°C."
  }
];

export interface Scenario {
  id: string;
  title: string;
  initialVitals: {
    hr: number | string;
    bp: string;
    rr: number;
    spo2: number;
  };
  initialRhythm: string;
  steps: {
    id: string;
    prompt: string;
    options: {
      text: string;
      isCorrect: boolean;
      feedback: string;
      nextStepId?: string;
    }[];
  }[];
}

export const scenarios: Scenario[] = [
  {
    id: "vf-arrest",
    title: "VF Cardiac Arrest",
    initialVitals: { hr: 0, bp: "0/0", rr: 0, spo2: 0 },
    initialRhythm: "Ventricular Fibrillation (VF)",
    steps: [
      {
        id: "step1",
        prompt: "Patient is unresponsive, pulseless, and apneic. Rhythm shows VF. What is the first priority?",
        options: [
          { text: "Administer Epinephrine 1mg", isCorrect: false, feedback: "Incorrect. High-quality CPR and early defibrillation are the priorities for VF.", nextStepId: "step1" },
          { text: "Begin CPR and prepare to defibrillate", isCorrect: true, feedback: "Correct. High-quality CPR and early defibrillation are critical for survival in VF.", nextStepId: "step2" }
        ]
      },
      {
        id: "step2",
        prompt: "CPR is ongoing. The defibrillator is charged. What is the correct shock dose?",
        options: [
          { text: "Synchronized cardioversion at 100J", isCorrect: false, feedback: "Incorrect. VF requires unsynchronized defibrillation.", nextStepId: "step2" },
          { text: "Defibrillation at 120-200J (biphasic)", isCorrect: true, feedback: "Correct. Defibrillate immediately, then resume CPR.", nextStepId: "step3" }
        ]
      },
      {
        id: "step3",
        prompt: "Shock delivered. CPR resumed for 2 minutes. Rhythm check still shows VF. What is the next drug of choice?",
        options: [
          { text: "Amiodarone 300mg", isCorrect: false, feedback: "Incorrect. Epinephrine should be given first after the second shock.", nextStepId: "step3" },
          { text: "Epinephrine 1mg IV/IO", isCorrect: true, feedback: "Correct. Give Epi 1mg every 3-5 mins.", nextStepId: "done" }
        ]
      }
    ]
  },
  {
    id: "pea",
    title: "PEA Arrest",
    initialVitals: { hr: 40, bp: "0/0", rr: 0, spo2: 0 },
    initialRhythm: "Sinus Bradycardia without a pulse (PEA)",
    steps: [
      {
        id: "step1",
        prompt: "Patient has organized rhythm but no pulse. What is the most important intervention?",
        options: [
          { text: "Defibrillate at 200J", isCorrect: false, feedback: "Incorrect. PEA is a non-shockable rhythm.", nextStepId: "step1" },
          { text: "High-quality CPR, Epinephrine, and search for Hs & Ts", isCorrect: true, feedback: "Correct. PEA requires CPR, early Epi, and identifying the underlying cause.", nextStepId: "done" }
        ]
      }
    ]
  },
  {
    id: "svt",
    title: "Unstable SVT",
    initialVitals: { hr: 180, bp: "70/40", rr: 24, spo2: 94 },
    initialRhythm: "Supraventricular Tachycardia (SVT)",
    steps: [
      {
        id: "step1",
        prompt: "Patient is hypotensive, pale, and diaphoretic with narrow complex tachycardia. What is the treatment of choice?",
        options: [
          { text: "Adenosine 6mg rapid IV push", isCorrect: false, feedback: "Incorrect. While used for SVT, this patient is UNSTABLE and requires immediate electrical therapy.", nextStepId: "step1" },
          { text: "Synchronized cardioversion", isCorrect: true, feedback: "Correct. Unstable tachycardia requires immediate synchronized cardioversion.", nextStepId: "done" }
        ]
      }
    ]
  },
  {
    id: "brady",
    title: "Severe Bradycardia",
    initialVitals: { hr: 35, bp: "80/50", rr: 16, spo2: 92 },
    initialRhythm: "Sinus Bradycardia",
    steps: [
      {
        id: "step1",
        prompt: "Patient is symptomatic with hypotension. What is the first-line medication?",
        options: [
          { text: "Epinephrine 1mg IV push", isCorrect: false, feedback: "Incorrect. That dose is for cardiac arrest.", nextStepId: "step1" },
          { text: "Atropine 1mg IV", isCorrect: true, feedback: "Correct. Atropine is first-line for symptomatic bradycardia.", nextStepId: "done" }
        ]
      }
    ]
  }
];

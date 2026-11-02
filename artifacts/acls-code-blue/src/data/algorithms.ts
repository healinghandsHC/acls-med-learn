export interface AlgorithmData {
  id: string;
  title: string;
  description: string;
  steps: {
    id: string;
    title: string;
    content: string;
    action?: string;
    options?: { label: string; nextStepId: string; type?: "primary" | "secondary" | "destructive" }[];
  }[];
}

export const algorithms: AlgorithmData[] = [
  {
    id: "cardiac-arrest",
    title: "Cardiac Arrest — VF/Pulseless VT",
    description: "Algorithm for shockable rhythms.",
    steps: [
      {
        id: "start",
        title: "Start CPR & Assess Rhythm",
        content: "Start CPR immediately (2 mins). Give oxygen, attach monitor/defibrillator.",
        action: "Check Rhythm",
        options: [
          { label: "Shockable (VF/pVT)", nextStepId: "shock-1", type: "destructive" },
          { label: "Non-shockable (PEA/Asystole)", nextStepId: "pea-path", type: "secondary" }
        ]
      },
      {
        id: "shock-1",
        title: "Shock & CPR",
        content: "Deliver 1 shock (biphasic 120-200J). Immediately resume CPR for 2 mins. Establish IV/IO access.",
        options: [
          { label: "Check Rhythm (after 2 mins)", nextStepId: "rhythm-check-2" }
        ]
      },
      {
        id: "rhythm-check-2",
        title: "Rhythm Check",
        content: "Is the rhythm shockable?",
        options: [
          { label: "Shockable", nextStepId: "shock-2", type: "destructive" },
          { label: "Non-shockable", nextStepId: "pea-path", type: "secondary" }
        ]
      },
      {
        id: "shock-2",
        title: "Shock & Epi",
        content: "Deliver 1 shock. Resume CPR for 2 mins. Epinephrine 1 mg IV/IO every 3-5 mins. Consider advanced airway/capnography.",
        options: [
          { label: "Check Rhythm (after 2 mins)", nextStepId: "rhythm-check-3" }
        ]
      },
      {
        id: "rhythm-check-3",
        title: "Rhythm Check",
        content: "Is the rhythm shockable?",
        options: [
          { label: "Shockable", nextStepId: "shock-3", type: "destructive" },
          { label: "Non-shockable", nextStepId: "pea-path", type: "secondary" }
        ]
      },
      {
        id: "shock-3",
        title: "Shock & Amiodarone",
        content: "Deliver 1 shock. Resume CPR for 2 mins. Amiodarone 300 mg IV/IO bolus (first dose) or Lidocaine 1-1.5 mg/kg. Treat reversible causes.",
        options: [
          { label: "Check Rhythm (after 2 mins)", nextStepId: "rhythm-check-4" }
        ]
      },
      {
        id: "rhythm-check-4",
        title: "Continue Cycle",
        content: "Repeat cycle. Continue Epi q3-5 min. Second dose of Amiodarone 150 mg if refractory.",
        options: [
          { label: "Restart Cycle", nextStepId: "start" }
        ]
      },
      {
        id: "pea-path",
        title: "Go to PEA/Asystole Algorithm",
        content: "Switching to non-shockable pathway...",
        options: []
      }
    ]
  },
  {
    id: "pea-asystole",
    title: "Cardiac Arrest — PEA/Asystole",
    description: "Algorithm for non-shockable rhythms.",
    steps: [
      {
        id: "start",
        title: "Start CPR & Epinephrine",
        content: "Start CPR for 2 mins. Establish IV/IO access. Give Epinephrine 1 mg IV/IO every 3-5 mins as soon as possible. Consider advanced airway. Identify/treat reversible causes (Hs & Ts).",
        options: [
          { label: "Check Rhythm (after 2 mins)", nextStepId: "rhythm-check-1" }
        ]
      },
      {
        id: "rhythm-check-1",
        title: "Rhythm Check",
        content: "Is the rhythm shockable?",
        options: [
          { label: "Shockable (VF/pVT)", nextStepId: "shock-path", type: "destructive" },
          { label: "Non-shockable", nextStepId: "cpr-2", type: "primary" }
        ]
      },
      {
        id: "cpr-2",
        title: "Continue CPR",
        content: "CPR for 2 mins. Treat reversible causes (Hs & Ts).",
        options: [
          { label: "Check Rhythm", nextStepId: "rhythm-check-1" }
        ]
      },
      {
        id: "shock-path",
        title: "Go to VF/pVT Algorithm",
        content: "Switching to shockable pathway...",
        options: []
      }
    ]
  },
  {
    id: "bradycardia",
    title: "Bradycardia (Symptomatic)",
    description: "Algorithm for HR < 50/min with symptoms.",
    steps: [
      {
        id: "start",
        title: "Assess & Support",
        content: "Maintain airway, give O2 if hypoxemic. Cardiac monitor, IV access, 12-lead ECG. Assess for signs of poor perfusion (hypotension, acutely altered mental status, shock, ischemic chest discomfort, acute heart failure).",
        options: [
          { label: "No poor perfusion signs", nextStepId: "monitor", type: "secondary" },
          { label: "Signs of poor perfusion", nextStepId: "atropine", type: "primary" }
        ]
      },
      {
        id: "monitor",
        title: "Monitor & Observe",
        content: "Monitor patient. No immediate intervention required.",
        options: []
      },
      {
        id: "atropine",
        title: "Atropine",
        content: "Give Atropine 1 mg IV. May repeat every 3-5 mins to a maximum of 3 mg.",
        options: [
          { label: "Ineffective", nextStepId: "second-line" }
        ]
      },
      {
        id: "second-line",
        title: "Second-Line Interventions",
        content: "Transcutaneous pacing OR Dopamine infusion (2-20 mcg/kg/min) OR Epinephrine infusion (2-10 mcg/min).",
        options: [
          { label: "Consider Expert Consultation", nextStepId: "expert" }
        ]
      },
      {
        id: "expert",
        title: "Expert Consultation",
        content: "Consult expert for transvenous pacing.",
        options: []
      }
    ]
  },
  {
    id: "tachycardia-stable",
    title: "Tachycardia — Stable Narrow Complex (SVT)",
    description: "Algorithm for stable narrow complex tachycardia.",
    steps: [
      {
        id: "start",
        title: "Assess & Support",
        content: "Maintain airway, assist breathing as needed. Oxygen if hypoxemic. Cardiac monitor, identify rhythm, monitor BP/SpO2. Assess for instability.",
        options: [
          { label: "Unstable (hypotension, AMS, shock)", nextStepId: "unstable-path", type: "destructive" },
          { label: "Stable, Narrow QRS (<0.12s)", nextStepId: "vagal", type: "primary" }
        ]
      },
      {
        id: "vagal",
        title: "Vagal Maneuvers & Adenosine",
        content: "Attempt vagal maneuvers. If unsuccessful, give Adenosine 6 mg rapid IV push. If no conversion, give Adenosine 12 mg.",
        options: [
          { label: "Converted", nextStepId: "monitor" },
          { label: "Not Converted", nextStepId: "rate-control" }
        ]
      },
      {
        id: "rate-control",
        title: "Rate Control",
        content: "Consider rate control with Diltiazem or Metoprolol. Seek expert consultation.",
        options: []
      },
      {
        id: "monitor",
        title: "Monitor",
        content: "Monitor patient for recurrence.",
        options: []
      },
      {
        id: "unstable-path",
        title: "Go to Unstable Tachycardia Algorithm",
        content: "Switching to unstable pathway...",
        options: []
      }
    ]
  },
  {
    id: "tachycardia-unstable",
    title: "Tachycardia — Unstable",
    description: "Algorithm for any wide or narrow unstable tachycardia.",
    steps: [
      {
        id: "start",
        title: "Assess Instability",
        content: "Heart rate typically >150/min. Hypotension, acutely altered mental status, signs of shock, ischemic chest discomfort, acute heart failure.",
        options: [
          { label: "Confirm Unstable", nextStepId: "cardioversion", type: "destructive" }
        ]
      },
      {
        id: "cardioversion",
        title: "Synchronized Cardioversion",
        content: "Perform synchronized cardioversion. Narrow regular: 50-100 J. Narrow irregular: 120-200 J. Wide regular: 100 J. Wide irregular: Defibrillation dose (not synchronized). Consider sedation if conscious.",
        options: [
          { label: "Consider Adenosine if regular narrow", nextStepId: "adenosine" },
          { label: "Rhythm persists", nextStepId: "expert" }
        ]
      },
      {
        id: "adenosine",
        title: "Adenosine",
        content: "If regular narrow complex, consider Adenosine 6 mg rapid IV push while preparing for cardioversion.",
        options: []
      },
      {
        id: "expert",
        title: "Expert Consultation",
        content: "Consult expert. Consider antiarrhythmic infusion.",
        options: []
      }
    ]
  },
  {
    id: "rosc",
    title: "Post-Cardiac Arrest Care (ROSC)",
    description: "Algorithm for care after Return of Spontaneous Circulation.",
    steps: [
      {
        id: "start",
        title: "Optimize Ventilation & Oxygenation",
        content: "Maintain O2 sat 92-98%. Advanced airway, waveform capnography. Do not hyperventilate (10 breaths/min).",
        options: [
          { label: "Assess Circulation", nextStepId: "circulation" }
        ]
      },
      {
        id: "circulation",
        title: "Optimize Hemodynamics",
        content: "Treat hypotension (SBP < 90 mm Hg, MAP < 65). IV/IO fluid bolus. Vasopressor infusion (Epi, NE, or Dopamine).",
        options: [
          { label: "Obtain 12-lead ECG", nextStepId: "ecg" }
        ]
      },
      {
        id: "ecg",
        title: "12-Lead ECG",
        content: "Evaluate for STEMI or high suspicion of AMI.",
        options: [
          { label: "STEMI present", nextStepId: "cath", type: "destructive" },
          { label: "No STEMI", nextStepId: "neuro" }
        ]
      },
      {
        id: "cath",
        title: "Coronary Reperfusion",
        content: "Coronary angiography/PCI.",
        options: [
          { label: "Assess Neuro Status", nextStepId: "neuro" }
        ]
      },
      {
        id: "neuro",
        title: "Assess Neurological Status",
        content: "Is the patient comatose (fails to follow commands)?",
        options: [
          { label: "Comatose", nextStepId: "ttm", type: "primary" },
          { label: "Awake/Follows commands", nextStepId: "icu", type: "secondary" }
        ]
      },
      {
        id: "ttm",
        title: "Targeted Temperature Management",
        content: "Initiate TTM at 32-36°C for at least 24 hours. Obtain brain CT, EEG monitoring.",
        options: [
          { label: "Transfer to ICU", nextStepId: "icu" }
        ]
      },
      {
        id: "icu",
        title: "Critical Care",
        content: "Transfer to ICU for ongoing critical care management.",
        options: []
      }
    ]
  },
  {
    id: "opioid",
    title: "Opioid Overdose",
    description: "Algorithm for suspected opioid overdose with respiratory depression.",
    steps: [
      {
        id: "start",
        title: "Assess & Support",
        content: "Assess responsiveness and breathing. Support ventilation. Oxygen as needed.",
        options: [
          { label: "Pulse present, abnormal breathing", nextStepId: "naloxone", type: "primary" },
          { label: "No pulse", nextStepId: "cpr", type: "destructive" }
        ]
      },
      {
        id: "naloxone",
        title: "Naloxone",
        content: "Administer Naloxone 0.4-2 mg IV/IM/IN. Repeat every 2-3 mins as needed.",
        options: [
          { label: "Monitor", nextStepId: "monitor" }
        ]
      },
      {
        id: "monitor",
        title: "Monitor",
        content: "Monitor patient. Be prepared to re-dose naloxone as its half-life is shorter than many opioids.",
        options: []
      },
      {
        id: "cpr",
        title: "Go to Cardiac Arrest Algorithm",
        content: "Switching to cardiac arrest pathway...",
        options: []
      }
    ]
  },
  {
    id: "anaphylaxis",
    title: "Anaphylaxis",
    description: "Algorithm for severe allergic reaction.",
    steps: [
      {
        id: "start",
        title: "Assess & Epinephrine",
        content: "Assess airway, breathing, circulation. Administer Epinephrine 0.3-0.5 mg IM in anterolateral thigh immediately.",
        options: [
          { label: "Continue Management", nextStepId: "support" }
        ]
      },
      {
        id: "support",
        title: "Adjunctive Therapy",
        content: "Establish IV access. Administer normal saline bolus for hypotension. Give Diphenhydramine (H1 blocker) and Methylprednisolone (corticosteroid). Consider Albuterol for bronchospasm.",
        options: [
          { label: "Refractory Hypotension", nextStepId: "refractory" },
          { label: "Improving", nextStepId: "monitor" }
        ]
      },
      {
        id: "refractory",
        title: "Refractory Management",
        content: "Consider Epinephrine IV infusion. Seek expert consultation.",
        options: []
      },
      {
        id: "monitor",
        title: "Monitor",
        content: "Observe for biphasic reaction. Admit or observe for extended period.",
        options: []
      }
    ]
  }
];

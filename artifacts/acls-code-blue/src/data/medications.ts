export interface Medication {
  id: string;
  name: string;
  class: string;
  indications: string;
  doseRoute: string;
  nursingNotes: string;
  contraindications: string;
}

export const medications: Medication[] = [
  {
    id: "epinephrine",
    name: "Epinephrine",
    class: "Catecholamine",
    indications: "Cardiac arrest (VF, PEA, asystole), anaphylaxis",
    doseRoute: "1 mg IV q3-5min in arrest; 0.3 mg IM for anaphylaxis",
    nursingNotes: "Increases cardiac output and SVR; can worsen myocardial ischemia",
    contraindications: "No absolute contraindications in cardiac arrest"
  },
  {
    id: "amiodarone",
    name: "Amiodarone",
    class: "Antiarrhythmic (Class III)",
    indications: "VF/pulseless VT (refractory); stable VT",
    doseRoute: "300 mg IV push in arrest, then 150 mg; infusion 1 mg/min x 6h then 0.5 mg/min",
    nursingNotes: "Prolongs QT; causes phlebitis if given peripherally — use large vein or central line",
    contraindications: "Thyroid/pulmonary/hepatic toxicity with long-term use"
  },
  {
    id: "lidocaine",
    name: "Lidocaine",
    class: "Antiarrhythmic (Class IB)",
    indications: "Alternative to amiodarone in VF/pVT",
    doseRoute: "1–1.5 mg/kg IV push; repeat 0.5–0.75 mg/kg q5-10min; max 3 mg/kg",
    nursingNotes: "CNS toxicity (tinnitus, seizures) at high doses; requires infusion after bolus",
    contraindications: "Contraindicated in Wolff-Parkinson-White with AF"
  },
  {
    id: "adenosine",
    name: "Adenosine",
    class: "Endogenous nucleoside",
    indications: "SVT (narrow complex)",
    doseRoute: "6 mg rapid IV push with 20 mL NS flush; may repeat 12 mg x2",
    nursingNotes: "Must be given rapid push followed by flush at site closest to heart; causes brief asystole (warn patient)",
    contraindications: "Contraindicated in 2nd/3rd-degree AV block, sick sinus syndrome (without pacemaker)"
  },
  {
    id: "atropine",
    name: "Atropine",
    class: "Anticholinergic",
    indications: "Symptomatic bradycardia, AV block",
    doseRoute: "1 mg IV q3-5min; max 3 mg",
    nursingNotes: "Not effective in 2nd-degree type II or 3rd-degree AV block; may worsen ischemia",
    contraindications: "Avoid in narrow-angle glaucoma"
  },
  {
    id: "dopamine",
    name: "Dopamine",
    class: "Vasopressor/Inotrope",
    indications: "Symptomatic bradycardia (second-line), cardiogenic shock",
    doseRoute: "2–20 mcg/kg/min IV infusion",
    nursingNotes: "Dose-dependent effects: 2-5 dopaminergic, 5-10 beta, 10-20 alpha; use infusion pump",
    contraindications: "Correct hypovolemia first"
  },
  {
    id: "norepinephrine",
    name: "Norepinephrine",
    class: "Vasopressor",
    indications: "Post-cardiac arrest hypotension, septic shock",
    doseRoute: "0.1–0.5 mcg/kg/min IV infusion",
    nursingNotes: "Potent vasoconstrictor; can cause peripheral ischemia/necrosis; always use central line if possible",
    contraindications: "Avoid in hypovolemia without volume resuscitation"
  },
  {
    id: "vasopressin",
    name: "Vasopressin",
    class: "ADH agonist",
    indications: "Alternative to first or second dose of epinephrine in cardiac arrest",
    doseRoute: "40 units IV single dose",
    nursingNotes: "May be used in place of 1st or 2nd epinephrine dose; long half-life compared to epinephrine",
    contraindications: "No significant contraindications in cardiac arrest"
  },
  {
    id: "sodium-bicarbonate",
    name: "Sodium Bicarbonate",
    class: "Alkalinizer",
    indications: "Metabolic acidosis, hyperkalemia, TCA overdose",
    doseRoute: "1 mEq/kg IV",
    nursingNotes: "Use only after ventilation established; can worsen intracellular acidosis; use in tricyclic overdose or known hyperkalemia",
    contraindications: "Risk of metabolic alkalosis"
  },
  {
    id: "magnesium-sulfate",
    name: "Magnesium Sulfate",
    class: "Electrolyte/Antiarrhythmic",
    indications: "Torsades de Pointes, hypomagnesemia",
    doseRoute: "1–2 g IV over 5-20 min (slow in conscious patient, rapid in arrest)",
    nursingNotes: "Can cause hypotension, bradycardia, respiratory depression with rapid infusion; monitor DTRs",
    contraindications: "Caution in renal failure"
  },
  {
    id: "calcium-chloride",
    name: "Calcium Chloride",
    class: "Electrolyte",
    indications: "Hyperkalemia, calcium channel blocker toxicity, hypocalcemia",
    doseRoute: "1 g (10 mL of 10%) IV over 2-5 min",
    nursingNotes: "Vesicant — use central line or large bore IV; don't mix with sodium bicarbonate",
    contraindications: "Caution in digitalis toxicity"
  },
  {
    id: "diltiazem",
    name: "Diltiazem",
    class: "Calcium channel blocker",
    indications: "Stable narrow SVT, rapid AF/flutter rate control",
    doseRoute: "0.25 mg/kg IV over 2 min; may repeat 0.35 mg/kg; infusion 5-15 mg/h",
    nursingNotes: "Can cause hypotension; contraindicated in WPW with AF, heart failure with reduced EF",
    contraindications: "Contraindicated in wide-complex tachycardia of uncertain origin"
  },
  {
    id: "metoprolol",
    name: "Metoprolol",
    class: "Beta-blocker",
    indications: "Rate control in stable SVT, AF",
    doseRoute: "5 mg IV q5min x3 doses",
    nursingNotes: "Monitor HR and BP; contraindicated in active bronchospasm, decompensated HF",
    contraindications: "Avoid in cardiogenic shock"
  },
  {
    id: "naloxone",
    name: "Naloxone",
    class: "Opioid antagonist",
    indications: "Opioid overdose, respiratory depression",
    doseRoute: "0.4–2 mg IV/IM/IN q2-3min",
    nursingNotes: "May precipitate acute withdrawal; repeat dosing often needed due to short half-life",
    contraindications: "No significant contraindications in overdose setting"
  },
  {
    id: "diphenhydramine",
    name: "Diphenhydramine",
    class: "H1 antihistamine",
    indications: "Anaphylaxis (adjunct)",
    doseRoute: "25–50 mg IV/IM",
    nursingNotes: "Adjunct only — does not replace epinephrine; can cause sedation and hypotension",
    contraindications: "Caution in elderly"
  }
];

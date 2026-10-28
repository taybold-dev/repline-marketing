/** Everything the free player profile generator collects. Never leaves the browser. */
export interface CareerRow {
  season: string;
  team: string;
  level: string;
  league: string;
}

export interface ProfileData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  position: string;
  height: string;
  weight: string;
  shot: string;
  currentTeam: string;
  currentLevel: string;
  citizenship: string;
  scoutingNotes: string;
  eliteProspectsUrl: string;
  hudlUrl: string;
  career: CareerRow[];
  school: string;
  graduationYear: string;
  gpa: string;
  clearinghouseId: string;
  contactName: string;
  contactRole: string;
  contactPhone: string;
  contactEmail: string;
}

export const EMPTY_CAREER_ROW: CareerRow = { season: "", team: "", level: "", league: "" };

export const EMPTY_PROFILE: ProfileData = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  position: "",
  height: "",
  weight: "",
  shot: "",
  currentTeam: "",
  currentLevel: "",
  citizenship: "",
  scoutingNotes: "",
  eliteProspectsUrl: "",
  hudlUrl: "",
  career: [{ ...EMPTY_CAREER_ROW }],
  school: "",
  graduationYear: "",
  gpa: "",
  clearinghouseId: "",
  contactName: "",
  contactRole: "",
  contactPhone: "",
  contactEmail: "",
};

/** A clearly fictional player, used by "Fill with example" and the example image. */
export const EXAMPLE_PROFILE: ProfileData = {
  firstName: "Jordan",
  lastName: "Sample",
  dateOfBirth: "2008-04-12",
  position: "Center",
  height: "6'1\" (185 cm)",
  weight: "180 lbs (82 kg)",
  shot: "Left",
  currentTeam: "Sample City Wolves",
  currentLevel: "U18 AAA",
  citizenship: "Canada",
  scoutingNotes:
    "Strong two-way center with excellent hockey sense and a heavy shot. Reads the ice well, wins draws, and competes hard in puck battles. Trusted on the penalty kill and in the last minute of close games.",
  eliteProspectsUrl: "https://www.eliteprospects.com/player/000000/jordan-sample",
  hudlUrl: "https://www.hudl.com/profile/0000000/jordan-sample",
  career: [
    { season: "2025-26", team: "Sample City Wolves", level: "U18 AAA", league: "Sample U18 League" },
    { season: "2024-25", team: "Sample City Wolves", level: "U16 AAA", league: "Sample U16 League" },
    { season: "2023-24", team: "Sample Valley Selects", level: "U15 AAA", league: "Sample U15 League" },
  ],
  school: "Sample City High School",
  graduationYear: "2027",
  gpa: "3.7",
  clearinghouseId: "",
  contactName: "Sam Sample",
  contactRole: "Parent",
  contactPhone: "(555) 010-3000",
  contactEmail: "sam.sample@example.com",
};

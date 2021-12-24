// We will only store Users info and Questions info on the system permanently
// Other informations will be store on a weekly basis => we will need to download them as excel version and store them locally (or on Google Drive)

type PersonalInfo = {
  email: string;
  first: string;
  last: string;
  classYear: string;
  gender: string;
  university: string;
  major: string;
  race: string;
  interests: string[];
  personality: string[];
  phone: string;
  bio: string;
  howTheyKnow?: string; // first time only
};

type GroupPreference = {
  id: string;
  sameUniversity: boolean;
  desireGender: string;
  availability: string[];
  location: string[];
  type: "group";
};
type SinglePreference = {
  id: string;
  sameUniversity: boolean;
  desireGender: string;
  availability: string[];
  location: string[];
  purpose: string;
  desireInterests: string[];
  type: "single";
};

export type User = {
  id: string; // PRIMARY KEY
  isActive: boolean; // admin can decide whether to disable a user
  personalInfo: PersonalInfo;
  preferenceAnswersId: string[]; // matches with the Preference Answer - FOREIGN KEY
  matches: string[]; // matches with the match result - FOREIGN KEY
  history: {
    machtches: string[];
  };
  lastTimeJoined?: string | null;
  isAdmin: boolean;
};

// Match data type
type MatchUserInfo = {
  firstName: string;
  phone: string;
  email: string;
  bio: string;
  gender: string;
};
type SingleMatchResult = {
  matchId: string; // PRIMARY KEY
  type: "single";
  weekStartDate: string;
  weekEndDate: string;
  users: MatchUserInfo[];
};
type GroupMatchResult = {
  matchId: string; // PRIMARY KEY
  type: "group";
  weekStartDate: string;
  weekEndDate: string;
  users: MatchUserInfo[];
};
type MatchResult = {
  id: string; // PRIMARY KEY
  singleMatchCount: number;
  groupMatchCount: number;
  single: {
    [matchId: string]: SingleMatchResult;
  };
  group: {
    [matchId: string]: GroupMatchResult;
  };
};

// Questions -------------------------------
type Questions = {
  [questionId: string]: {
    id: string; // PRIMARY KEY
    formType: "personal" | "single" | "group";
    isDeleted: boolean;
    type: "text" | "radio" | "checkbox";
    label: string;
    required: boolean;
    deletable: boolean;
    potentialAnswers: string[];
  };
};

// CurrentWeek ------------------------------
type CurrentWeek = {
  id: string; // PRIMARY KEY
  label: string;
  startDate: string;
  endDate: string;
  isMatched: boolean; // see if we have the matching result calculated
  emailSent: boolean; // see if email sent out to participant
  singleUsersId: string[]; // shows how has participated in the currentweek matching
  groupUsersId: string[];
  //   can scale to different types of form by adding them here
};
type WeeksHistory = {
  [id: string]: {
    startDate: string;
    endDate: string;
    weekData: CurrentWeek;
    matchData: MatchResult;
  };
};

// Application
type PreferenceAnswers = {
  [id: string]: SinglePreference | GroupPreference;
};

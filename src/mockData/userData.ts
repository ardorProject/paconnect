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

type User = {
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

export const userData: User = {
  id: "user_1",
  isActive: true,
  personalInfo: {
    email: "",
    first: "",
    last: "",
    classYear: "",
    gender: "",
    university: "",
    major: "",
    race: "",
    interests: [],
    personality: [],
    phone: "",
    bio: "",
    howTheyKnow: undefined,
  },
  preferenceAnswersId: [],
  matches: [],
  history: {
    machtches: [],
  },
  isAdmin: true,
};

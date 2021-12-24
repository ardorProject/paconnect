type MatchUserInfo = {
  id: string;
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

export const matches: Array<SingleMatchResult | GroupMatchResult> = [
  {
    matchId: "single_1",
    type: "single",
    weekStartDate: "Dec. 20, 2021",
    weekEndDate: "Dec. 25, 2021",
    users: [
      {
        id: "user_1",
        firstName: "Troy",
        phone: "5129560044",
        email: "troy@drexel.edu",
        bio: "I love singing",
        gender: "male",
      },
      {
        id: "user_2",
        firstName: "Mai",
        phone: "5129560044",
        email: "troy@drexel.edu",
        bio: "I love singing",
        gender: "male",
      },
    ],
  },
  {
    matchId: "group_1",
    type: "group",
    weekStartDate: "Dec. 20, 2021",
    weekEndDate: "Dec. 25, 2021",
    users: [
      {
        id: "user_1",
        firstName: "Troy",
        phone: "5129560044",
        email: "troy@drexel.edu",
        bio: "I love singing",
        gender: "male",
      },
      {
        id: "user_2",
        firstName: "Mai",
        phone: "5129560044",
        email: "troy@drexel.edu",
        bio: "I love singing",
        gender: "male",
      },
    ],
  },
];

export const test = "";

export type Question = {
  id: string; // PRIMARY KEY
  formType: "personal" | "single" | "group";
  isDeleted: boolean;
  type: "text" | "radio" | "checkbox";
  label: string;
  description?: string;
  required: boolean;
  deletable: boolean;
  potentialAnswers: string[];
};
export type Questions = Question[];

export const personalQuestions: Questions = [
  {
    id: "q_email", // PRIMARY KEY
    formType: "personal",
    isDeleted: false,
    type: "text",
    label: "Email",
    required: true,
    deletable: false,
    potentialAnswers: [],
  },
  {
    id: "q_first_name", // PRIMARY KEY
    formType: "personal",
    isDeleted: false,
    type: "text",
    label: "First Name",
    required: true,
    deletable: false,
    potentialAnswers: [],
  },
  {
    id: "q_last_name", // PRIMARY KEY
    formType: "personal",
    isDeleted: false,
    type: "text",
    label: "Last Name",
    required: true,
    deletable: false,
    potentialAnswers: [],
  },
  {
    id: "q_class_year", // PRIMARY KEY
    formType: "personal",
    isDeleted: false,
    type: "radio",
    label: "Class Year",
    required: true,
    deletable: true,
    potentialAnswers: [
      "Freshman",
      "Sophomore",
      "Pre-junior",
      "Junior",
      "Senior",
      "Graduate Student",
    ],
  },
  {
    id: "q_gender", // PRIMARY KEY
    formType: "personal",
    isDeleted: false,
    type: "radio",
    label: "Gender",
    required: true,
    deletable: false,
    potentialAnswers: ["Male", "Femail", "Other", "Prefer not to disclose"],
  },
  {
    id: "q_university", // PRIMARY KEY
    formType: "personal",
    isDeleted: false,
    type: "radio",
    label: "What university do you attend?",
    required: true,
    deletable: false,
    potentialAnswers: [
      "Drexel University",
      "Temple University",
      "University of Pennsylvania",
    ],
  },
  {
    id: "q_major", // PRIMARY KEY
    formType: "personal",
    isDeleted: false,
    type: "text",
    label: "Major of study",
    required: true,
    deletable: true,
    potentialAnswers: [],
  },
  {
    id: "q_race", // PRIMARY KEY
    formType: "personal",
    isDeleted: false,
    type: "checkbox",
    label: "Race",
    description:
      "Responses to this question have no bearing on matching outcomes",
    required: false,
    deletable: true,
    potentialAnswers: [
      "American Indian or Alaska Native",
      "Asian",
      "Black or African American",
      "Hispanic / Latino",
      "Native Hawaiian or Other Pacific Islander",
      "White",
      "Other",
    ],
  },
  {
    id: "q_interests", // PRIMARY KEY
    formType: "personal",
    isDeleted: false,
    type: "checkbox",
    label: "What are some of your interests?",
    description: "Select at least 3",
    required: true,
    deletable: false,
    potentialAnswers: [
      "Anime",
      "Making Pasta",
      "Reading Books",
      "Sports",
      "Partying",
      "Arts",
      "Music",
      "Going to the Beach",
      "Science / Engineering / Math",
      "Gaming",
      "Photography",
      "Dancing",
      "Programming / Hackathons",
      "Business / Eutrepreneurship",
      "Finance / Investment",
      "Philosophy",
    ],
  },
  {
    id: "q_phone", // PRIMARY KEY
    formType: "personal",
    isDeleted: false,
    type: "text",
    label: "Cell Phone number to contact your match",
    description: "",
    required: true,
    deletable: false,
    potentialAnswers: [],
  },
  {
    id: "q_bio", // PRIMARY KEY
    formType: "personal",
    isDeleted: false,
    type: "text",
    label:
      "Please provide a short bio of yourself. It will be sent to your matches in an email",
    description: "",
    required: true,
    deletable: false,
    potentialAnswers: [],
  },
];

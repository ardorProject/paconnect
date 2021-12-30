import { Questions } from "../../types/Questions_Answers_types";

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
      { label: "Freshman", value: "freshman" },
      { label: "Sophomore", value: "sophomore" },
      { label: "Pre-junior", value: "pre_junior" },
      { label: "Junior", value: "junior" },
      { label: "Senior", value: "senior" },
      { label: "Graduate Student", value: "graduate" },
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
    potentialAnswers: [
      { label: "Male", value: "male" },
      { label: "Femail", value: "female" },
      { label: "Other", value: "other" },
      { label: "Prefer not to disclose", value: "not_disclose" },
    ],
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
      { label: "Drexel University", value: "drexel" },
      { label: "Temple University", value: "temple" },
      { label: "University of Pennsylvania", value: "upenn" },
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
      {
        label: "American Indian or Alaska Native",
        value: "american_indian_or_alaska_native",
      },
      { label: "Asian", value: "asian" },
      {
        label: "Black or African American",
        value: "black_or_african_american",
      },
      { label: "Hispanic / Latino", value: "hispanic_latino" },
      {
        label: "Native Hawaiian or Other Pacific Islander",
        value: "native_hawaiian_or_other_pacific_islander",
      },
      {
        label: "White",
        value: "white",
      },
      { label: "Other", value: "other" },
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
      { label: "Anime", value: "anime" },
      {
        label: "Making Pasta",
        value: "making_pasta",
      },
      { label: "Reading Books", value: "reading_books" },

      { label: "Sports", value: "sports" },
      { label: "Partying", value: "partying" },
      { label: "Arts", value: "arts" },
      { label: "Music", value: "music" },
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
    type: "textarea",
    label:
      "Please provide a short bio of yourself. It will be sent to your matches in an email",
    description: "",
    required: true,
    deletable: false,
    potentialAnswers: [],
  },
];

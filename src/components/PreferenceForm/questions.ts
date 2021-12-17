type QuestionObject = {
  id: string;
  question: string;
  answer: string;
  potentialAnswers?: string[];
  description?: string;
  required: boolean;
  type: "radio" | "checkbox" | "text";
};

type QandAType = {
  [key: string]: QuestionObject[];
};

export const QandA: QandAType = {
  single: [
    {
      id: "desireGender",
      question: "I am looking to meet with a...",
      answer: "",
      required: true,
      type: "checkbox",
      potentialAnswers: ["Male", "Female", "Any"],
    },
    {
      id: "availability",
      question: "At what times could you meet on your selected day?",
      description:
        "(You will talk to your match to pick a specific time within the intervals listed)",
      potentialAnswers: [
        "Friday morning (9 - 12 pm)",
        "Friday afternoon (12 - 5 pm)",
        "Friday evening (5 - 10 pm)",
      ],
      answer: "",
      required: true,
      type: "checkbox",
    },
    {
      id: "race",
      question: "Race",
      description:
        "Responses to this question have no bearing on matching outcomes. This question is optional",
      potentialAnswers: ["Asian", "American Indian or Alaska Native"],
      answer: "",
      required: false,
      type: "checkbox",
    },
    {
      id: "purpose",
      question: "What are you looking for?",
      potentialAnswers: [
        "Friendship",
        "Short-Term Relationship",
        "Long-Term Relationship",
      ],
      answer: "",
      required: true,
      type: "radio",
    },
    {
      id: "location",
      question: "Where would you like to hang out?",
      potentialAnswers: [
        "Saxby's / StarBucks for a Coffee",
        "Drexel Park",
        "Sabrina's Cafe",
        "Art Museum",
        "Rocky Steps",
        "City Hall",
        "Drexel Library",
        "Bubble Tea",
        "Ice Cream",
        "Halal Truck",
        "Lancaster Walk",
        "Cira Green",
      ],
      answer: "",
      required: true,
      type: "checkbox",
    },

    // Not Matched
    {
      id: "classYear",
      question: "Class Year",
      answer: "",
      required: true,
      type: "radio",
    },
    {
      id: "major",
      question: "Major",
      answer: "",
      required: true,
      type: "radio",
    },
  ],
  group: [
    {
      question: "Email",
      id: "email",
      answer: "truong@gmail.com",
      required: true,
      type: "text",
    },
    {
      id: "firstName",
      question: "First Name",
      answer: "",
      required: true,
      type: "text",
    },
    {
      id: "lastName",
      question: "Last Name",
      answer: "",
      required: true,
      type: "text",
    },
    {
      id: "gender",
      question: "Gender",
      answer: "",
      required: true,
      type: "radio",
    },
    {
      id: "university",
      question: "University",
      answer: "",
      required: true,
      type: "radio",
    },
    {
      id: "desireGender",
      question: "Desire Gender",
      answer: "",
      required: true,
      type: "checkbox",
    },
    {
      id: "availability",
      question: "At what times could you meet on your selected day?",
      description:
        "(You will talk to your match to pick a specific time within the intervals listed)",
      potentialAnswers: [
        "Friday morning (9 - 12 pm)",
        "Friday afternoon (12 - 5 pm)",
        "Friday evening (5 - 10 pm)",
      ],
      answer: "",
      required: true,
      type: "checkbox",
    },
    {
      id: "race",
      question: "Race",
      description:
        "Responses to this question have no bearing on matching outcomes. This question is optional",
      potentialAnswers: ["Asian", "American Indian or Alaska Native"],
      answer: "",
      required: false,
      type: "checkbox",
    },
    {
      id: "purpose",
      question: "What are you looking for?",
      potentialAnswers: [
        "Friendship",
        "Short-Term Relationship",
        "Long-Term Relationship",
      ],
      answer: "",
      required: true,
      type: "radio",
    },
    {
      id: "location",
      question: "Where would you like to hang out?",
      potentialAnswers: [
        "Saxby's / StarBucks for a Coffee",
        "Drexel Park",
        "Sabrina's Cafe",
        "Art Museum",
        "Rocky Steps",
        "City Hall",
        "Drexel Library",
        "Bubble Tea",
        "Ice Cream",
        "Halal Truck",
        "Lancaster Walk",
        "Cira Green",
      ],
      answer: "",
      required: true,
      type: "checkbox",
    },

    // Not Matched
    {
      id: "classYear",
      question: "Class Year",
      answer: "",
      required: true,
      type: "radio",
    },
    {
      id: "major",
      question: "Major",
      answer: "",
      required: true,
      type: "radio",
    },
  ],
};

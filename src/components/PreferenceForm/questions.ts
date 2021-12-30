import { QandAType } from "../../types/Questions_Answers_types";

export const QandA: QandAType = {
  single: [
    {
      id: "availability",
      label: "At what times could you meet on your selected day?",
      description:
        "(You will talk to your match to pick a specific time within the intervals listed)",
      potentialAnswers: [
        {
          label: "Friday morning (9 - 12 pm)",
          value: "friday_morning_9_12_pm",
        },
        {
          label: "Friday afternoon (12 - 5 pm)",
          value: "friday_afternoon_12-5_pm",
        },
        {
          label: "Friday evening (5 - 10 pm)",
          value: "friday_evening_5_10_pm",
        },
      ],
      required: true,
      type: "checkbox",
      formType: "single",
      isDeleted: false,
      deletable: false,
    },

    {
      id: "purpose",
      label: "What are you looking for?",
      potentialAnswers: [
        { label: "Friendship", value: "friendship" },
        { label: "Short-Term Relationship", value: "short_term_relationship" },
        { label: "Long-Term Relationship", value: "long_term_relationship" },
      ],
      required: true,
      type: "radio",
      formType: "single",
      isDeleted: false,
      deletable: false,
    },
    {
      id: "location",
      label: "Where would you like to hang out?",
      potentialAnswers: [
        {
          label: "Saxby's / StarBucks for a Coffee",
          value: "saxbys_starbucks_for_a_coffee",
        },
        { label: "Drexel Park", value: "drexel_park" },
        { label: "Sabrina's Cafe", value: "sabrina_cafe" },
        { label: "Art Museum", value: "art_museum" },
        { label: "Rocky Steps", value: "rocky_steps" },
        { label: "City Hall", value: "city_hall" },
        { label: "Drexel Library", value: "drexel_library" },
        { label: "Bubble Tea", value: "bubble_tea" },
        { label: "Ice Cream", value: "ice_cream" },
        { label: "Halal Truck", value: "halal_truck" },
        { label: "Lancaster Walk", value: "lancaster_walk" },
        { label: "Cira Green", value: "cira_green" },
      ],
      formType: "single",
      isDeleted: false,
      deletable: false,
      required: true,
      type: "checkbox",
    },
  ],
  group: [
    {
      id: "desireGender",
      label: "Desire Gender",
      potentialAnswers: [
        {
          label: "Male",
          value: "male",
        },
        {
          label: "Female",
          value: "female",
        },
        {
          label: "Both",
          value: "both",
        },
      ],
      formType: "group",
      isDeleted: false,
      deletable: false,
      required: true,
      type: "checkbox",
    },
    {
      id: "availability",
      label: "At what times could you meet on your selected day?",
      description:
        "(You will talk to your match to pick a specific time within the intervals listed)",
      potentialAnswers: [
        {
          label: "Friday morning (9 - 12 pm)",
          value: "friday_morning_9_12_pm",
        },
        {
          label: "Friday afternoon (12 - 5 pm)",
          value: "friday_afternoon_12-5_pm",
        },
        {
          label: "Friday evening (5 - 10 pm)",
          value: "friday_evening_5_10_pm",
        },
      ],
      formType: "group",
      isDeleted: false,
      deletable: false,
      required: true,
      type: "checkbox",
    },
    {
      id: "purpose",
      label: "What are you looking for?",
      potentialAnswers: [
        { label: "Friendship", value: "friendship" },
        { label: "Short-Term Relationship", value: "short_term_relationship" },
        { label: "Long-Term Relationship", value: "long_term_relationship" },
      ],
      formType: "group",
      isDeleted: false,
      deletable: false,
      required: true,
      type: "radio",
    },
    {
      id: "location",
      label: "Where would you like to hang out?",
      potentialAnswers: [
        {
          label: "Saxby's / StarBucks for a Coffee",
          value: "saxbys_starbucks_for_a_coffee",
        },
        { label: "Drexel Park", value: "drexel_park" },
        { label: "Sabrina's Cafe", value: "sabrina_cafe" },
        { label: "Art Museum", value: "art_museum" },
        { label: "Rocky Steps", value: "rocky_steps" },
        { label: "City Hall", value: "city_hall" },
        { label: "Drexel Library", value: "drexel_library" },
        { label: "Bubble Tea", value: "bubble_tea" },
        { label: "Ice Cream", value: "ice_cream" },
        { label: "Halal Truck", value: "halal_truck" },
        { label: "Lancaster Walk", value: "lancaster_walk" },
        { label: "Cira Green", value: "cira_green" },
      ],
      formType: "group",
      isDeleted: false,
      deletable: false,
      required: true,
      type: "checkbox",
    },
  ],
};

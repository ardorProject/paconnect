export type CheckListData = {
  label: string;
  value: string;
  isDone: boolean;
  priority: "low" | "med" | "high";
};

export const checkListData: CheckListData[] = [
  {
    label: "Sketch the form design",
    value: "sketch_form",
    isDone: true,
    priority: "low",
  },
  {
    label: "Store the answers",
    value: "store_answers",
    isDone: false,
    priority: "high",
  },
  {
    label: "Validate Forms' Answers",
    value: "validate_forms_answers",
    isDone: false,
    priority: "med",
  },
  {
    label: "Add Button to Go back to Personal Questions Form",
    value: "back_to_personal",
    isDone: false,
    priority: "high",
  },
  {
    label: "Add login page",
    value: "add_login_page",
    isDone: false,
    priority: "med",
  },
  {
    label: "Create Admin Page",
    value: "admin_page",
    isDone: false,
    priority: "med",
  },
  //   {label: ""},
];

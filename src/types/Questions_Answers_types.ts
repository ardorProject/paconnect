export interface DataNode {
  label: string;
  value: string;
}
export interface PotentialAnswer extends DataNode {}
export type Question = {
  id: string; // PRIMARY KEY
  formType: "personal" | "single" | "group";
  isDeleted: boolean;
  type: "text" | "radio" | "checkbox" | "textarea";
  label: string;
  description?: string;
  required: boolean;
  deletable: boolean;
  potentialAnswers: PotentialAnswer[];
  selected?: { [key: string]: DataNode };
};
export type Questions = Question[];
export type QandAType = {
  [key: string]: Question[];
};
export type Answer = {
  id: string;
  question_id: string;
  answer: any;
};

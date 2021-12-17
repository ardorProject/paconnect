import React from "react";
import Menu from "../Menu/Menu";

type QuestionCardProps = {
  id: string;
  question: string;
  answer: string;
  potentialAnswers?: string[];
  description?: string;
  required: boolean;
  type: "radio" | "checkbox" | "text";
  questionNumber: number;
};

function QuestionCard(props: QuestionCardProps) {
  console.log(props);
  return (
    <div
      className="QuestionCard relative w-full grow shadow-2xl bg-white my-5 flex flex-col p-5 box-border rounded-lg"
      id={props.id}
    >
      <h1 className="text-lg font-bold">
        {`Question ${props.questionNumber}: ${props.question} `}
        {props.required && <strong className="text-red-500 text-2xl">*</strong>}
      </h1>
      <Menu
        type="radio"
        data={props.potentialAnswers?.map((answer: string) => ({
          value: answer,
          label: answer,
        }))}
        value={props.potentialAnswers?.[0]}
      />
    </div>
  );
}

export default QuestionCard;

import React from "react";
import { Question } from "../../types/Questions_Answers_types";
import CheckboxInput from "../../utilsComponents/Input/CheckboxInput/CheckboxInput";
import {
  RadioInput,
  TextAreaInput,
  TextInput,
} from "../../utilsComponents/Input/Input";

interface QuestionCardProps extends Question {
  questionNumber: number;
  result: { [key: string]: any };
  setResult: Function;
}

function QuestionCard(props: QuestionCardProps) {
  return (
    <div
      className="QuestionCard relative w-full grow shadow-2xl bg-white my-5 flex flex-col p-5 box-border rounded-lg"
      id={props.id}
    >
      <h1 className="text-lg font-bold mb-3">
        {`Question ${props.questionNumber}: ${props.label} `}
        {props.required && <strong className="text-red-500 text-2xl">*</strong>}
      </h1>
      {props.type == "text" && (
        <TextInput
          onChange={(event: any) => {
            const newObject: any = { ...props.result };
            newObject[props.id] = event.target.value;
            props.setResult({ ...props.result });
          }}
          value={props.result[props.id] || ""}
        />
      )}
      {props.type == "radio" && (
        <RadioInput
          data={props.potentialAnswers}
          onSelect={(selectedValue: any) => {
            const newObject: any = { ...props.result };
            newObject[props.id] = selectedValue;
            props.setResult(newObject);
          }}
        />
      )}
      {props.type == "checkbox" && (
        <CheckboxInput
          data={props.potentialAnswers}
          selected={props.selected || {}}
          onSelect={(
            selectedValues:
              | {
                  [key: string]: {
                    label: string;
                    value: string;
                  };
                }
              | undefined
          ) => {
            const newObject: any = { ...props.result };
            newObject[props.id] = selectedValues;
            props.setResult(newObject);
          }}
        />
      )}
      {props.type == "textarea" && (
        <TextAreaInput
          onChange={(event: any) => {
            const newObject: any = { ...props.result };
            newObject[props.id] = event.target.value;
            props.setResult(newObject);
          }}
        />
      )}
    </div>
  );
}

export default QuestionCard;

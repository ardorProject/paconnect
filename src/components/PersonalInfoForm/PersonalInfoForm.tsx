import React, { useState } from "react";
import { Question } from "../../types/Questions_Answers_types";
import Button from "../../utilsComponents/Button/Button";
import CheckboxInput from "../../utilsComponents/Input/CheckboxInput/CheckboxInput";
import {
  RadioInput,
  TextAreaInput,
  TextInput,
} from "../../utilsComponents/Input/Input";
import { personalQuestions } from "./personalQuestions";

type PersonalInfoFormProps = {
  onClick: Function;
};

function PersonalInfoForm(props: PersonalInfoFormProps) {
  const [result, setResult]: [{ [key: string]: any }, Function] = useState({});
  console.log("Result >>>", result);

  return (
    <div className="PersonalInfoForm grow p-3">
      <h1 className="PersonalInfoForm__Title text-2xl font-bold text-center m-auto">
        Personal Information
      </h1>
      {personalQuestions.map((question: Question) => {
        if (question.type == "text") {
          return (
            <TextInput
              label={question.label}
              onChange={(event: any) => {
                const newObject: any = { ...result };
                newObject[question.id] = event.target.value;
                setResult(newObject);
              }}
              value={result[question.id] || ""}
            />
          );
        } else if (question.type === "checkbox") {
          return (
            <CheckboxInput
              label={question.label}
              data={question.potentialAnswers}
              selected={{}}
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
                const newObject: any = { ...result };
                newObject[question.id] = selectedValues;
                setResult(newObject);
              }}
            />
          );
        } else if (question.type === "radio") {
          return (
            <RadioInput
              label={question.label}
              data={question.potentialAnswers}
              onSelect={(selectedValue: any) => {
                const newObject: any = { ...result };
                newObject[question.id] = selectedValue;
                setResult(newObject);
              }}
            />
          );
        } else if (question.type == "textarea") {
          return (
            <TextAreaInput
              label={question.label}
              onChange={(event: any) => {
                const newObject: any = { ...result };
                newObject[question.id] = event.target.value;
                setResult(newObject);
              }}
            />
          );
        }
        return null;
      })}

      <Button
        label="Next"
        className="mt-4 ml-auto"
        onClick={() => props?.onClick?.()}
      />
    </div>
  );
}

export default PersonalInfoForm;

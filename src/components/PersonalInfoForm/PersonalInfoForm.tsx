import React, { useEffect, useState } from "react";
import Button from "../../utilsComponents/Button/Button";
import CheckboxInput from "../../utilsComponents/Input/CheckboxInput/CheckboxInput";
import { RadioInput, TextInput } from "../../utilsComponents/Input/Input";
import { personalQuestions, Question } from "./personalQuestions";

type PersonalInfoFormProps = {
  onClick: Function;
};

function PersonalInfoForm(props: PersonalInfoFormProps) {
  const [result, setResult]: [{ [key: string]: any }, Function] = useState({});

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
                setResult({ ...result });
              }}
              value={result[question.id] || ""}
            />
          );
        } else if (question.type === "checkbox") {
          return (
            <CheckboxInput
              label={question.label}
              data={question.potentialAnswers.map((answer: string) => ({
                label: answer,
                value: answer.toLowerCase(),
              }))}
              selected={{}}
            />
          );
        } else if (question.type === "radio") {
          return (
            <RadioInput
              label={question.label}
              data={question.potentialAnswers.map((answer: string) => ({
                label: answer,
                value: answer.toLowerCase(),
              }))}
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

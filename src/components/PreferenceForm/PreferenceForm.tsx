import React, { useEffect, useState } from "react";
import Button from "../../utilsComponents/Button/Button";
import ProgressBar from "../ProgressBar/ProgressBar";
import QuestionCard from "./QuestionCard";
import { QandA } from "./questions";

type PreferenceFormProps = {
  formType: "single-form" | "group-form";
  onSubmit: Function;
};

function PreferenceForm(props: PreferenceFormProps) {
  const questionsAndAnswers =
    props.formType === "single-form" ? QandA.single : QandA.group;
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questionsAndAnswers[currentQuestionIdx]
  );

  useEffect(() => {
    setCurrentQuestion(questionsAndAnswers[currentQuestionIdx]);
  }, [currentQuestionIdx]);
  return (
    <div className="PreferenceForm grow p-3 flex flex-col items-center justify-between">
      <ProgressBar
        total={questionsAndAnswers.length}
        complete={currentQuestionIdx + 1}
      />
      <h1 className="text-2xl font-bold">Personal Preference</h1>
      <QuestionCard
        {...currentQuestion}
        questionNumber={currentQuestionIdx + 1}
      />
      <div className="PreferenceForm__Actions w-full h-max flex justify-between">
        {currentQuestionIdx > 0 &&
          currentQuestionIdx < questionsAndAnswers.length && (
            <Button
              label="Back"
              className="w-4/12 "
              onClick={() => setCurrentQuestionIdx(currentQuestionIdx - 1)}
            />
          )}
        {currentQuestionIdx < questionsAndAnswers.length - 1 && (
          <Button
            onClick={() => setCurrentQuestionIdx(currentQuestionIdx + 1)}
            label="Next"
            className="w-4/12 ml-auto"
          />
        )}
        {currentQuestionIdx === questionsAndAnswers.length - 1 && (
          <Button
            label="Submit"
            className="w-4/12"
            onClick={() => props.onSubmit()}
          />
        )}
      </div>
    </div>
  );
}

export default PreferenceForm;

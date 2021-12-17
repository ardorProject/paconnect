import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import PersonalInfoForm from "../PersonalInfoForm/PersonalInfoForm";
import { useParams } from "react-router-dom";
import PreferenceForm from "../PreferenceForm/PreferenceForm";

function Form() {
  const { formType } = useParams();
  const [completePersonal, setCompletePersonal] = useState();
  const [completePreference, setCompletePreference] = useState();

  return (
    <div className="Form relative grow bg-gray-300 box-border m-2 rounded-lg flex flex-col justify-between scroll">
      {formType === "single-form" || formType === "group-form" ? (
        <>
          {/* <PersonalInfoForm /> */}
          <PreferenceForm formType={formType} />
        </>
      ) : (
        // An Error Page Component needed
        <h1>Error</h1>
      )}
    </div>
  );
}

export default Form;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import PersonalInfoForm from "../../PersonalInfoForm/PersonalInfoForm";
import PreferenceForm from "../../PreferenceForm/PreferenceForm";

function FormBody(props: { formType: "single-form" | "group-form" }) {
  const { formType } = props;
  const [completePersonal, setCompletePersonal] = useState(false);
  const [completePreference, setCompletePreference] = useState(false);
  return (
    <div className="FormBody w-full h-full p-2">
      {!completePersonal && (
        <PersonalInfoForm onClick={() => setCompletePersonal(true)} />
      )}
      {completePersonal && !completePreference && (
        <PreferenceForm
          formType={formType}
          onSubmit={() => setCompletePreference(true)}
        />
      )}
      {completePersonal && completePreference && (
        <div>
          <h1>Thanks for completing the form</h1>
          <Link to={"/forms"}>
            <Button label="Back to Form" />
          </Link>
        </div>
      )}
    </div>
  );
}

export default FormBody;

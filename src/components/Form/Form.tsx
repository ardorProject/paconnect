import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormBody from "./FormBody/FormBody";
import FormContainer from "./FormContainer";

function Form() {
  const navigate = useNavigate();
  const { formType } = useParams();

  useEffect(() => {
    if (formType !== "single-form" && formType !== "group-form") {
      navigate("/forms");
    }
  }, [formType]);

  return (
    <div className="Form relative grow bg-gray-300 box-border m-2 rounded-lg flex flex-col justify-between scroll">
      {formType === "single-form" || formType === "group-form" ? (
        <>
          <FormBody formType={formType} />
        </>
      ) : (
        <FormContainer />
      )}
    </div>
  );
}

export default Form;

import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import FormCallToAction from "./FormCallToAction/FormCallToAction";

function FormContainer(props: any) {
  return (
    <div className="FormContainer h-full w-full p-2">
      <FormCallToAction />
    </div>
  );
}

export default FormContainer;

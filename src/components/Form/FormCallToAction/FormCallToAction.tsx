import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";

function FormCallToAction() {
  return (
    <div className="CallToAction w-full h-max bg-gray-400 rounded-xl p-3 flex flex-col items-center justify-between">
      <h1 className="text-2xl mb-3">Start a new Match</h1>
      <div className="CallToAction__Buttons w-full flex items-center justify-around">
        <Link to="single-form">
          <Button label="One-on-One" />
        </Link>
        <Link to="group-form">
          <Button label="Group" />
        </Link>
      </div>
    </div>
  );
}

export default FormCallToAction;

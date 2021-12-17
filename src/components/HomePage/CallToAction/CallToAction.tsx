import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";

function CallToAction() {
  return (
    <div className="CallToAction w-full h-[200px] bg-gray-400 rounded-lg p-5 flex flex-col justify-between">
      <div className="CallToAction__Content flex flex-col items-center">
        <p className="text-xl">Week of Dec. 13, 2021</p>
        <p className="text-3xl mt-5">Start the match</p>
      </div>
      <div className="CallToAction__Buttons w-full flex items-center justify-center">
        <Link to="/forms/single-form">
          <Button label="One-on-One" className="mr-5" />
        </Link>
        <Link to="/forms/group-form">
          <Button label="Group" />
        </Link>
      </div>
    </div>
  );
}

export default CallToAction;

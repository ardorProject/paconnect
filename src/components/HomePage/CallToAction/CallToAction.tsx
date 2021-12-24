import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../utilsComponents/Button/Button";

function CallToAction() {
  return (
    <div className="CallToAction w-full h-[200px] bg-gray-400 rounded-lg p-5 flex flex-col justify-between">
      <div className="CallToAction__Content flex flex-col items-center">
        <p className="text-xl">Week of Dec. 13, 2021</p>
        <p className="text-3xl mt-5">Start the match</p>
      </div>
      <div className="CallToAction__Buttons w-full flex items-center justify-center">
        <Link to="/forms">
          <Button label="Start here" className="mr-5" />
        </Link>
      </div>
    </div>
  );
}

export default CallToAction;

import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../utilsComponents/Button/Button";
import { checkListData, CheckListData } from "./data";

function CheckList() {
  const navigate = useNavigate();
  return (
    <div className="CheckList p-2 bg-slate-300">
      <h1 className="text-xl text-center underline">Check List</h1>
      {checkListData.map((data: CheckListData) => (
        <div className="CheckList__Item border-b-2 mb-1 flex items-center">
          <div
            className={`Item__Status w-4 h-4 mr-2 rounded-sm ${
              data.isDone ? "bg-green-400" : "bg-red-500"
            }`}
          ></div>
          <p>{data.label}</p>
        </div>
      ))}

      <Button label="Home" onClick={() => navigate("/")} />
    </div>
  );
}

export default CheckList;

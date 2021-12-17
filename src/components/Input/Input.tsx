import React from "react";

type InputProps = {
  label?: string;
  placeholder?: string;
  onChange?: Function;
  onClick?: Function;
  type?: "text" | "textarea" | "radio";
  value?: string;
};

function Input(props: InputProps) {
  return (
    <div className="Input w-full flex flex-col justify-center mb-2">
      {props.type === "text" && (
        <>
          {props.label && (
            <label htmlFor="" className="text-base mr-1 mb-1">
              {props.label}
            </label>
          )}
          <input
            className="w-full sm:w-6/12 md:w-4/12 min-w-[200px] border-solid border-2 border-gray-400 rounded-lg p-2 focus:outline-none hover:border-green-600 focus:border-green-600"
            type="text"
            placeholder={props.placeholder}
            value={props.value}
          />
        </>
      )}
      {props.type === "textarea" && (
        <>
          {props.label && (
            <label htmlFor="" className="text-base mr-1 mb-1">
              {props.label}
            </label>
          )}
          <textarea
            className="w-full min-h-[160px] p-2 box-border rounded-lg"
            placeholder={props.placeholder}
          />
        </>
      )}
      {props.type === "radio" && (
        <>
          <input type="radio" className="mr-2" />
          {props.label && <label>{props.label}</label>}
        </>
      )}
    </div>
  );
}

export function RadioInput(props: {
  label: string;
  value: string;
  checked?: boolean;
}) {
  return (
    <div className="RadioInput w-max flex items-center">
      <div
        className="RadioInput__RadioBtn w-5 h-5 bg-white rounded-full border-2 border-gray-400 mr-2 hover:border-blue-400"
        style={{ backgroundColor: props.checked ? "blue" : "white" }}
      />
      <p className="RadioInput__Label">{props.label}</p>
    </div>
  );
}

export default Input;

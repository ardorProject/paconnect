import React from "react";
import { CommonInputProps } from "../Input";
interface TextInputProps extends CommonInputProps {}

function TextInput(props: TextInputProps) {
  return (
    <div className="TextInput w-full flex flex-col justify-center mb-2">
      {props.label && (
        <label htmlFor="" className="text-xl mr-1 mb-1">
          {props.label}
        </label>
      )}
      <input
        className="w-full sm:w-6/12 md:w-4/12 min-w-[200px] border-solid border-2 border-gray-400 rounded-lg p-2 focus:outline-none hover:border-green-600 focus:border-green-600"
        type="text"
        onChange={(event) => {
          if (props.onChange) {
            props.onChange(event);
          }
        }}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
}

export default TextInput;

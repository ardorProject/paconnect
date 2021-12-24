import React from "react";
import { CommonInputProps } from "../Input";
interface TextAreaInputProps extends CommonInputProps {}

function TextAreaInput(props: TextAreaInputProps) {
  return (
    <div className="Input w-full flex flex-col justify-center mb-2">
      {props.label && (
        <label htmlFor="" className="text-xl mr-1 mb-1">
          {props.label}
        </label>
      )}
      <textarea
        className="w-full min-h-[160px] p-2 box-border rounded-lg"
        placeholder={props.placeholder}
        onChange={(event) => {
          if (props.onChange) {
            props.onChange(event);
          }
        }}
      />
    </div>
  );
}

export default TextAreaInput;

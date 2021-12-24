import React from "react";

interface ButtonProps {
  label: string;
  className?: string;
  onClick?: Function;
  disabled?: boolean;
}

function Button(props: ButtonProps) {
  return (
    <button
      className={
        "Button box-border min-w-[160px] min-h-[48px] rounded-lg flex items-center justify-center p-1" +
        " " +
        props.className +
        " " +
        (props.disabled ? "bg-gray-400" : "bg-white hover:bg-slate-100")
      }
      onClick={() => props.onClick?.()}
      disabled={props.disabled}
    >
      <p>{props.label}</p>
    </button>
  );
}

export default Button;

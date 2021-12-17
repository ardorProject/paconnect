import React from "react";
import { RadioInput } from "../Input/Input";

type MenuData = {
  value: string;
  label: string;
};

type MenuProps = {
  label?: string;
  type?: "dropdown" | "radio" | "checkbox";
  data?: MenuData[];
  value?: string;
};

function Menu(props: MenuProps) {
  return (
    <div className="Menu w-full mb-3">
      {props.label && (
        <label htmlFor="" className="mb-1">
          {props.label}
        </label>
      )}
      {props.type === "radio" && (
        <form>
          {props.data?.map((data: MenuData) => (
            <RadioInput
              label={data.label}
              value={data.value}
              key={data.value}
              checked={data.value === props.value}
            />
          ))}
        </form>
      )}
    </div>
  );
}

export default Menu;

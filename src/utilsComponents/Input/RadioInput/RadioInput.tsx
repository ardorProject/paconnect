import React, { useEffect, useState } from "react";

interface RadioInputProps {
  label?: string;
  onSelect?: Function;
  value?: string;
  data: { label: string; value: string }[] | undefined;
}

type RadioButtonProps = {
  dataPiece: {
    label: string;
    value: string;
  };
  checkedValue: string | null | undefined;
  setCheckedValue: Function;
};

const RadioButton = ({
  dataPiece,
  checkedValue,
  setCheckedValue,
}: RadioButtonProps) => (
  <div
    className="RadioInput__RadioBtn w-5 h-5 p-[2px] bg-white rounded-full border-2 border-gray-400 mr-2 hover:border-blue-400 cursor-pointer"
    onClick={() => setCheckedValue(dataPiece.value)}
  >
    <div
      className="w-full h-full rounded-lg"
      style={{
        backgroundColor: checkedValue == dataPiece.value ? "blue" : "white",
      }}
    ></div>
  </div>
);

function RadioInput(props: RadioInputProps) {
  const [checkedValue, setCheckedValue]: [string | null | undefined, Function] =
    useState(props.value);
  useEffect(() => {
    if (checkedValue) {
      props.onSelect?.(checkedValue);
    }
  }, [checkedValue]);
  return (
    <div className="RadioInput w-max">
      {props.label && (
        <p className="RadioInput__Label text-xl mr-1 mb-1">{props.label}</p>
      )}

      <div className="RadioInput__Container">
        {props.data?.map((dataPiece: { label: string; value: string }) => (
          <div
            className="RadioInput__Item w-full flex items-center mb-2"
            key={dataPiece.value}
          >
            <RadioButton
              dataPiece={dataPiece}
              checkedValue={checkedValue}
              setCheckedValue={setCheckedValue}
            />
            <p className="RadioInput__Label">{dataPiece.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RadioInput;

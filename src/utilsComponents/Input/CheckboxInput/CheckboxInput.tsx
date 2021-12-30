import React, { useEffect, useState } from "react";

type DataNode = {
  label: string;
  value: string;
};
type CheckboxInputProps = {
  label?: string;
  description?: string;
  data?: DataNode[];
  selected: {
    [key: string]: DataNode;
  };
  onSelect?: Function;
};

const CheckBox = ({
  checkedValues,
  dataNode,
  setCheckedValues,
}: {
  checkedValues:
    | {
        [key: string]: DataNode;
      }
    | undefined;
  dataNode: DataNode;
  setCheckedValues: Function;
}) => (
  <div
    className="CheckboxBtn w-5 h-5 p-[2px] mr-2 border-2 border-gray-500 rounded-sm cursor-pointer"
    onClick={() => {
      if (checkedValues?.[dataNode.value]) {
        const newObject: {
          [key: string]: DataNode;
        } = {};
        Object.keys(checkedValues).forEach((key: string) => {
          if (key != dataNode.value) {
            newObject[key] = checkedValues[key];
          }
        });
        setCheckedValues(newObject);
      } else {
        const newObject = { ...checkedValues };
        newObject[dataNode.value] = dataNode;
        setCheckedValues(newObject);
      }
    }}
  >
    <div
      className="w-3/4 h-full border-4 border-green-600 border-t-0 border-l-0 rotate-45 m-auto mt-[-2px]"
      style={{
        display: checkedValues?.[dataNode.value] ? "block" : "none",
      }}
    ></div>
  </div>
);

function CheckboxInput(props: CheckboxInputProps) {
  const [checkedValues, setCheckedValues]: [
    (
      | {
          [key: string]: DataNode;
        }
      | undefined
    ),
    Function
  ] = useState(props.selected);

  useEffect(() => {
    if (props.onSelect) {
      props.onSelect(checkedValues);
    }
  }, [checkedValues]);

  return (
    <div className="CheckboxInput">
      {props.label && (
        <p className="CheckboxInput__Label text-xl mr-1 mb-1">{props.label}</p>
      )}
      <div className="CheckboxInput__Container">
        {props.data?.map((dataNode: DataNode) => (
          <div
            className="CheckboxInput__Item mb-2 flex items-center"
            key={dataNode.value}
          >
            <CheckBox
              dataNode={dataNode}
              checkedValues={checkedValues}
              setCheckedValues={setCheckedValues}
            />
            <p>{dataNode.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CheckboxInput;

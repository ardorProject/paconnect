import React from "react";

type ProgressBarProps = {
  complete: number;
  total: number;
};

function ProgressBar(props: ProgressBarProps) {
  return (
    <div className="ProgressBar w-full h-5 flex items-center justify-between mb-2 ">
      <div className="InnerBar h-full mr-2 grow">
        <div
          className="LoadingBar bg-green-500 h-full rounded-md"
          style={{
            width: `${Math.round((props.complete / props.total) * 100)}%`,
          }}
        ></div>
      </div>
      <span className="w-[80px] min-w-max">{`${props.complete} / ${props.total}`}</span>
    </div>
  );
}

export default ProgressBar;

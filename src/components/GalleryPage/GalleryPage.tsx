import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import ProgressBar from "../ProgressBar/ProgressBar";

function GalleryPage() {
  const [complete, setComplete] = useState(0);
  useEffect(() => {
    if (complete < 100) {
      setTimeout(() => {
        setComplete((prev) => Math.min(prev + 10, 100));
      }, 500);
    }
  }, [complete]);

  const Card = (props: any) => {
    return (
      <div className="w-full h-max flex flex-col items-start justify-center p-4 border-2 border-gray-500 rounded-lg mb-4">
        <p className="mb-2 text-lg font-semibold">{props.label}</p>
        {props.children}
      </div>
    );
  };

  return (
    <div className="GalleryPage w-full h-full">
      <h1>Gallery</h1>
      <Card label="Progress Bar">
        <button onClick={() => setComplete(0)}>Reset bar</button>
        <ProgressBar complete={complete} total={100} />
      </Card>
      <Card label="Input Card">
        <Input placeholder="Enter your answer..." type="text" />
      </Card>
    </div>
  );
}

export default GalleryPage;

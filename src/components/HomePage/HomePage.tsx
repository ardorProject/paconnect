import React from "react";
import CallToAction from "./CallToAction/CallToAction";
import Explore from "./Explore/Explore";

function HomePage(props: any) {
  return (
    <div className="HomePage w-full grow relative flex flex-col p-2">
      <CallToAction />
      <Explore />
    </div>
  );
}

export default HomePage;

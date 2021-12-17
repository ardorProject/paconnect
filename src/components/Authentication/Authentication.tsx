import React from "react";

function Authentication(props: any) {
  const loginToken = localStorage.getItem("loginToken");
  return (
    <div className="Auth relative w-full box-border flex flex-col">
      {props.children}
    </div>
  );
}

export default Authentication;

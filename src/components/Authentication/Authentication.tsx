import React from "react";
import { Navigate } from "react-router-dom";

function Authentication(props: any) {
  const loginToken = localStorage.getItem("loginToken");
  if (!loginToken) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="Auth relative w-full box-border flex flex-col">
      {props.children}
    </div>
  );
}

export default Authentication;

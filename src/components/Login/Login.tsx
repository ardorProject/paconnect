import React from "react";
import { useNavigate } from "react-router-dom";

function Login(props: any) {
  const navigage = useNavigate();
  const handleClick = () => {
    localStorage.setItem("loginToken", "Troy");
    navigage("/");
  };
  return (
    <div className="Login h-full w-full p-4">
      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default Login;

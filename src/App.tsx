import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Authentication from "./components/Authentication/Authentication";

function App() {
  return (
    <div className="App relative w-screen h-max min-h-screen max-w-full box-border font-sans flex">
      <Authentication>
        <NavBar />
        <Outlet />
      </Authentication>
    </div>
  );
}

export default App;

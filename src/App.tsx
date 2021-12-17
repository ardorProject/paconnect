import React from "react";
import HomePage from "./components/HomePage/HomePage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Authentication from "./components/Authentication/Authentication";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App relative w-screen h-max min-h-screen max-w-full box-border font-sans flex">
      <BrowserRouter>
        <Authentication>
          <NavBar />
          <Routes>
            <Route path="/forms/:formType" element={<Form />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Authentication>
      </BrowserRouter>
    </div>
  );
}

export default App;

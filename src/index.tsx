import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Form from "./components/Form/Form";
import Login from "./components/Login/Login";
import Gallery from "./components/Gallery/Gallery";
import CheckList from "./components/CheckList/CheckList";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="/checklist" element={<CheckList />} />
        <Route path="/" element={<App />}>
          <Route path="/forms" element={<Form />}>
            <Route path=":formType" element={<h1>Testing</h1>}></Route>
          </Route>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/admin" element={<h1>Admin</h1>}></Route>
        <Route path="*" element={<h1>Error page</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

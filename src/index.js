import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from "./pages/Home";
import Project from "./pages/Project";
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {

    return(
        <div className="d-flex justify-content-between bg-dark">
        <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
      </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

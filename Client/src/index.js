import React from "react";
import ReactDOM from "react-dom/client";
import Redirect from "./Redirect/Redirect";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Redirect />
    </BrowserRouter>
);

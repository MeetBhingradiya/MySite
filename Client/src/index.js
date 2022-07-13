import React from "react";
import ReactDOM from "react-dom/client";
// import Redirect from "./Redirect/Redirect";
import TestMod from './Test/TestMod';
import { BrowserRouter } from "react-router-dom";

// Redux Store
// import { Provider } from 'react-redux';
// import { Store } from "./Redux/Store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/*<Provider store={Store}> */}
            <BrowserRouter>
                {/* <Redirect/> */}
                <TestMod />
            </BrowserRouter>
        {/* </Provider> */}
    </React.StrictMode>
);

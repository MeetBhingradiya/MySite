import React from "react";
import ReactDOM from "react-dom/client";
import Redirect from "./Redirect/Redirect";
// import TestModC from './Test/TestModContext.test';
// import TestModR from './Test/TestModRedux.test';
import { BrowserRouter } from "react-router-dom";

// Redux Store
// import { Provider } from 'react-redux';
// import { Store } from "./Redux/Store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/*<Provider store={Store}> */}
            <BrowserRouter>
                <Redirect/>
                {/* <TestModC /> */}
                {/* <TestModR /> */}
            </BrowserRouter>
        {/* </Provider> */}
    </React.StrictMode>
);

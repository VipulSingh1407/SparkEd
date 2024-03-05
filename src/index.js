import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducer from "./reducer";
import {configureStore} from "@reduxjs/toolkit"
import { Toaster } from "react-hot-toast";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes

const store = configureStore({
  reducer:rootReducer,
});
Kommunicate.init("1b9cc40ca973ab2c07aa49db913618de6", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true
});
<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

  
    <Provider store = {store}>
      <BrowserRouter>
        <App />
        <Toaster/>
      </BrowserRouter>
    </Provider>
    


  </React.StrictMode>
);

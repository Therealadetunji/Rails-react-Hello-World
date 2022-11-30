import React from "react";
import Greeting from "./Greeting";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/Store";



const App = () => {
    return (
      <>
      <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </Provider>
      </BrowserRouter>
      </>
    );
  }
  
  export default App;


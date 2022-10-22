import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import "./App.css";
const App = () => {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

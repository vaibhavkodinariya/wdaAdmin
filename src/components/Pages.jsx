import React from "react";

import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import UpdateStatus from "./UpdateStatus";
function Pages() {
  return (
    <>
      <Routes>
        <Route exact path={"/"} element={<Login />} />
        <Route exact path={"/Home"} element={<Home />} />
        <Route exact path={"/us"} element={<UpdateStatus />} />
      </Routes>
    </>
  );
}

export default Pages;

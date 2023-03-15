import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Components from "../components/Components";
import { navbar } from "../utils/navbar";
import { sidebar } from "../utils/sidebar";

export const Root = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Components */}
        <Route element={<Components />}>
          <Route path="/components" element={<Sidebar />} />
        </Route>

        {/* Sidebar */}
        <Route element={<Sidebar />}>
          {sidebar.map((value) => (
            <Route key={value.id} path={value.path} element={value.element} />
          ))}
        </Route>

        {/* navbar */}
        {navbar.map((value) => (
          <Route key={value.id} path={value.path} element={value.element} />
        ))}
      </Routes>
    </div>
  );
};

export default Root;

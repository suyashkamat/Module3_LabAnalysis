import { Routes, Route } from "react-router-dom";
import Index from "./components/index";

import React, { useState } from "react";
import Coursecoordinator from "./components/coursecoordinator";
import Labnalysis from "./components/labanalysis";
import Dugc5 from "./components/dugcpage5";

export default function App() {
  const [course, setCourse] = useState();
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route
          path="/coursecoordinator"
          element={<Coursecoordinator />}
        ></Route>
        <Route
          path="/labanalysis"
          element={<Labnalysis setCourse={setCourse} />}
        ></Route>
        <Route path="/dugc5" element={<Dugc5 course={course} />}></Route>
      </Routes>
    </>
  );
}

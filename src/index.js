import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Welcome from "./components/Welcome.js";
import Danger from "./components/Danger.js";
import Eval from "./components/Eval.js";
import Href from "./components/Href.js";

ReactDOM.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Welcome />}/>
      <Route path="/danger" element={<Danger />}/>
      <Route path="/eval" element={<Eval />}/>
      <Route path="/href" element={<Href />}/>
  </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
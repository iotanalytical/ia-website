import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import "bootstrap";

import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

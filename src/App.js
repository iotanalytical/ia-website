import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import "./assets/font-awesome/css/font-awesome.min.css";

import Landing from "./pages/Landing/Landing";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/:user" element={<Dashboard />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

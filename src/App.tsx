import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/(auth)/Login";
import Register from "./pages/(auth)/Register";
import ProtectedRoot from "./pages/(protected)/ProtectedRoot";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/*" element={<ProtectedRoot />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./dashboard";
import { Home } from "./home";
import { Library } from "./library";
import { Wallet } from "./wallet";
import { Memenu } from "./memenu";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";

import "@css/navbar.css";
import "@css/home.css";
import "@css/footer.css";

function ProtectedRoot() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/library" element={<Library />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/me" element={<Memenu />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default ProtectedRoot;

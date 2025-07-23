import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import './i18n'; // import i18n config

function App() {
  return (
    <>
      <Header />
      <main className="bg-[#100e08]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;

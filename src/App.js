import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      {/* HEADER */}
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
      {/* App Body */}
      {/* Sidebar */}
      {/* Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;

import { Feedback } from "@material-ui/icons";
import React from "react";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      {/* HEADER */}
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
      {/* App Body */}
      {/* Sidebar */}
      {/* Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;

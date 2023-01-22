import React from "react";
import Nav from "./components/Nav";
import NoContentPage from "./components/NoContentPage";
import "./css/App.css";

function App() {
  return (
    <div className="flex-row flex bg-neutral-900 text-white h-screen w-screen">
      <Nav />
      <NoContentPage />
    </div>
  );
}

export default App;

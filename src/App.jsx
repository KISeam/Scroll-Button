import React from "react";
import ScrollButton from "./ScrollButton";

function App() {
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold text-center p-10">Scroll Down</h1>
      <div className="h-[2000px] bg-gray-100"></div>
      <ScrollButton />
    </div>
  );
}

export default App;

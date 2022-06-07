import FormTable from "./Components/FormTable";
import React, { useState, useEffect } from "react";

function App() {
  return (
    <div className="App text-center">
      <header className="App-header">
        <h2 className="my-2">AI based APP to check if you have a heart disease.</h2>
      </header>
      <FormTable />
    </div>
  );
}

export default App;

import React from 'react'
import AddNew from "./AddNew";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__Title">
        <h1>To Do List</h1>
      </div>
      <div className="app__body">
        <AddNew/>
      </div>
      
    </div>
  );
}

export default App;

import './App.css';
import React from "react";
import VendingMachine from "./VendingMachine";
import Snack from "./Snack"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const initialSnacks = [{name:"Fritos"},{name:"Lays"}, {name:"Soda"}];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine snacks={initialSnacks}/>}/>
          <Route path="/snacks/:snack" element={<Snack />}/>
          <Route path="/*"/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

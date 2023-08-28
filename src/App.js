import './App.css';
import React from "react";
import VendingMachine from "./VendingMachine";
import Snack from "./Snack"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Navigate} from "react-router-dom"

const initialSnacks = [{name:"Fritos"},{name:"Lays"}, {name:"Soda"}];


/**Main component, routes for vending machine app
 *
 * Props: None
 *
 *State : None
 *
 *App --> {VendingMachine, Snack}
*/

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine snacks={initialSnacks}/>}/>
          <Route path="/snacks/:name" element={<Snack />}/>
          <Route path="/*" element={<Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

import React from "react";
import {Link} from "react-router-dom";
import Snack from "./Snack";

/** Vending Machine component: Displays a link to each snack
 *
 * Props:
 *  snacks, a list of snack {name}
 *
 * States: None
 *
 * App --> VendingMachine.js
 *
*/

function VendingMachine({snacks}){
console.log(snacks)
//TODO: div need class name, uuid for line 22, li
 return (
  <div>
    <ul>
      {snacks.map(snack=><Link to={`/snacks/${snack.name}`}> {snack.name} </Link>)}
    </ul>
  </div>)

}

export default VendingMachine;
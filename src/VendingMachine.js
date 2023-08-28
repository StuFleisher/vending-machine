import React from "react";
import {Link} from "react-router-dom";
import Snack from "./Snack";

/** Displays a list of three links to Snack components */
function VendingMachine({snacks}){
console.log(snacks)
 return (
  <div>
    <ul>
      {snacks.map(snack=><Link to={`/snacks/${snack.name}`}> {snack.name} </Link>)}
    </ul>
  </div>)

}

export default VendingMachine;
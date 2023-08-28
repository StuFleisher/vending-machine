import React from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

/** Snack component: Displays single snack
 *
 * Props: None
 * State: None
 * App --> Snack.js
 */

function Snack() {
  const { name } = useParams();

  console.log("names here>>>>", name);
  //TODO: classname should be just snack no need to make it dynamic
  return (
    <div className={name}>

      <h1> {name} </h1>
      {<Link to="/"> Home </Link>}
    </div>
  );
}

export default Snack;
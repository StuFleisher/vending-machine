import React from "react";
import {useState} from "react";
import {useParams} from "react-router-dom"

function Snack(){
  const {name} = useParams()

  console.log("names here>>>>", name)
  
  return(
    <div className={name}>
      <h1> {name} </h1>
    </div>
  )
}

export default Snack;
import React from "react";
import Food from "./Food.js"

const menu = (props) => {
  return (
    <>
    <h2>{props.title}</h2>
    {props.items.map((food) => <Food food={food.food} price={food.price} vegetarian={food.vegetarian} veg={props.veg}/>)}
    </>
  )
}

export default menu
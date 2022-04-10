import React from "react";
const food = (props) => {
  return (
    <>
    {props.veg? 
    props.vegetarian?
    <p> {props.food} (${props.price})</p>:
    null:
    <p> {props.food} (${props.price})</p>
}
    </>
  )
}

export default food
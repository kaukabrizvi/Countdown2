import { useState } from "react"
import './App.css';
import Menu from './Menu.js'
function App() {
  const menu = {
    "breakfast": [
      {"food": "pancakes", "price": 5.00, "vegetarian": true},
      {"food": "waffles", "price": 5.00, "vegetarian": true},
      {"food": "orange juice", "price": 2.00, "vegetarian": true}
    ],
    "lunch": [
      {"food": "turkey sandwich", "price": 8.00, "vegetarian": false},
      {"food": "grilled cheese", "price": 6.00, "vegetarian": true},
      {"food": "hamburger", "price": 8.00, "vegetarian": false}
    ],
    "dinner": [
      {"food": "chicken alfredo", "price": 10.00, "vegetarian": false},
      {"food": "tofu stir-fry", "price": 9.00, "vegetarian": true},
      {"food": "chili", "price": 8.00, "vegetarian": false}
    ]
  }
  const meals = ['breakfast', 'lunch', 'dinner']
  const [veg, setVeg] = useState(false);
  let text1 = "Show all"
  let text2 = "Show Vegetarian Options"
  const changeVeg = () =>{
    setVeg(!veg)
  }
  return (
    <div className="App">
      <h1>Menu</h1>
      <button onClick={changeVeg}>{veg?text1:text2}</button>
      {meals.map((mealType) => <Menu title={mealType} items={menu[mealType]} veg={veg} />)}
    </div>
  );
}

export default App;

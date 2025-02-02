import Items from "./components/Items";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  //let foodItems = [];

  let [foodItems, setFoodItems] = useState([
    "Milk",
    "Lentils",
    "Rice",
    "Chapati",
  ]);

  const handleOnKeyDown = () => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log("Food Value entered is" + newFoodItem);
    }

    setTextToShow(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <ErrorMessage foodItem={foodItems} />
        <FoodInput handleOnKeyDown={handleOnKeyDown} />
        <Items foodItem={foodItems}></Items>
      </Container>
      {/* 
      <Container>
        <p>Above is the list of healthy foods that are good for your health.</p>
      </Container> */}
    </>
  );
}

export default App;

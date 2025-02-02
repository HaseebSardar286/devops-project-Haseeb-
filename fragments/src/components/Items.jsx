import { useState } from "react";
import IndividualItem from "./IndividualItem";
const Items = ({ foodItem }) => {
  let [activeItems, setActiveItems] = useState([]);
  const handleBuyButton = (item, event) => {
    console.log(event);
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };
  return (
    <ul className="list-group">
      {foodItem.map((item) => (
        <IndividualItem
          foodItem={item}
          key={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => handleBuyButton(item, event)}
        />
      ))}
    </ul>
  );
};

export default Items;

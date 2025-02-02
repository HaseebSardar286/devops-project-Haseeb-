import styles from "./Item.module.css";

// const IndividualItem = ({ foodItem }) => {
// const handleBuyButtonClick = (event) => {
//   console.log(event);
//   console.log(`${foodItem} bought`);
// };

//   //let { foodItem } = props;
//   return (
//     <li key={foodItem} className={`${styles["bg-color"]} list-group-item`}>
//       <span className={styles["span"]}>{foodItem}</span>
//       <button
//         className={`${styles.button} btn btn-info`}
//         // onClick={handleBuyButtonClick
//         onClick={(event) => handleBuyButtonClick(event)}
//       >
//         Buy
//       </button>
//     </li>
//   );
// };

const IndividualItem = ({ foodItem, bought, handleBuyButton }) => {
  //let { foodItem } = props;
  return (
    <li
      key={foodItem}
      className={`${styles["bg-color"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        // onClick={handleBuyButtonClick
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default IndividualItem;

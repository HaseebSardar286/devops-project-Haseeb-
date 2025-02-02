import styles from "./FoodInput.module.css";
// const FoodInput = () => {
//   const handleOnchange = () => {
//     console.log(event.target.value);
//   };
//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Enter Food Here"
//         className={styles.input}
//         onChange={handleOnchange}
//       />
//     </>
//   );
// };

const FoodInput = ({ handleOnKeyDown }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Food Here"
        className={styles.input}
        onKeyDown={handleOnKeyDown}
      />
    </>
  );
};

export default FoodInput;

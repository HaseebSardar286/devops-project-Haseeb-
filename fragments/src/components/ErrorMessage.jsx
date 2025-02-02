const ErrorMessage = ({ foodItem }) => {
  return <>{foodItem.length === 0 ? <h3>I am still Hungry.</h3> : null}</>;
};

export default ErrorMessage;

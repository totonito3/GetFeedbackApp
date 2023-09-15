import LoadingIcon from "../assets/spinner.gif";

function Spinner() {
  return (
    <img
      src={LoadingIcon}
      alt="Loading..."
      style={{ width: "100px", margin: "auto", display: "block" }}
    />
  );
}

export default Spinner;

// This component renders a button with the given props
import PropTypes from "prop-types";
function Button({ children, version, type, isDisabled }) {
  // Returns a button element with the given props
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

// Sets default props for the button
Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

// Defines the prop types for the button
Button.protoTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

// Exports the button component
export default Button;

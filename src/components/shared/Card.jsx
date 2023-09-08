// This component renders a card with the given children and reverse styling
import PropTypes from "prop-types";
function Card({ children, reverse }) {
  // return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

  return (
    <div
      className="card"
      style={{
        // Set background color based on reverse prop
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        // Set text color based on reverse prop
        color: reverse ? "#fff" : "#000",
      }}>
      {children}
    </div>
  );
}

// Set default props for reverse
Card.defaultProps = {
  reverse: false,
};

// Set prop types for children and reverse
Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;

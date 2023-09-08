// Header component to render a header with text, background color and text color
import PropTypes from "prop-types";
function Header({ text, bgColor, textColor }) {
  // Create style object for the header
  const headerStyle = { backgroundColor: bgColor, color: textColor };

  // Render the header
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text} App</h2>
      </div>
    </header>
  );
}

// Set default props for the header
Header.defaultProps = {
  text: "FeedBack UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

// Define prop types for the header
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

// Export the header component
export default Header;

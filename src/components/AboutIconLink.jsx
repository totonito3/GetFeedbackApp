// Import FaQuestion icon from react-icons/fa
import { FaQuestion } from "react-icons/fa";

// Import Link component from react-router-dom
import { Link } from "react-router-dom";

// Create AboutIconLink component
const AboutIconLink = () => {
  return (
    <div className="about-link">
      {/* Render a link to the about page */}
      <Link to={{ pathname: "/about" }}>
        {/* Render FaQuestion icon with size of 30 */}
        <FaQuestion size={30} />
      </Link>
    </div>
  );
};

// Export AboutIconLink component
export default AboutIconLink;

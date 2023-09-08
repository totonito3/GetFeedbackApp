import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutIconLink = () => {
  return (
    <div className="about-linl">
      <Link to={{ pathname: "/about" }}>
        <FaQuestion size={30} />
      </Link>
    </div>
  );
};

export default AboutIconLink;

// Importing Link component from react-router-dom library
import { Link } from "react-router-dom";
// Importing Card component from shared folder
import Card from "../components/shared/Card";

// AboutPage function to render the about page content
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React App to leave feedback for a product or service</p>
        <p>Version: 1.0.0</p>

        {/* Link to navigate back to home page */}
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </Card>
  );
}

// Exporting AboutPage component
export default AboutPage;

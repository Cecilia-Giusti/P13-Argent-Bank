import { Link } from "react-router-dom";

/**
 * Component to display the error page
 * @component
 * @return {JSX.Element}
 */
const Error: React.FC = (): JSX.Element => {
  return (
    <main className="main bg-dark">
      <section className="error-content">
        <h1>Error</h1>
        <p>This page does not exist. </p>
        <Link to={"/"}>Back to the homepage.</Link>
      </section>
    </main>
  );
};

export default Error;

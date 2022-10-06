import { Link } from "react-router-dom";

const Error = () => {
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

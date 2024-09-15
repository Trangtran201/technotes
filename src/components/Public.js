import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap"> Repairs Shop!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Beautiful Downtown City, Repairs Shop provides a trained
          staff ready to meet your tech repair needs.
        </p>
        <address className="public__addr">
          Repairs Shop
          <br />
          Beautiful Downtown City
          <br />
          HCMC, Vietnam <br />
          <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <br />
        <p>Owner: Mrs.Jo</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;

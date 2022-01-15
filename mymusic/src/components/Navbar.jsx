import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Apka Music</h2>
      <input type="text" placeholder="search your songs" />
      <h1>
        <Link to="/">home</Link>
      </h1>
      <h1>
        <Link to="/login">login</Link>
      </h1>
      <h1>
        <Link to="/music">Music</Link>
      </h1>
    </div>
  );
};

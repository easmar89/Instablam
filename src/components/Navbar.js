import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/photos">Gallery</Link>
      <Link to="/">Home</Link>
    </nav>
  );
}

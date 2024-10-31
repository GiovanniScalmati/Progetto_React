import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"
import routes from "../../routes/routes";

export default function Navbar() {
  return (
    <nav className={"navbar navbar-expand-lg bg-primaryC sticky-top " + styles.border_nav}>
      <div className="container-fluid">
        <Link className="h1 text-secondaryC" to={routes.home}><span className="text-accentC">R</span>eactor</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              
              <Link className="nav-link">Registrati</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Login</Link>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

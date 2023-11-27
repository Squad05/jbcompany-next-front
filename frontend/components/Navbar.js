import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${styles.header}`}
      id="navContainer"
    >
      <div>
        <a href="#" className="navbar-brand">
          <img src="" alt="Jb Company" />
        </a>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className={`collapse navbar-collapse ${styles.menu}`} id="navbarNav">
        <ul className={`navbar-nav ${styles.containerMenu}`}>
          <li> Teste</li>
          <li> Teste</li>
          <li> Teste</li>
          <li> Teste</li>
        </ul>
      </div>
    </nav>
  );
}

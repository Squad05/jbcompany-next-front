import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const scroolParaSessao = (id) => {
    const sessao = document.getElementById(id);
    if (sessao) {
      sessao.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <li>
            <a href="#sobre" onClick={() => scroolParaSessao("section1")}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#equipe" onClick={() => scroolParaSessao("equipe")}>
              Equipe
            </a>
          </li>
          <li>
            <a href="#faq" onClick={() => scroolParaSessao("faq")}>
              Faq
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

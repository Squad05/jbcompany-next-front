import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.estilo_footer} id="footer">
      <div className={`row ${styles.estilo_secoes_footer}`}>
        <div className="col-6 col-md-2 mb-3">
          <h5>Seções</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link href="/" className="nav-link p-0">
                Home
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#sobre" className="nav-link p-0">
                Sobre
              </Link>
            </li>
            <li className="nav-item mb-2">
              <a href="#equipe" className="nav-link p-0">
                Equipe
              </a>
            </li>
            <li className="nav-item mb-2">
              <Link href="#faq" className="nav-link p-0">
                Faq
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h5>Informações </h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">jbcompany@example.com</li>
            <li className="nav-item mb-2">(55) 1234-5678</li>
            <li className="nav-item mb-2">Rua de Exemplo, 123</li>
            <li className="nav-item mb-2"> Aberto das 08:00 às 19:00 </li>
          </ul>
        </div>
        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Assine nossa newsletter</h5>
            <p>Receba novidades e promoções exclusivas.</p>
            <div className={styles.input_container}>
              <label htmlFor="newsletter1" className="visually-hidden">
                Endereço de Email
              </label>
              <input
                id="newsletter1"
                type="text"
                className={styles.input_footer}
                placeholder="Endereço de Email"
              />
              <button className={`btn ${styles.estilobotao}`} type="button">
                Assinar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.estilocredito}>
        <p>©Squad 05 - Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

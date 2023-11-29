import styles from "../styles/Cards.module.css";

export default function Cards() {
    return (
        <div className="corpo-card">
            <div className="img-card">
                <img src="" alt="img card" />
            </div>
            <div className="card-info">
                <h2>Titulo card</h2>
                <p>Descrição do card</p>
            </div>
        </div>
    );
}

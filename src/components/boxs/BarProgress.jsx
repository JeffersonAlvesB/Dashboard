import styles from "./css/BarProgress.module.css";
import { GitHubContext } from "../../contexts/GitHubContext";
import { useContext } from "react";

const ProgressBar = ({ titulo, paragrafo }) => {
    const { barraSeguidores, barraSeguindo } = useContext(GitHubContext);

    return (
        <div className={styles.container_barra}>
            <h3>{titulo}</h3>
            <span className={styles.progress}>
                Seguidores está em{" "}
                {(barraSeguidores > 100 ? 100 : barraSeguidores).toFixed(0)}%
            </span>
            <div className={styles.progresso_barra}>
                <div
                    className={styles.barra}
                    style={{
                        width: `${
                            barraSeguidores > 100 ? 100 : barraSeguidores
                        }%`,
                    }}
                ></div>
            </div>
            <span className={styles.progress}>
                Seguindo está em{" "}
                {(barraSeguindo > 100 ? 100 : barraSeguindo).toFixed(0)}%
            </span>
            <div className={styles.progresso_barra}>
                <div
                    className={styles.barra2}
                    style={{
                        width: `${barraSeguindo > 100 ? 100 : barraSeguindo}%`,
                    }}
                ></div>
            </div>
            <h4 className={styles.paragrafo}>{paragrafo}</h4>
        </div>
    );
};

export default ProgressBar;

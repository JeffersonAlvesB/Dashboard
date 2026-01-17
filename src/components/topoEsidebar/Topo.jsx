import styles from "./css/Topo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Topo = ({ menuHamburgue, Open, pesquisa }) => {
    // Estados
    const [pesquise, setPesquise] = useState("");

    // Função que pega o valor do input pesquisa e envia pro Dashboard
    const handleSearch = (e) => {
        const valor = e.target.value;
        setPesquise(valor);
        pesquisa(valor);
    };

    return (
        <header className="h-20 flex justify-between gap-6 px-3 w-full items-center bg-gradient-to-r from-[#15073a] to-[#180a3f] relative border-solid border-b-[1px] border-[#d3d3d32a]">
            <div className={styles.menu_icon} onClick={menuHamburgue}>
                <div
                    className={`${styles.menu_line} ${
                        Open ? styles.line1_open : ""
                    }`}
                ></div>
                <div
                    className={`${styles.menu_line} ${
                        Open ? styles.line2_open : ""
                    }`}
                ></div>
                <div
                    className={`${styles.menu_line} ${
                        Open ? styles.line3_open : ""
                    }`}
                ></div>
            </div>
            <label className="relative">
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white"
                />
                <input
                    type="search"
                    placeholder="Pesquisar..."
                    className={styles.ipt_pesquisa}
                    value={pesquise}
                    onChange={handleSearch}
                />
            </label>
            <h1 id={styles.titulo_principal}>JeffBoard</h1>
        </header>
    );
};

export default Topo;

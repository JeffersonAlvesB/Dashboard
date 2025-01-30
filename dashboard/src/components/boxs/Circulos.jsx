import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./css/Circulos.module.css";
import { useState, useEffect, useContext } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { ModalContext } from "../../contexts/ModalContext";
import { HistoricoContext } from "../../contexts/HistoricoContext";

const CircleProgress = ({ value, titulo }) => {
    const [concorda, setConcorda] = useState(false);
    const [demonstrarMeta, setDemonstrarMeta] = useState(false);
    const [load, setLoad] = useState(false);
    const { adicionarAoHistorico } = useContext(HistoricoContext);
    const { openModal, showNotification, plusNotification } =
        useContext(ModalContext);

    const concordaConfirmado = () => {
        setLoad(true);
        adicionarAoHistorico({ valor: value });
        setTimeout(() => {
            setLoad(false);
            setConcorda(true);

            setTimeout(() => {
                openModal();
                plusNotification();
                showNotification();
            }, 900);
        }, 1800);
    };

    const checkboxMeta = () => {
        setDemonstrarMeta(!demonstrarMeta);
    };

    useEffect(() => {
        if (concorda) {
            const timer = setTimeout(() => setConcorda(false), 1500);
            return () => clearTimeout(timer);
        }
    }, [concorda]);

    return (
        <>
            <div className={styles.box_ciculo}>
                <h3 className={styles.titulos_box}>{titulo}</h3>
                <div className={styles.circulo}>
                    <CircularProgressbar
                        value={demonstrarMeta === true ? 100 : value}
                        text={demonstrarMeta === true ? `${100}%` : `${value}%`}
                        styles={buildStyles({
                            textColor: "#fff",
                            pathColor: "#00b4d8",
                            trailColor: "#2c2c54",
                        })}
                    />
                </div>
                <div className={styles.button_container}>
                    <button
                        onClick={concordaConfirmado}
                        className={styles.btn1}
                    >
                        Concorda
                    </button>
                    <div className={styles.checkboxContainer}>
                        <input
                            type="checkbox"
                            id="checkbox"
                            onChange={checkboxMeta}
                            className={styles.checkboxButton__input}
                        />
                        <label
                            htmlFor="checkbox"
                            className={styles.checkboxButton}
                        >
                            Meta
                        </label>
                    </div>
                </div>
            </div>

            {load ? (
                <div className="fixed inset-0 bg-gray-100 bg-opacity-80 flex justify-center items-center px-3 rounded-lg">
                    <div className={styles.spinner}></div>
                </div>
            ) : (
                concorda && (
                    <div className="fixed inset-0 bg-gray-100 bg-opacity-80 flex justify-center items-center px-3 rounded-lg">
                        <div className="flex justify-center items-center gap-4 bg-[#152245] p-5 rounded-full shadow-lg ">
                            <span className="text-6xl text-white">
                                <AiOutlineCheck />
                            </span>
                        </div>
                    </div>
                )
            )}
        </>
    );
};

export default CircleProgress;

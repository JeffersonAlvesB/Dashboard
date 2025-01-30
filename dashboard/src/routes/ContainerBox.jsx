import styles from "./css/ContainerBox.module.css";
import ProgressBar from "../components/boxs/BarProgress";
import Box from "../components/boxs/Box";
import Circulos from "../components/boxs/Circulos";
import Grafico from "../components/boxs/Grafico";
import { useTransition, animated } from "@react-spring/web";
import { useContext } from "react";
import { GitHubContext } from "../contexts/GitHubContext";

const ContainerBox = ({ filtrarData }) => {
    const { repos, seguidores, seguindo, mediaNoCirculo } =
        useContext(GitHubContext);

    const transitions = useTransition(filtrarData, {
        keys: (item) => item.titulo,
        from: { opacity: 0, transform: "translateX(-10px)" },
        enter: { opacity: 1, transform: "translateX(0)" },
        leave: { opacity: 0, transform: "translateX(10px)" },
        config: {
            duration: 400,
        },
    });

    return (
        <div className={styles.container_box}>
            {transitions((style, item, t, index) => {
                switch (item.type) {
                    case "box":
                        return (
                            <animated.div style={style} key={index}>
                                <Box
                                    className={styles[`clip${index + 1}`]}
                                    altura={styles.box_altura}
                                    titulo={item.titulo}
                                    valor={item.valor || 0}
                                />
                            </animated.div>
                        );
                    case "circulos":
                        return (
                            <animated.div style={style} key={index}>
                                <Circulos
                                    titulo={item.titulo}
                                    value={item.valor}
                                />
                            </animated.div>
                        );
                    case "progress":
                        return (
                            <animated.div style={style} key={index}>
                                <ProgressBar
                                    titulo={item.titulo}
                                    paragrafo={item.paragrafo}
                                    barraSeguidores={seguidores}
                                    barraSeguindo={seguindo}
                                    levarMedia={mediaNoCirculo}
                                />
                            </animated.div>
                        );
                    case "grafico":
                        return (
                            <animated.div style={style} key={index}>
                                <Grafico
                                    titulo={item.titulo}
                                    repositorios={repos}
                                    seguidores={seguidores}
                                    seguindo={seguindo}
                                />
                            </animated.div>
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default ContainerBox;

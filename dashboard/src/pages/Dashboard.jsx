import styles from "./css/Dashboard.module.css";
import SideBar from "../components/topoEsidebar/SideBar";
import Topo from "../components/topoEsidebar/Topo";
import ContainerBox from "../routes/ContainerBox";
import ContainerTabelas from "../routes/ContainerTabelas";
import ContainerConfig from "../routes/ContainerConfig";
import ContainerSobre from "../routes/ContainerSobre";
import { useState, useEffect, useContext, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GitHubContext } from "../contexts/GitHubContext";
import { ModalContext } from "../contexts/ModalContext";
import { BsX } from "react-icons/bs";

const Dashboard = () => {
    // Estados e contexto.
    const [isOpen, setIsOpen] = useState(false);
    const [filtrarData, setFiltrarData] = useState([]);
    const [dadosOriginais, setDadosOriginais] = useState([]);
    const { isModalOpen, closeModal } = useContext(ModalContext);
    const {
        imgPerfil,
        nome,
        repos,
        seguidores,
        seguindo,
        localizacao,
        id,
        mediaNoCirculo,
    } = useContext(GitHubContext);

    // Abrir e fechar menu Hamburgue. Caso o menu estiver aberto, ele trava o scroll da pagina.
    const menuHamburgue = () => {
        setIsOpen(!isOpen);

        if (window.innerWidth <= 600  && window.innerHeight >= 600 &&  !isOpen) {
            document.body.style.overflow = "hidden";
            return;
        }
        document.body.style.overflow = "";
    };

    // Função de busca com filtro com base no valor do input.
    const handleSearch = useCallback(
        (texto) => {
            if (texto) {
                const filteredData = dadosOriginais.filter(({ titulo }) =>
                    titulo.toLowerCase().includes(texto.toLowerCase())
                );
                setFiltrarData(filteredData);
                return;
            }
            setFiltrarData(dadosOriginais);
        },
        [dadosOriginais]
    );

    // const com array de objetos, cada obj tem os boxs do dashboard
    const createData = [
        { type: "box", titulo: "Repositórios", valor: repos },
        { type: "box", titulo: "Seguidores", valor: seguidores },
        { type: "box", titulo: "Seguindo", valor: seguindo },
        {
            type: "circulos",
            titulo: "Progresso da Meta",
            valor: mediaNoCirculo,
        },
        {
            type: "progress",
            titulo: "Nível de Avanço",
            paragrafo: "A meta é bater 1000 seguidores e seguindo",
        },
        { type: "grafico", titulo: "Resumo Estatístico" },
    ];

    // Renderização dos boxes e configuração inicial dos dados
    useEffect(() => {
        setDadosOriginais(createData);
        setFiltrarData(createData);
    }, [repos, seguidores, seguindo, mediaNoCirculo]);

    return (
        <div className={styles.container}>
            <div
                className={`${styles.container_side} ${
                    isOpen ? styles.open : ""
                }`}
            >
                <SideBar
                    imgPerfil={imgPerfil}
                    nome={nome}
                    abreFechaSide={menuHamburgue}
                />
            </div>
            <div className={styles.container_main}>
                <Topo
                    menuHamburgue={menuHamburgue}
                    Open={isOpen}
                    pesquisa={handleSearch}
                />
                <div>
                    <Routes>
                        <Route
                            path="/"
                            element={<ContainerBox filtrarData={filtrarData} />}
                        />
                        <Route path="/tabelas" element={<ContainerTabelas />} />
                        <Route
                            path="/config"
                            element={
                                <ContainerConfig
                                    localizacao={localizacao}
                                    nome={nome}
                                    id={id}
                                />
                            }
                        />

                        <Route path="/sobre" element={<ContainerSobre />} />
                    </Routes>
                </div>
            </div>

            {isModalOpen && (
                <div className={styles.container_modal}>
                    <div className="max-w-[330px] w-full bg-[#886FD8] flex items-center justify-center relative p-6 pr-14 border-2 border-white rounded border-solid">
                        <h4 className="text-sm text-white">
                            Enviando Meta de {mediaNoCirculo}%
                        </h4>
                        <button
                            onClick={closeModal}
                            className=" absolute top-2 right-2 border-0 bg-transparent cursor-pointer"
                        >
                            <BsX className="text-white text-3xl" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;

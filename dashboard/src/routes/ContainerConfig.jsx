import Historico from "../components/historico/Historico";
import { useState } from "react";

const ContainerConfig = ({ localizacao, nome, id }) => {
    // Estados
    const [exibir, setExibir] = useState(false);
    // Função que exibe o componente Historico
    const viewHistory = () => {
        setExibir(true);
    };

    // Constantes para guardar a data, hora e minutos
    const date = new Date();
    const hora = date.getHours();
    const minutos = date.getMinutes();

    // Função para deslogar do dashboard e voltar para a tela de login
    const ExitPage = () => {
        localStorage.clear();
        location.reload();
    };

    return (
        <div className="min-h-screen w-full bg-[#10062a] p-8 flex flex-col items-center">
            <div className="bg-[#25163c] text-white p-8 rounded-lg shadow-[8px_11px_20px_black]  w-full max-w-4xl flex flex-col items-center gap-8">
                <h2 className="text-3xl sm:text-5xl">Configurações</h2>
                <div className="flex flex-col gap-8 justify-center items-center p-8 lg:flex-row">
                    <div className="border-4 border-solid border-[#958787] rounded-lg flex flex-col gap-8 p-4 w-60 h-72 sm:w-80">
                        <h3 className="text-lg text-center">Perfil</h3>
                        <span>Nome: {nome || "Não informado"}</span>
                        <span>
                            Localização: {localizacao || "Não informado"}
                        </span>
                        <span>id: {id || "Não informado"}</span>
                    </div>
                    <div className="border-4 border-solid border-[#958787] rounded-lg flex flex-col gap-8 p-4 w-60 h-72 sm:w-80">
                        <h3 className="text-lg text-center">Config</h3>
                        <div className="flex justify-between items-center">
                            <span className="text-sm">Horas:</span>
                            <span className="text-lg">
                                {hora}:{minutos}
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm">Metas</span>
                            <button
                                className="w-20 py-2 text-white bg-[#6d50ce] rounded-md transition duration-500 hover:bg-[#533d9c] active:bg-[#2a1864]"
                                onClick={viewHistory}
                            >
                                Exibir
                            </button>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm">Deseja Sair?</span>
                            <button
                                onClick={ExitPage}
                                className="w-20 py-2 text-white bg-[#ff0000] rounded-md transition duration-500 hover:bg-[#a20808] active:bg-[#670404]"
                            >
                                Sim
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {exibir && <Historico setExibir={setExibir} />}
        </div>
    );
};

export default ContainerConfig;

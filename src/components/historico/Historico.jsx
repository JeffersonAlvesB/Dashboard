import { useContext } from "react";
import { HistoricoContext } from "../../contexts/HistoricoContext";
import { BsX } from "react-icons/bs";

const Historico = ({ setExibir }) => {
    //Contexto
    const { historico, setHistorico } = useContext(HistoricoContext);

    //Baixar a lista do histórico no dispositivo
    const downloadHistory = () => {
        const conteudo = historico
            .map(
                (item) =>
                    `Média Seguidores/Seguindo do Github é: ${item.valor}% - Data: ${item.data}`
            )
            .join("\n");

        const blob = new Blob([conteudo], { type: "text/plain" });

        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "historico_github.txt";
        link.click();
    };

    //Fechar modal
    const closeModal = () => {
        setExibir(false);
    };

    //Caso não tenha meta no histórico
    const metaIndisponivel = (
        <div className="text-red-600">Não existe meta disponível.</div>
    );

    const removerDoHistorico = (index) => {
        const novoHistorico = historico.filter((_, i) => i !== index);
        setHistorico(novoHistorico);
    };

    return (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex justify-center items-center z-10 px-2">
            <div className="flex flex-col justify-center items-center gap-6 bg-[#152245] py-12 px-14 pb-5 rounded-lg shadow-lg min-w-xs max-h-72 modal">
                <h3 className="text-white text-lg text-center sm:text-3xl">
                    Histórico de Médias
                </h3>
                {historico.length > 0 ? (
                    <ul
                        className="flex flex-col gap-2 text-center overflow-y-auto p-2"
                        style={{
                            scrollbarWidth: "thin", //
                            scrollbarColor: "#6d50ce transparent",
                        }}
                    >
                        {historico.map((item, index) => (
                            <li className="text-white" key={index}>
                                Média Seguidores/Seguindo é: {item.valor}% -
                                Data: {item.data}
                                <button
                                    onClick={() => removerDoHistorico(index)}
                                    className="ml-2 text-red-500"
                                >
                                    Remover
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    metaIndisponivel
                )}

                <button
                    onClick={downloadHistory}
                    className="text-white px-4 py-2 bg-[#6d50ce] hover:bg-[#432e86] rounded-md cursor-pointer transition duration-500"
                >
                    Baixar
                </button>
                <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 border-0 bg-transparent cursor-pointer"
                >
                    <BsX className="text-white text-5xl" />
                </button>
            </div>
        </div>
    );
};

export default Historico;

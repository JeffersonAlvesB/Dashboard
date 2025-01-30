import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Tabelas from "../components/boxs/Tabelas";
import { useState } from "react";

const ContainerTabelas = () => {
    // Estados
    const [IsOpenModal, setIsOpenModal] = useState(false);

    // Função que Abre e Fecha o modal
    const OpenModal = () => setIsOpenModal(true);
    const CloseModal = () => setIsOpenModal(false);

    return (
        <div className="min-h-screen w-full bg-[#10062a] p-8 flex flex-col items-center">
            <div className="bg-[#25163c] text-white p-6 rounded-lg shadow-[8px_11px_20px_black]  w-full max-w-4xl flex flex-col justify-center gap-2">
                <div className="flex justify-around items-center flex-col sm:flex-row">
                    <h2 className="text-3xl sm:text-5xl">Tabelas</h2>
                    <div>
                        <button
                            className="text-3xl py-2 px-4 bg-[#06aecc] rounded-md cursor-pointer transition duration-500 hover:bg-[#0698b2] active:bg-[#057f95]"
                            onClick={OpenModal}
                        >
                            <FontAwesomeIcon
                                icon={faPlus}
                                style={{ color: "#ffffff" }}
                            />
                        </button>
                    </div>
                </div>
                <Tabelas openModal={IsOpenModal} fecharModal={CloseModal} />
            </div>
        </div>
    );
};

export default ContainerTabelas;

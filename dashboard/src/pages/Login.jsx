import "./css/Login.css";
import imgLogin from "../assets/dashLogin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faLock,
    faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState, useContext } from "react";
import { GitHubContext } from "../contexts/GitHubContext";

const Login = ({ enviarDados, dados }) => {
    // Estados
    const [nome, setNome] = useState("");
    const [gitName, setGitName] = useState("");
    const { handleSalvarDados } = useContext(GitHubContext);

    // Função de submit que envia os valores dos inputs para a API
    const formSub = (e) => {
        e.preventDefault();
        dados(nome, gitName);
        enviarDados();
    };

    return (
        <section className="h-screen flex justify-center items-center bg-gradient-to-r from-purple-800 via-purple-900 to-gray-800">
            <div className="bg-[#180a3f] flex md:gap-4 p-12 rounded-lg w-[44.375rem] h-[25.625rem] mx-[3%] relative overflow-hidden justify-center container_box">
                <div className="hidden md:flex md:w-[18.75rem] md:h-[18.75rem] md:justify-center md:items-center">
                    <img className="w-full" src={imgLogin} alt="" />
                </div>
                <form
                    onSubmit={formSub}
                    className="flex flex-col items-center justify-center w-[300px]"
                >
                    <h2 className="text-white text-3xl">Login</h2>
                    <div className="flex flex-col gap-5">
                        <label className="relative">
                            <span className="absolute top-1/2 transform -translate-y-1/2 text-white">
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <input
                                className="w-full p-[10px] pl-[35px] box-border bg-transparent border-b-2 border-solid border-b-[#ccc] text-white focus:outline-none focus:border-b-white"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                type="text"
                                placeholder="Seu nome..."
                                required
                            />
                        </label>
                        <label className="relative">
                            <span className="absolute top-1/2 transform -translate-y-1/2 text-white">
                                <FontAwesomeIcon icon={faLock} />
                            </span>
                            <input
                                className="w-full p-[10px] pl-[35px] box-border bg-transparent border-b-2 border-solid border-b-[#ccc] text-white focus:outline-none focus:border-b-white"
                                type="password"
                                placeholder="Sua senha..."
                                required
                            />
                        </label>
                        <label className="relative">
                            <span className="absolute top-1/2 transform -translate-y-1/2 text-white">
                                <FontAwesomeIcon icon={faGithub} />
                            </span>
                            <input
                                className="w-full p-[10px] pl-[35px] box-border bg-transparent border-b-2 border-solid border-b-[#ccc] text-white focus:outline-none focus:border-b-white"
                                type="text"
                                placeholder="Login de seu github..."
                                value={gitName}
                                onChange={(e) => setGitName(e.target.value)}
                            />
                        </label>
                        <div className="flex items-center gap-3 mt-3">
                            <label className="flex items-center gap-4">
                                <input
                                    className="transform scale-150"
                                    type="checkbox"
                                    onChange={handleSalvarDados}
                                />
                                <span className="text-white text-sm">
                                    Salvar Dados
                                </span>
                            </label>
                            <div className="relative group">
                                <FontAwesomeIcon
                                    icon={faCircleInfo}
                                    className="text-base text-white cursor-pointer"
                                />

                                <div className="absolute hidden group-hover:block bg-black text-white text-sm p-3 rounded-xl shadow-lg sm:w-60 w-48 left-1/2 transform -translate-x-1/2 bottom-full mb-2  z-10">
                                    Ao marcar esta checkbox, você será mantido
                                    logado automaticamente na próxima vez que
                                    acessar o Dashboard.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <input
                            className="text-[var(--corFonte)] bg-[#6d50ce] text-[1.1rem] px-6 py-1.5 rounded-full cursor-pointer transition duration-500 hover:bg-[#4e3895] active:bg-[#2d234c]"
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContainerSobre = () => {
    return (
        <div className="min-h-screen w-full bg-[#10062a] p-8 flex flex-col items-center">
            <div className="bg-[#25163c] text-white p-8 rounded-lg shadow-[8px_11px_20px_black]  w-full max-w-4xl flex flex-col gap-8">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-5xl">Sobre</h2>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="leading-8 break-words">
                        Este projeto de Dashboard em ReactJS é projetado para
                        oferecer uma experiência interessante e completa para
                        acompanhamento de tarefas e monitoramento de dados. Com
                        gráficos e barras de progresso, é possível visualizar
                        dados em tempo real. A sidebar facilita a navegação e o
                        campo de pesquisa permite localizar boxes específicos do
                        dashboard rapidamente.
                    </p>
                    <p className="leading-8 break-words">
                        A integração com a API do GitHub é um dos diferenciais
                        do projeto: ao inserir o nickname na tela de login, o
                        sistema conecta-se com o GitHub e exibe diretamente no
                        dashboard informações dos repositórios, seguidores e
                        usuários seguidos, enriquecendo a interface com dados
                        relevantes para o usuário.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl sm:text-3xl text-center">
                        Redes Sociais
                    </h3>
                    <div className="flex justify-center gap-8 flex-wrap">
                        <a
                            className="hover:opacity-50"
                            href="https://github.com/JeffersonAlvesB"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                className="text-white text-4xl transition-transform duration-500 hover:scale-125"
                                icon={faGithub}
                            />
                        </a>
                        <a
                            className="hover:opacity-50"
                            href="https://wa.me/5521975567971"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                className="text-white text-4xl  transition-transform duration-500 hover:scale-125"
                                icon={faWhatsapp}
                            />
                        </a>
                        <a
                            className="hover:opacity-50"
                            href="mailto:alvesjefferson1288@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                className="text-white text-4xl  transition-transform duration-500 hover:scale-125"
                                icon={faEnvelope}
                            />
                        </a>
                        <a
                            className="hover:opacity-50"
                            href="https://www.linkedin.com/in/jefferson-alves-a0019930a/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                className="text-white text-4xl  transition-transform duration-500 hover:scale-125"
                                icon={faLinkedin}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContainerSobre;

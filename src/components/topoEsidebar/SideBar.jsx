import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import notFoto from "../../assets/NotFoto.png";
import {
    faHouse,
    faListCheck,
    faPen,
    faCog,
    faBell,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { ModalContext } from "../../contexts/ModalContext";
import { useContext } from "react";

const SideBar = ({ imgPerfil, nome, abreFechaSide }) => {
    const {
        isNotificationVisible,
        hideNotification,
        notificationLength,
        setNotificationLength,
    } = useContext(ModalContext);

    const NavLink_Click = () => {
        setNotificationLength(0);
        hideNotification();
    };

    return (
        <aside className=" w-full bg-[#180a3f] flex flex-col gap-8 pt-8 border-solid border-r-[1px] border-[#d3d3d32a]">
            <div className="flex flex-col items-center gap-4">
                <img
                    className="w-24 h-24 object-cover rounded-full border-solid border-2 border-[#9389cf]  shadow-[2px_2px_5px_black]"
                    src={imgPerfil || notFoto}
                    alt="Perfil"
                />
                <span className="text-[#9389cf]">
                    {nome || "Não informado"}
                </span>
                <p className="text-xs opacity-50 text-white">
                    Bem-vindo ao meu Dashboard!
                </p>
            </div>
            <div className="flex flex-col items-center gap-4">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `text-white no-underline flex gap-2 items-center justify-center py-4 w-full relative ${
                            isActive ? "bg-[#01d7ef]" : ""
                        }`
                    }
                    onClick={abreFechaSide}
                >
                    <FontAwesomeIcon icon={faHouse} />
                    <span className="w-20 opacity-80">Home</span>
                </NavLink>

                <NavLink
                    to="/tabelas"
                    className={({ isActive }) =>
                        `text-white no-underline flex gap-2 items-center justify-center py-4 w-full relative ${
                            isActive ? "bg-[#01d7ef]" : ""
                        }`
                    }
                    onClick={abreFechaSide}
                >
                    <FontAwesomeIcon icon={faListCheck} />
                    <span className="w-20 opacity-80">Tabelas</span>
                </NavLink>

                <NavLink
                    to="/config"
                    className={({ isActive }) =>
                        `text-white no-underline flex gap-2 items-center justify-center py-4 w-full relative ${
                            isActive ? "bg-[#01d7ef]" : ""
                        }`
                    }
                    onClick={() => {
                        abreFechaSide();
                        NavLink_Click();
                    }}
                >
                    <FontAwesomeIcon icon={faCog} />
                    <span className="w-20 opacity-80">Configurações</span>
                    {isNotificationVisible && (
                        <span className="absolute top-1 right-2 text-white flex gap-1 items-center">
                            <FontAwesomeIcon icon={faBell} />
                            <div>{notificationLength}</div>
                        </span>
                    )}
                </NavLink>

                <NavLink
                    to="/sobre"
                    className={({ isActive }) =>
                        `text-white no-underline flex gap-2 items-center justify-center py-4 w-full relative ${
                            isActive ? "bg-[#01d7ef]" : ""
                        }`
                    }
                    onClick={abreFechaSide}
                >
                    <FontAwesomeIcon icon={faPen} />
                    <span className="w-20 opacity-80">Sobre</span>
                </NavLink>
            </div>
        </aside>
    );
};

export default SideBar;

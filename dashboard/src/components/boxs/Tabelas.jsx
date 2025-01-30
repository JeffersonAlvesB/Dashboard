import { useState, useEffect } from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import "./css/Tabela.css";

const Tabelas = ({ openModal, fecharModal }) => {
    const [confirmar, setConfirmar] = useState("");

    const [newUser, setNewUser] = useState({
        nome: "",
        email: "",
        telefone: "",
    });

    const [usuarios, setUsuarios] = useState([
        {
            nome: "Jefferson Alves",
            email: "alvesjefferson1288@gmail.com",
            telefone: "5521975567971",
        },
    ]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleSubmit = () => {
        if (
            newUser.nome === "" ||
            newUser.email === "" ||
            newUser.telefone === ""
        )
            return;

        setConfirmar(true);
        setUsuarios([...usuarios, newUser]);
        setNewUser({ nome: "", email: "", telefone: "" });
    };

    const handleDelete = (index) => {
        const updatedUsuarios = usuarios.filter((_, i) => i !== index);
        setUsuarios(updatedUsuarios);
    };

    const alternarUsuarios = () => {
        const usuariosNovos = [...usuarios].reverse();
        setUsuarios(usuariosNovos);
    };

    const quantidadeDeUsers = usuarios.length;

    useEffect(() => {
        const storedUsers = localStorage.getItem("usuarios");
        if (storedUsers) {
            setUsuarios(JSON.parse(storedUsers));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        if (confirmar) {
            const timer = setTimeout(() => setConfirmar(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [usuarios, confirmar]);

    return (
        <div className="relative overflow-x-auto sm:rounded-xl">
            <div className="flex justify-between px-4">
                <label className="flex gap-1 mb-1">
                    <input
                        onChange={alternarUsuarios}
                        className=" scale-110"
                        type="checkbox"
                    />
                    <span>New Users</span>
                </label>
                <span>Users: {quantidadeDeUsers}</span>
            </div>

            <table className="w-full text-sm text-left rtl:text-right">
                <thead className="text-xs text-white uppercase bg-[#241630]">
                    <tr>
                        <th className="px-6 py-3 text-white text-center">
                            Nome
                        </th>

                        <th className="px-6 py-3 text-white text-center">
                            Email
                        </th>
                        <th className="px-6 py-3 text-white text-center">
                            Telefone
                        </th>
                        <th className="px-6 py-3 text-white text-center">
                            Deletar
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario, index) => (
                        <tr
                            key={index}
                            className=" bg-[#2E1A3D] border-b hover:bg-[#3F2A53]"
                        >
                            <td className="px-6 py-4 text-center">
                                {usuario.nome}
                            </td>
                            <td className="px-6 py-4 text-center">
                                {usuario.email}
                            </td>
                            <td className="px-6 py-4 text-center">
                                {usuario.telefone}
                            </td>
                            <td className="px-6 py-4 text-center">
                                <button
                                    onClick={() => handleDelete(index)}
                                    className="text-2xl duration-500 text-white hover:text-gray-400 active:text-gray-600"
                                >
                                    <AiOutlineClose />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {openModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-10 px-2 ">
                    <div className="bg-[#152245] p-6 rounded-lg shadow-lg w-96 min-w-xs">
                        <h3 className="text-xl mb-4 text-white ">
                            Adicionar Usuário
                        </h3>
                        <div className="mb-4">
                            <label className="block text-white">Nome:</label>
                            <input
                                type="text"
                                name="nome"
                                value={newUser.nome}
                                onChange={handleChange}
                                className="text-black mt-1 block w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white">Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={newUser.email}
                                onChange={handleChange}
                                className="text-black mt-1 block w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white">
                                Telefone:
                            </label>
                            <input
                                type="number"
                                name="telefone"
                                value={newUser.telefone}
                                onChange={handleChange}
                                className="text-black mt-1 block w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={handleSubmit}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg 
                                duration-500 hover:bg-blue-800 active:bg-blue-950"
                            >
                                Adicionar
                            </button>
                            <button
                                onClick={fecharModal}
                                className="ml-2 bg-red-500 text-white px-4 py-2 
                                duration-500 rounded-lg hover:bg-red-800 active:bg-red-950 "
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {confirmar && (
                <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex justify-center items-center z-10 px-2">
                    <div className="flex justify-center items-center gap-4 bg-[#152245] p-10 rounded-lg shadow-lg w-72 min-w-xs modal">
                        <span className="text-3xl">
                            <AiOutlineCheck />
                        </span>
                        <h3 className="text-xl">Adicionado</h3>
                        <div className="border-animation"></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tabelas;

import { createContext, useState, useEffect } from "react";
import NotFoto from "../assets/NotFoto.png";

export const GitHubContext = createContext();

export const GitHubProvider = ({ children }) => {
    const [dash, setDash] = useState(false);
    const [load, setLoad] = useState(false);
    const [nome, setNome] = useState("");
    const [gitName, setGitName] = useState("");
    const [imgPerfil, setImgPerfil] = useState("");
    const [salvarDados, setSalvarDados] = useState(false);
    const [repos, setRepos] = useState("");
    const [seguidores, setSeguidores] = useState("");
    const [seguindo, setSeguindo] = useState("");
    const [localizacao, setLocalizacao] = useState("");
    const [id, setId] = useState("");

    // Carregar dados do localStorage ao iniciar
    useEffect(() => {
        const storedData = {
            nome: localStorage.getItem("nome"),
            gitName: localStorage.getItem("gitName"),
            imgPerfil: localStorage.getItem("imgPerfil"),
            repos: localStorage.getItem("repos"),
            seguidores: localStorage.getItem("seguidores"),
            seguindo: localStorage.getItem("seguindo"),
            localizacao: localStorage.getItem("localizacao"),
            id: localStorage.getItem("id"),
            salvarDados: localStorage.getItem("salvarDados") === "true",
        };

        if (storedData.salvarDados) {
            setNome(JSON.parse(storedData.nome));
            setGitName(JSON.parse(storedData.gitName));
            setImgPerfil(JSON.parse(storedData.imgPerfil));
            setRepos(JSON.parse(storedData.repos));
            setSeguidores(JSON.parse(storedData.seguidores));
            setSeguindo(JSON.parse(storedData.seguindo));
            setLocalizacao(JSON.parse(storedData.localizacao));
            setId(JSON.parse(storedData.id));
            setSalvarDados(true);
            setDash(true);
        }
    }, []);

    useEffect(() => {
        const dados = {
            nome,
            gitName,
            imgPerfil,
            repos,
            seguidores,
            seguindo,
            localizacao,
            id,
            dash,
            salvarDados,
        };

        Object.keys(dados).forEach((key) => {
            if (!salvarDados) {
                localStorage.removeItem(key);
                return;
            }
            localStorage.setItem(key, JSON.stringify(dados[key]));
        });
    }, [
        salvarDados,
        nome,
        gitName,
        imgPerfil,
        repos,
        seguidores,
        seguindo,
        localizacao,
        id,
        dash,
    ]);

    const barraSeguidores = (seguidores / 1000) * 100;
    const barraSeguindo = (seguindo / 1000) * 100;

    const handleSalvarDados = (e) => {
        const checked = e.target.checked;
        setSalvarDados(checked);
    };

    useEffect(() => {
        if (gitName) {
            const URL = `https://api.github.com/users/${gitName}`;
            const fetchGitHubData = async () => {
                const response = await fetch(URL);
                const data = await response.json();

                setNome(nome);
                setImgPerfil(data.avatar_url ? data.avatar_url : NotFoto);
                setRepos(data.public_repos || 0);
                setSeguidores(data.followers || 0);
                setSeguindo(data.following || 0);
                setLocalizacao(data.location || "Não informado");
                setId(data.id || 0);
            };
            fetchGitHubData();
        }
    }, [gitName]);

    const receber = () => {
        setLoad(true);
        setTimeout(() => {
            setLoad(false);
            setDash(true);
        }, 1800);
    };

    const dados = (nome, gitName) => {
        setNome(nome);
        setGitName(gitName);
        setDash(true);
    };

    // Função para calcular a média com as regras ajustadas
    const calcularMedia = (seguidores, seguindo) => {
        const barraSeguidores = (seguidores / 1000) * 100;
        const barraSeguindo = (seguindo / 1000) * 100;

        const seguidoresLimitado =
            barraSeguidores > 100 ? 100 : barraSeguidores;
        const seguindoLimitado = barraSeguindo > 100 ? 100 : barraSeguindo;

        const media = (seguidoresLimitado + seguindoLimitado) / 2;

        return Math.ceil(media > 100 ? 100 : media).toFixed(0);
    };

    const mediaNoCirculo = calcularMedia(seguidores, seguindo);

    return (
        <GitHubContext.Provider
            value={{
                dash,
                load,
                nome,
                imgPerfil,
                repos,
                seguidores,
                seguindo,
                localizacao,
                id,
                mediaNoCirculo,
                barraSeguidores,
                barraSeguindo,
                receber,
                dados,
                setSalvarDados,
                handleSalvarDados,
            }}
        >
            {children}
        </GitHubContext.Provider>
    );
};

import "./App.css";
import Login from "../src/pages/Login";
import Dashboard from "../src/pages/Dashboard";
import Loading from "./components/LoadingTransicao/Loading";
import { GitHubContext } from "../src/contexts/GitHubContext";
import { useContext, useEffect } from "react";

function App() {
    // Contexto
    const { dash, load, receber, dados } = useContext(GitHubContext);

    return (
        <>
            {load ? (
                <Loading />
            ) : dash ? (
                <Dashboard />
            ) : (
                <Login enviarDados={receber} dados={dados} />
            )}
        </>
    );
}

export default App;

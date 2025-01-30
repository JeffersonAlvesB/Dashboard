import { createContext, useState, useEffect } from "react";

export const HistoricoContext = createContext();

export const HistoricoProvider = ({ children }) => {
    const [historico, setHistorico] = useState(() => {
        const savedHistorico = localStorage.getItem("historico");
        return savedHistorico ? JSON.parse(savedHistorico) : [];
    });

    const adicionarAoHistorico = (item) => {
        const newHistorico = [
            ...historico,
            { ...item, data: new Date().toLocaleString() },
        ];
        setHistorico(newHistorico);
    };

    useEffect(() => {
        localStorage.setItem("historico", JSON.stringify(historico));
    }, [historico]);

    return (
        <HistoricoContext.Provider
            value={{ historico, adicionarAoHistorico, setHistorico }}
        >
            {children}
        </HistoricoContext.Provider>
    );
};

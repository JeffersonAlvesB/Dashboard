import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { GitHubProvider } from "./contexts/GitHubContext.jsx";
import { ModalProvider } from "./contexts/ModalContext.jsx";
import { HistoricoProvider } from "./contexts/HistoricoContext.jsx";

createRoot(document.getElementById("root")).render(
    <GitHubProvider>
        <ModalProvider>
            <HistoricoProvider>
                <BrowserRouter
                    future={{
                        v7_startTransition: true,
                        v7_relativeSplatPath: true,
                    }}
                >
                    <App />
                </BrowserRouter>
            </HistoricoProvider>
        </ModalProvider>
    </GitHubProvider>
);

import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [notificationLength, setNotificationLength] = useState(0);
    const [isNotificationVisible, setIsNotificationVisible] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const showNotification = () => setIsNotificationVisible(true);
    const hideNotification = () => setIsNotificationVisible(false);
    const plusNotification = () =>
        setNotificationLength(notificationLength + 1);

    setTimeout(() => {
        setIsModalOpen(false);
    }, 3000);

    return (
        <ModalContext.Provider
            value={{
                isModalOpen,
                openModal,
                closeModal,
                isNotificationVisible,
                showNotification,
                hideNotification,
                plusNotification,
                notificationLength,
                setNotificationLength,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

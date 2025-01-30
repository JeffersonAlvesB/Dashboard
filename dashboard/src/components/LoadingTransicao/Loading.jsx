import styles from "./Loading.module.css";

const Loading = () => {
    return (
        <div className="flex items-center justify-center overflow-hidden h-screen bg-[#180a3f]">
            <div
                className={`w-20 h-20 border-solid border-8 border-[#fff] border-t-[#423666] rounded-full ${styles.animation_spinner}`}
            ></div>
        </div>
    );
};

export default Loading;

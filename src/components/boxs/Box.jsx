const Box = ({ titulo, valor, className, altura }) => {
    return (
        <div
            className={`bg-[#180a3f] text-white p-6 pb-0 rounded-lg shadow-[8px_11px_20px_black] w-[250px] h-[250px] flex flex-col justify-between ${altura}`}
        >
            <h3 className="text-white">{titulo}</h3>
            <span className="text-[2rem] font-bold">{valor}</span>
            <div className={className}></div>
        </div>
    );
};

export default Box;

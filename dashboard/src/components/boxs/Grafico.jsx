import Chart from "react-apexcharts";

const Grafico = ({ titulo, repositorios, seguidores, seguindo }) => {
    const options = {
        chart: {
            type: "bar",
            toolbar: { show: false },
            background: "transparent",
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "60%",
                borderRadius: 5,
                endingShape: "rounded",
            },
        },
        dataLabels: { enabled: false },
        xaxis: {
            type: "category",
            categories: ["Repos", "Seg", "Sig"],
            labels: { style: { colors: "#fff" } },
        },
        yaxis: { labels: { style: { colors: "#fff" } } },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "vertical",
                gradientToColors: ["#6a5bff"],
                stops: [0, 100],
            },
        },
        colors: ["#00d4ff"],
        tooltip: { theme: "dark" },
    };

    const series = [
        {
            name: "Quantidade",
            data: [repositorios || 0, seguidores || 0, seguindo || 0],
        },
    ];

    return (
        <div className="bg-[#180a3f] text-white pt-6 rounded-lg shadow-[8px_11px_20px_black] w-[250px] h-[350px] flex flex-col justify-between items-center">
            <h3>{titulo}</h3>
            <Chart
                options={options}
                series={series}
                type="bar"
                width={220}
                height={270}
            />
        </div>
    );
};

export default Grafico;

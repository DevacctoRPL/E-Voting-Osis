// Styling Component
import Head from "../styling-components/header";
import Footer from "../styling-components/footer";
import React from "react";


//npm i apexcharts react-apexcharts
import Chart, {Props} from "react-apexcharts";

  const chartOsis:Props = {
    type: "donut",
    width: 220,
    height: 220,
    series: [44, 55, 13],
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        
        dataLabels: {
            enabled: true,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "55%",
                },
            },
        },
        labels: ['Elon Musk', 'Dillon Donovan Damaswara Putra', 'Gojoj Simanjuntak Junior'],
        colors: ["#020617", "#ff8f00", "#00897b"],
      legend: {
        show: false,
      },
    },
  };

  const chartMPK:Props = {
    type: "donut",
    width: 220,
    height: 220,
    series: [44, 55, 13],
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: true,
            formatter: function (val: number) {
                return val.toFixed(1) + '%';
              },
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "55%",
                },
            },
        },
        labels: ['Elon Musk', 'Dillon Donovan Damaswara Putra', 'Gojoj Simanjuntak Junior'],
        colors: ["#020617", "#ff8f00", "#00897b"],
      legend: {
        show: false,
      },
    },
  };

const Admin: React.FC = () => {


    return (
        <>
            <Head />
            <div className="container flex justify-center items-center w-screen h-screen mx-auto px-4 gap-16">
                {/* Osis */}
                <div className="osis container bg-merah-tergelap w-3/4 h-2/5 rounded-2xl relative flex items-center justify-center">
                    <div className="absolute right-0 flex flex-col items-end justify-center h-full">
                        <h1 className="text-[27rem] text-gelap opacity-10 font-extrabold">%</h1>
                    </div>
                    <div className="label top-0 left-0 bg-putih-putih w-32 flex flex-col items-start rounded-br-2xl rounded-tl-2xl overflow-hidden absolute">
                        <h2 className="font-bold m-2 mx-auto">OSIS</h2>
                        <span className="w-full p-1 italic text-xs bg-white text-center">graphic result</span>
                    </div>
                    <table className="w-1/3 h-1/3 bg-putih-putih text-center rounded-md">
                        <thead>
                            <tr>
                                <th className="border-r-4 border-b-4 border-gray-800 p-2">No</th>
                                <th className="border-b-4 border-gray-800">Vote</th>
                            </tr>
                        </thead>
                        <tbody>
                            {chartOsis.series?.map((chart, index )=> {
                                return <tr key={index}>
                                <td className="border-r-4 border-t-4 border-gray-800 p-2">0{index + 1}</td>
                                <td className="border-t-4 border-gray-800">{chart.toString()}</td>
                            </tr>
                            })}
                        </tbody>
                    </table>

                    <Chart {...chartOsis} />

                    <ul className="flex flex-col gap-4">
                        <span className="text-white italic">Live Voting Precentage</span>
                        <li className="flex items-center gap-4"><div className="w-5 h-5 rounded-full bg-white"></div>Elon Musk</li>
                        <li className="flex items-center gap-4"><div className="w-5 h-5 rounded-full bg-white"></div>Elon Musk</li>
                        <li className="flex items-center gap-4"><div className="w-5 h-5 rounded-full bg-white"></div>Elon Musk</li>
                    </ul>
                </div>
                {/* MPK */}
                <div className="mpk container bg-merah-tergelap w-3/4 h-2/5 rounded-2xl relative flex items-center justify-center">
                    <div className="absolute right-0 flex flex-col items-end justify-center h-full">
                        <h1 className="text-[27rem] opacity-10 font-extrabold text-gelap">%</h1>
                    </div>
                    <div className="label top-0 left-0 bg-putih-putih w-32 flex flex-col items-start rounded-br-2xl rounded-tl-2xl overflow-hidden absolute">
                        <h2 className="font-bold m-2 mx-auto">MPK</h2>
                        <span className="w-full p-1 italic text-xs bg-white text-center">graphic result</span>
                    </div>
                    <table className="w-1/3 h-1/3 bg-putih-putih text-center rounded-md">
                        <thead>
                            <tr>
                                <th className="border-r-4 border-b-4 border-gray-800 p-2">No</th>
                                <th className="border-b-4 border-gray-800">Vote</th>
                            </tr>
                        </thead>
                        <tbody>
                        {chartMPK.series?.map((chart, index )=> {
                                return <tr key={index}>
                                <td className="border-r-4 border-t-4 border-gray-800 p-2">0{index + 1}</td>
                                <td className="border-t-4 border-gray-800">{chart.toString()}</td>
                            </tr>
                            })}
                        </tbody>
                    </table>

                    <Chart {...chartMPK} />

                    <ul className="flex flex-col gap-4">
                        <span className="text-white italic">Live Voting Precentage</span>
                        <li className="flex items-center gap-4"><div className="w-5 h-5 rounded-full bg-white"></div>Elon Musk</li>
                        <li className="flex items-center gap-4"><div className="w-5 h-5 rounded-full bg-white"></div>Elon Musk</li>
                        <li className="flex items-center gap-4"><div className="w-5 h-5 rounded-full bg-white"></div>Elon Musk</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Admin;

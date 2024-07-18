// Styling Component
import Head from "../styling-components/header";
import Footer from "../styling-components/footer";
import React from "react";


//npm i apexcharts react-apexcharts
import Chart, {Props} from "react-apexcharts";

  const chartOsis:Props = {
    type: "pie",
    width: 220,
    height: 220,
    series: [44, 55, 13],
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        title: {
            text: ""
        },
        dataLabels: {
            enabled: false,
        },
        labels: ['Elon Musk', 'Dillon Donovan Damaswara Putra', 'Gojoj Simanjuntak Junior'],
        colors: ["#020617", "#ff8f00", "#00897b"],
      legend: {
        show: false,
      },
    },
  };

  const chartMPK:Props = {
    type: "pie",
    width: 220,
    height: 220,
    series: [44, 55, 13],
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        title: {
            text:"",
        },
        dataLabels: {
            enabled: false,
        },
        labels: ['Elon Musk', 'Team B', 'Team C'],
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
                <div className="osis container bg-merah-tergelap w-3/4 h-2/5 rounded-2xl relative flex items-center">
                    <div className="absolute right-0 flex flex-col items-end justify-center h-full">
                        <h1 className="text-[27rem] text-gelap opacity-10 font-extrabold">%</h1>
                    </div>
                    <div className="label top-0 left-0 bg-putih-putih w-32 flex flex-col items-start rounded-br-2xl rounded-tl-2xl overflow-hidden absolute">
                        <h2 className="font-bold m-2">OSIS</h2>
                        <span className="w-full p-1 italic text-xs bg-white text-center">graphic result</span>
                    </div>
                    <table className="w-1/3 h-1/3 bg-putih-putih text-center rounded-md">
                        <thead>
                            <tr>
                                <th className="border-r border-b border-gray-800 p-2">No</th>
                                <th className="border-b border-gray-800">Vote</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-r border-b border-gray-800 p-2">01</td>
                                <td className="border-b border-gray-800">70</td>
                            </tr>
                            <tr>
                                <td className="border-r border-b border-gray-800 p-2">02</td>
                                <td className="border-b border-gray-800">70</td>
                            </tr>
                            <tr>
                                <td className="border-r border-gray-800 p-2">03</td>
                                <td className="">70</td>
                            </tr>
                        </tbody>
                    </table>
                    {/* Biarin merah emg begitu, kalo bisa di ilangin ilanginn aja */}
                    <Chart {...chartOsis} />
                </div>
                <div className="mpk container bg-merah-tergelap w-3/4 h-2/5 rounded-2xl relative flex items-center ">
                    <div className="absolute right-0 flex flex-col items-end justify-center h-full">
                        <h1 className="text-[27rem] opacity-10 font-extrabold text-gelap">%</h1>
                    </div>
                    <div className="label top-0 left-0 bg-putih-putih w-32 flex flex-col items-start rounded-br-2xl rounded-tl-2xl overflow-hidden absolute">
                        <h2 className="font-bold m-2">MPK</h2>
                        <span className="w-full p-1 italic text-xs bg-white text-center">graphic result</span>
                    </div>
                    <table className="w-1/3 h-1/3 bg-putih-putih text-center rounded-md">
                        <thead>
                            <tr>
                                <th className="border-r border-b border-gray-800 p-2">No</th>
                                <th className="border-b border-gray-800">Vote</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-r border-b border-gray-800 p-2">01</td>
                                <td className="border-b border-gray-800">70</td>
                            </tr>
                            <tr>
                                <td className="border-r border-b border-gray-800 p-2">02</td>
                                <td className="border-b border-gray-800">70</td>
                            </tr>
                            <tr>
                                <td className="border-r border-gray-800 p-2">03</td>
                                <td className="">70</td>
                            </tr>
                        </tbody>
                    </table>
                    {/* Biarin merah emg begitu, kalo bisa di ilangin ilanginn aja */}
                    <Chart {...chartMPK} />
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Admin;

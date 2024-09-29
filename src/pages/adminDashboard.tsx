// Styling Component
import React from "react";


//npm i apexcharts react-apexcharts
import Chart, { Props } from "react-apexcharts";
import { OrgImage } from "../components/animasiimage";

const chartOsis: Props = {
  type: "donut",
  width: 400,
  height: 400,
  series: [65, 35],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function(val: number) {
        return val.toFixed(1) + '%';
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
          },
          size: "50%",
        },
      },
    },
    labels: ['Elon Musk', 'Dillon Donovan Damaswara Putra'],
    colors: ["#6D1408", "#D9D9D9"],
    legend: {
      show: false,
    },
  },
};

const chartMPK: Props = {
  type: "donut",
  width: 400,
  height: 400,
  series: [45, 55],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function(val: number) {
        return val.toFixed(1) + '%';
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "50%",
        },
      },
    },
    labels: ['Elon Musk', 'Dillon Donovan Damaswara Putra'],
    colors: ["#00897b", "#FFEA00"],
    legend: {
      show: false,
    },
  },
};

const Admin: React.FC = () => {


  return (
    <>
      <div className="w-full h-[35vw] mt-[10vw] flex justify-around items-center">
        <div className="flex flex-col relative w-fit items-center gap-5">
          <div className="w-fit rounded-2xl px-2 py-5 drop-shadow-biru-mpk">
            <Chart {...chartMPK} />
          </div>
          <OrgImage Org={"MPK"} className="absolute top-[19%] left-[35%] w-[32%]" />
          <p className="text-white font-bold text-[3rem]">MPK</p>
<div className="w-[75%] text-white flex gap-3 justify-between items-center ">
            <div className="w-full flex justify-between items-center">
              <div className={`w-full flex text-[2rem] bg-[#6D1408] px-4 justify-around  rounded-xl gap-3 items-center border border-white`}>
                <p>01</p>
                <div className="h-20 border-l-2 border-l-white"></div>
                <p>{chartOsis.series?.[0].toString()}</p>
              </div>
              <div className={`w-full text-black flex text-[2rem] bg-[#D9D9D9] px-4 justify-around  rounded-xl gap-3 items-center border  border-white`}>
                <p>02</p>
                <div className="h-20 border-l-2 border-l-white"></div>
                <p>{chartOsis.series?.[1].toString()}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative flex-col w-fit items-center gap-5">
          <div className="w-fit rounded-2xl px-2 py-5  drop-shadow-kuning-osis">
            <Chart {...chartOsis} />
          </div>
          <OrgImage Org={"OSIS"} className="absolute top-[19%] left-[31%] w-[39%]" />
          <p className="text-white font-bold text-[3rem]">OSIS</p>
          <div className="w-[75%] text-white flex gap-3 justify-between items-center ">
            <div className="w-full flex justify-between items-center">
              <div className={`w-full flex text-[2rem] bg-[#6D1408] px-4 justify-around  rounded-xl gap-3 items-center border border-white`}>
                <p>01</p>
                <div className="h-20 border-l-2 border-l-white"></div>
                <p>{chartOsis.series?.[0].toString()}</p>
              </div>
              <div className={`w-full text-black flex text-[2rem] bg-[#D9D9D9] px-4 justify-around  rounded-xl gap-3 items-center border  border-white`}>
                <p>02</p>
                <div className="h-20 border-l-2 border-l-white"></div>
                <p>{chartOsis.series?.[1].toString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Admin;

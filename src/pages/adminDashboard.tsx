// Styling Component
import React, { useEffect, useState } from "react";


//npm i apexcharts react-apexcharts
import Chart, { Props } from "react-apexcharts";
import { OrgImage } from "../components/animasiimage";
import { useQuery } from "@tanstack/react-query";
import { datares } from "../api/api";
import { DataLiveRes } from "../types/types";

type DPMaker = (Paslons: string[], Colors: string[], series: number[]) => Props

const MakeDonutProps: DPMaker = (Paslons, Colors, series) => {
  const ChartRes: Props = {
    type: "donut",
    width: 400,
    height: 400,
    series: series,
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
      labels: Paslons,
      colors: Colors,
      legend: {
        show: false,
      },
    },
  }

  return ChartRes
}

const Admin: React.FC = () => {
  const [ovd, setovd] = useState<number[]>([0,0])
  const [omd, setomd] = useState<number[]>([0,0])

  const { data, isRefetching } = useQuery({
    queryFn: datares,
    queryKey: ["VoteData"],
    refetchInterval: 5000,
  })

  useEffect(() => {
    if (!data) return
    console.log(data.OSIS.Pemilih_1)
    const ovd = [data.OSIS.Pemilih_1, data.OSIS.Pemilih_2] as number[]
    const mvd = [data.MPK.Pemilih_1, data.MPK.Pemilih_2] as number[]
    setovd(ovd)
    setomd(mvd)
  }, [isRefetching])
  

  const Paslons = ["Paslon 01", "Paslon 02"]
  const chartMPK = MakeDonutProps(Paslons, ["#6D1408", "#D9D9D9"], ovd)
  const chartOSIS = MakeDonutProps(Paslons, ["#FFF", "#000"], omd)

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
                <p>{chartOSIS.series?.[0].toString()}</p>
              </div>
              <div className={`w-full text-black flex text-[2rem] bg-[#D9D9D9] px-4 justify-around  rounded-xl gap-3 items-center border  border-white`}>
                <p>02</p>
                <div className="h-20 border-l-2 border-l-white"></div>
                <p>{chartOSIS.series?.[1].toString()}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative flex-col w-fit items-center gap-5">
          <div className="w-fit rounded-2xl px-2 py-5  drop-shadow-kuning-osis">
            <Chart {...chartOSIS} />
          </div>
          <OrgImage Org={"OSIS"} className="absolute top-[19%] left-[31%] w-[39%]" />
          <p className="text-white font-bold text-[3rem]">OSIS</p>
          <div className="w-[75%] text-white flex gap-3 justify-between items-center ">
            <div className="w-full flex justify-between items-center">
              <div className={`w-full flex text-[2rem] bg-[#6D1408] px-4 justify-around  rounded-xl gap-3 items-center border border-white`}>
                <p>01</p>
                <div className="h-20 border-l-2 border-l-white"></div>
                <p>{chartOSIS.series?.[0].toString()}</p>
              </div>
              <div className={`w-full text-black flex text-[2rem] bg-[#D9D9D9] px-4 justify-around  rounded-xl gap-3 items-center border  border-white`}>
                <p>02</p>
                <div className="h-20 border-l-2 border-l-white"></div>
                <p>{chartOSIS.series?.[1].toString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>{isRefetching ? "refetching" : "yep"}</p>
    </>
  )
};

export default Admin;

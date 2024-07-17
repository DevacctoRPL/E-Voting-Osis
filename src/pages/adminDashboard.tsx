// Styling Component
import Head from "../styling-components/header";
import Footer from "../styling-components/footer";
import React from "react";

const Admin: React.FC = () => {
    return (
        <>
        <Head />
            <div className="container flex justify-center items-center w-screen h-screen mx-auto px-4 gap-16">
                <div className="osis container bg-merah-tergelap w-3/4 h-2/5 rounded-2xl relative">
                    <div className="absolute right-0 flex flex-col items-end justify-center h-full">
                        <h1 className="text-[27rem] text-gelap opacity-10 font-extrabold">%</h1>
                    </div>
                    <div className="label bg-putih-putih w-32 flex flex-col items-start rounded-br-2xl rounded-tl-2xl overflow-hidden">
                        <h2 className="font-bold m-2">OSIS</h2>
                        <span className="w-full p-1 italic text-xs bg-white text-center">graphic result</span>
                    </div>
                    <table className="w-1/3 bg-putih-putih text-center rounded-md">
                        <thead>
                            <tr>
                                <th className="border border-gray-800 p-2">No</th>
                                <th>Vote</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>01</td>
                                <td>70</td>
                            </tr>
                            <tr>
                                <td>02</td>
                                <td>70</td>
                            </tr>
                            <tr>
                                <td>03</td>
                                <td>70</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mpk container bg-merah-tergelap w-3/4 h-2/5 rounded-2xl relative">
                <div className="absolute right-0 flex flex-col items-end justify-center h-full">
                    <h1 className="text-[27rem] opacity-10 font-extrabold text-gelap">%
                    </h1>
                </div>
                    <div className="label bg-putih-putih w-32 flex flex-col items-center rounded-br-2xl rounded-tl-2xl overflow-hidden">
                        <h2 className="font-bold m-2" >MPK</h2>
                        <span className="w-full p-1 italic text-xs bg-white text-center">graphic result</span>
                    </div>
                </div>
            </div>
        <Footer />
        </>
    )
};

export default Admin;
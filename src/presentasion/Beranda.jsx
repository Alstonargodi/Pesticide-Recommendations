import { useState } from "react"
import { PostPenentuHama } from "../api/PostPenentuHama"
import { DropdownKondisiAnakan, DropdownKondisiBatang, DropdownKondisiBuah, DropdownKondisiDaun, DropdownKondisiFisik, DropdownMusim, DropdownPertumbuhan, DropdownVarietas } from "../components/DropdownKonsulHama"
import { KonsulHama } from "./KonsulHama"

export function Beranda(){
    const[predict,setPredict] = useState()
    const[resultHama,setResultHama] = useState([])

    const calculateHama = () =>{
        PostPenentuHama(predict)
        .then((r)=>{
            setResultHama(r.data.data.hasil)
            console.log(r.data.data.hasil.hama)
        })
        .catch((e)=>{
            console.log(e)
        })
    }

    return(
        <div className="min-h-screen bg-gray-600 min-w-screen">
            <div className="container">
                <div className="p-20">
                    <KonsulHama setpredict={setPredict} calculateHama={calculateHama}></KonsulHama>
                </div>

                <div className="p-20">
                    <HasilKonsulHama result={resultHama}></HasilKonsulHama>
                </div>

                <div className="p-20">
                    <KonsulPestisida></KonsulPestisida>
                </div>

                <div className="p-20">
                    <HasilKonsulPestisida></HasilKonsulPestisida>
                </div>
            </div>
        </div>
    )
}



function HasilKonsulHama({result}){
    return(
        <div className="bg-gray-200 p-5 rounded shadow-lg">
            <h1 className="text-start text-xl px-5">Hasil Konsultasi Hama</h1>
            <div className="flex p-3">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-[#2c2c2c] text-white border-y-2 font-bold">
                            <th className="w-[200px] py-3">Hama Pennyerang</th>
                            <th className="w-[366px]">Kesamaan Jaccard</th>
                            <th className="w-[366px]">Kesamaan Ecludiean K = 5</th>
                        </tr>
                        {
                            result.map((e)=>(
                                <tr className="border-b-2 font-bold">
                                    <td className="p-2 text-start">
                                        <h1>{e.hama}</h1>
                                        <h2 className="text-gray-500">
                                        {e.pertumbuhan}
                                        </h2>
                                        <h2 className="text-gray-500">
                                            {e.varietas}
                                        </h2>
                                        <h2 className="text-gray-500">
                                            {e.musim}
                                        </h2>
                                        <h2 className="text-gray-500">
                                            {e.kondisi_daun}
                                        </h2>
                                        <h2 className="text-gray-500">
                                            {e.kondisi_buah}
                                        </h2>
                                        <h2 className="text-gray-500">
                                            {e.kondisi_batang}
                                        </h2>
                                        <h2 className="text-gray-500">
                                            {e.kondisi_anakan}
                                        </h2>
                                        <h2 className="text-gray-500">
                                            {e.kondisi_fisik}
                                        </h2>
                                    </td>
                                    <td>{e.kedekatan_metode_jaccard}</td>
                                    <td>{e.kedekatan_metode_ecludiean}</td>
                                </tr>                                
                            ))
                        }
                    </thead>
                </table>
            </div>           
        </div>
    ) 
}

function KonsulPestisida(){
    return(
        <div className="bg-gray-300 rounded p-5 shadow-lg">
            <h1 className="text-start text-xl px-5">Konsultasi Pestisida</h1>
            <div className="flex p-3">
                <div className="w-1/2 px-2">
                    <h1 className="text-start text-xl py-5">Hama Penyerang</h1>
                    <DropdownPertumbuhan></DropdownPertumbuhan>
                </div>
                <div className="w-1/2 px-2">
                    <h1 className="text-start text-xl py-5">Harga Pestisida</h1>
                    <DropdownKondisiBuah></DropdownKondisiBuah>
                </div>
            </div>           
            <div>
                <button className="p-3 rounded bg-blue-500 text-white">Carikan</button>
            </div> 
        </div>
    )
}

function HasilKonsulPestisida(){
    return(
        <div className="bg-gray-400 p-5 rounded shadow-lg">
            <h1 className="text-start text-xl px-5">Hasil Konsultasi Pestisida</h1>
            <div className="flex p-3">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-[#F5F8FA] border-y-2 font-bold">
                            <th className="w-[66px] py-3">ID CASE</th>
                            <th className="w-[366px]">Pestisida</th>
                            <th className="w-[366px]">Kesamaan</th>
                        </tr>
                        <tr className="border-b-2 font-bold">
                            <td className="p-2">CH000000</td>
                            <td>Lorem Ipsumm</td>
                            <td>0.800002</td>
                        </tr>
                        <tr className="border-b-2 font-bold">
                            <td className="p-2">CH000000</td>
                            <td>Lorem Ipsumm</td>
                            <td>0.800002</td>
                        </tr>
                        <tr className="border-b-2 font-bold">
                            <td className="p-2">CH000000</td>
                            <td>Lorem Ipsumm</td>
                            <td>0.800002</td>
                        </tr>
                        <tr className="border-b-2 font-bold">
                            <td className="p-2">CH000000</td>
                            <td>Lorem Ipsumm</td>
                            <td>0.800002</td>
                        </tr>
                    </thead>
                </table>
            </div>           
        </div>
    ) 
}
import { useState } from "react"
import { PostPenentuHama, PostPenentuPestisida } from "../api/PostPenentuHama"
import { DropdownKondisiAnakan, DropdownKondisiBatang, DropdownKondisiBuah, DropdownKondisiDaun, DropdownKondisiFisik, DropdownMusim, DropdownPertumbuhan, DropdownVarietas } from "../components/DropdownKonsulHama"
import { HasilKonsulHama } from "./HasilKonsulHama"
import { KonsulHama } from "./KonsulHama"
import { KonsulPestisida } from "./KonsulPestisida"

export function Beranda(){
    const[predictHama,setPredictHama] = useState()
    const[predictPest,setPredictPest] = useState()

    const[resultHama,setResultHama] = useState([])
    const[resultPest,setResultPest] = useState([])
    const[dataBaru,setDataBaru] = useState()

    const calculateHama = () =>{
        PostPenentuHama(predictHama)
        .then((r)=>{
            setResultHama(r.data.data.hasil)
            setDataBaru(r.data.data.data_baru)
        })
        .catch((e)=>{
            console.log(e)
        })
    }

    const calcualtePest = () =>{
        console.log(predictPest)
        PostPenentuPestisida(predictPest)
        .then((r)=>{
            setResultPest(r.data.data.hasil)
        })
        .catch((e)=>{
            console.log(e)
        })
    }

    return(
        <div className="min-h-screen bg-gray-600 min-w-screen">
            <div className="container">
                <div className="p-20">
                    <KonsulHama 
                    setpredict={setPredictHama} 
                    calculateHama={calculateHama}
                    ></KonsulHama>
                </div>

                <div className="p-20">
                    {
                        dataBaru &&
                        <HasilKonsulHama
                        result={resultHama}
                        data={dataBaru}
                        ></HasilKonsulHama>                        
                    }
                </div>

                <div className="p-20">
                    <KonsulPestisida 
                    setpredict={setPredictPest}
                    calculatepest={calcualtePest}
                    ></KonsulPestisida>
                </div>

                <div className="p-20">
                    {
                        resultPest &&
                        <HasilKonsulPestisida
                        result={resultPest}
                        ></HasilKonsulPestisida>                        
                    }
                </div>
            </div>
        </div>
    )
}


function HasilKonsulPestisida({result}){
    return(
        <div className="bg-gray-400 p-5 rounded shadow-lg">
            <h1 className="text-start text-xl px-5">Hasil Konsultasi Pestisida</h1>
            <div className="flex p-3">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-[#F5F8FA] border-y-2 font-bold">
                            <th className="w-[200px] py-3">Hama</th>
                            <th className="w-[366px]">Harga</th>
                            <th className="w-[366px]">Produk Pestisida</th>
                            <th className="w-[366px]">Kesamaan Jaccard</th>
                            <th className="w-[366px]">Kesamaan Ecludiean</th>
                        </tr>
                        {
                            result.map((e)=>(
                                <tr className="border-b-2 font-bold">
                                    <td className="p-2">{e.hama}</td>
                                    <td>{e.harga}</td>
                                    <td>{e.pestisida}</td>
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
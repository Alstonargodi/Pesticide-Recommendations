import { useEffect, useState } from "react"
import { PostPenentuHama } from "../api/PostPenentuHama"
import { DropdownKondisiAnakan, DropdownKondisiBatang, DropdownKondisiBuah, DropdownKondisiDaun, DropdownKondisiFisik, DropdownMusim, DropdownPertumbuhan, DropdownVarietas } from "../components/DropdownKonsulHama"

export function KonsulHama({setpredict,calculateHama}){
    const[petumbuhan,setPertumbuhan] = useState()
    const[varietas,setVarietas] = useState()
    const[kondisiMusim,setKondisiMusim] = useState()
    const[kondisiDaun,setKondisiDaun] = useState()

    const[kondisiBuah,setKondisiBuah] = useState()
    const[kondisiBatang,setKondisiBatang] = useState()
    const[kondisiAnakan,setKondisiAnakan] = useState()
    const[kondisiFisik,setKondisiFisik] = useState()

    useEffect(()=>{
        setpredict({
            pertumbuhan: petumbuhan,
            varietas: varietas,
            musim: kondisiMusim,
            kondisi_daun: kondisiDaun,
            kondisi_buah: kondisiBuah,
            kondisi_batang: kondisiBatang,
            kondisi_anakan: kondisiAnakan,
            kondisi_fisik: kondisiFisik
        })
    },[
        petumbuhan,
        varietas,
        kondisiAnakan,
        kondisiMusim,
        kondisiDaun,
        kondisiBuah,
        kondisiBatang,
        kondisiFisik
    ])


    return(
        <div className="bg-gray-300 rounded p-5 shadow-lg">
            <h1 className="text-start text-xl px-5">Konsultasi Hama</h1>
            <div className="flex p-3">
                <div className="w-1/2 px-2">
                    <h1 className="text-start text-xl py-5">Fase pertumbuhan</h1>
                    <DropdownPertumbuhan setvalue={setPertumbuhan}></DropdownPertumbuhan>
                    <h1 className="text-start text-xl py-5">Varietas</h1>
                    <DropdownVarietas setvalue={setVarietas}></DropdownVarietas>
                    <h1 className="text-start text-xl py-5">Jenis Musim</h1>
                    <DropdownMusim setvalue={setKondisiMusim}></DropdownMusim>
                    <h1 className="text-start text-xl py-5">Kondisi Daun</h1>
                    <DropdownKondisiDaun setvalue={setKondisiDaun}></DropdownKondisiDaun>
                </div>
                <div className="w-1/2 px-2">
                    <h1 className="text-start text-xl py-5">Kondisi Buah</h1>
                    <DropdownKondisiBuah setvalue={setKondisiBuah}></DropdownKondisiBuah>
                    <h1 className="text-start text-xl py-5">Kondisi Batang</h1>
                    <DropdownKondisiBatang setvalue={setKondisiBatang}></DropdownKondisiBatang>
                    <h1 className="text-start text-xl py-5">Kondisi Anakan</h1>
                    <DropdownKondisiAnakan setvalue={setKondisiAnakan}></DropdownKondisiAnakan>
                    <h1 className="text-start text-xl py-5">Kondisi Fisik</h1>
                    <DropdownKondisiFisik setvalue={setKondisiFisik}></DropdownKondisiFisik>
                </div>
            </div>           
            <div>
                <button 
                className="p-3 rounded bg-blue-500 text-white"
                onClick={calculateHama}
                >Analisa</button>
            </div> 
        </div>
    )
}

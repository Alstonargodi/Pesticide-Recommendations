import { useState } from "react"
import { PostPenentuHama } from "../api/PostPenentuHama"
import { DropdownKondisiAnakan, DropdownKondisiBatang, DropdownKondisiBuah, DropdownKondisiDaun, DropdownKondisiFisik, DropdownMusim, DropdownPertumbuhan, DropdownVarietas } from "../components/DropdownKonsulHama"

export function KonsulHama(){
    const[petumbuhan,setPertumbuhan] = useState()
    const[varietas,setVarietas] = useState()
    const[kondisiMusim,setKondisiMusim] = useState()
    const[kondisiDaun,setKondisiDaun] = useState()

    const[kondisiBuah,setKondisiBuah] = useState()
    const[kondisiBatang,setKondisiBatang] = useState()
    const[kondisiAnakan,setKondisiAnakan] = useState()
    const[kondisiFisik,setKondisiFisik] = useState()

    const printhama = () =>{
        const kondisi = {
            pertumbuhan: "t3",
            varietas: "inpari-23",
            musim: "panas",
            kondisi_daun: "normal",
            kondisi_buah: "normal",
            kondisi_batang: "layu",
            kondisi_anakan: "sedikit",
            kondisi_fisik: "kerdil"
        }
        console.log(kondisi)

        PostPenentuHama(kondisi)
        .then((r)=>{
            console.log(r)
        })
        .catch((e)=>{
            console.log(e)
        })
    }

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
                onClick={printhama}
                >Analisa</button>
            </div> 
        </div>
    )
}

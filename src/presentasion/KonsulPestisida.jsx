import { useEffect, useState } from "react";
import { DropdownHamaPenyerang, DropdownHargaPestisida } from "../components/DropdownKonsulPestisida";

export function KonsulPestisida({setpredict,calculatepest}){
    const[hama,setHama] = useState()
    const[pest,setPest] = useState()

    useEffect(()=>{
        setpredict({
            hama : hama,
            harga : pest
        })
    },[
        pest,
        hama
    ])

    return(
        <div className="bg-gray-300 rounded p-5 shadow-lg">
            <h1 className="text-start text-xl px-5">Konsultasi Pestisida</h1>
            <div className="flex p-3">
                <div className="w-1/2 px-2">
                    <h1 className="text-start text-xl py-5">Hama Penyerang</h1>
                    <DropdownHamaPenyerang
                    setvalue={setHama}
                    ></DropdownHamaPenyerang>
                </div>
                <div className="w-1/2 px-2">
                    <h1 className="text-start text-xl py-5">Harga Pestisida</h1>
                    <DropdownHargaPestisida
                    setvalue={setPest}
                    ></DropdownHargaPestisida>
                </div>
            </div>           
            <div>
                <button 
                className="p-3 rounded bg-blue-500 text-white"
                onClick={calculatepest}
                >Carikan</button>
            </div> 
        </div>
    )
}
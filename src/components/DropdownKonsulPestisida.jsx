import { HamaPenyerang } from "../model/HamaPenyerang";
import { HargaPestisida } from "../model/HargaPestisida";

export function DropdownHamaPenyerang({setvalue}){
    return(
        <div className=" bg-gray-200">
            <select 
            name="pertumbuhan" 
            className="rounded p-3 w-full"
            onChange={(e)=>setvalue(e.target.value)}
            >
                <option value="" selected disabled hidden>Hama Penyerang</option>
                {
                    HamaPenyerang().map((value)=>(
                        <option value={value.tahap}>{value.nama}</option>                       
                    ))
                }
            </select>
        </div>  
    )
}

export function DropdownHargaPestisida({setvalue}){
    return(
        <div className=" bg-gray-200">
            <select 
            name="pertumbuhan" 
            className="rounded p-3 w-full"
            onChange={(e)=>setvalue(e.target.value)}
            >
                <option value="" selected disabled hidden>Pilih pestisida</option>
                {
                    HargaPestisida().map((value)=>(
                        <option value={value.harga}>{value.name}</option>                       
                    ))
                }
            </select>
        </div>  
    )
}
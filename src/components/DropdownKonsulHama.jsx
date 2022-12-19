import { FasePertumbuhan } from "../model/FasePertumbuhan"
import { JenisMusim } from "../model/JenisMusim"
import { KondisiAnakan } from "../model/KondisiAnakan"
import { KondisiBatang } from "../model/KondisiBatang"
import { KondisiBuah } from "../model/KondisiBuah"
import { KondisiDaun } from "../model/KondisiDaun"
import { KondisiFisik } from "../model/KondisiFisik"
import { VarietasPadi } from "../model/VarietasPadi"

export function DropdownPertumbuhan({setvalue}){
    return(
        <div className=" bg-gray-200">
            <select 
            name="pertumbuhan" 
            className="rounded p-3 w-full"
            onChange={(e)=>setvalue(e.target.value)}
            >
                <option value="" selected disabled hidden>Pertumbuhan</option>
                {
                    FasePertumbuhan().map((value)=>(
                        <option value={value.tahap}>{value.nama}</option>                       
                    ))
                }
            </select>
        </div>  
    )
}

export function DropdownVarietas({setvalue}){
    return(
        <div className=" bg-gray-200">
            <select name="pertumbuhan" className="rounded p-3 w-full"
            onChange={(e)=>setvalue(e.target.value)}
            >
                <option value="" selected disabled hidden>Varietas</option>
                {
                    VarietasPadi().map((value)=>(
                        <option value={value.nama}>{value.nama}</option>                       
                    ))
                }
            </select>
        </div>  
    )
}

export function DropdownKondisiDaun({setvalue}){
    return(
        <div className=" bg-gray-200">
            <select 
            name="pertumbuhan" 
            className="rounded p-3 w-full"
            onChange={(e)=>setvalue(e.target.value)}
            >
                <option value="" selected disabled hidden>Kondisi Daun</option>
                {
                    KondisiDaun().map((value)=>(
                        <option value={value.nama}>{value.nama}</option>                       
                    ))
                }
            </select>
        </div>  
    )
}

export function DropdownMusim({setvalue}){
    return(
        <div className=" bg-gray-200">
            <select name="pertumbuhan" className="rounded p-3 w-full"
            onChange={(e)=>setvalue(e.target.value)}
            >
                <option value="" selected disabled hidden>Musim</option>
                {
                    JenisMusim().map((value)=>(
                        <option value={value.nama}>{value.nama}</option>                       
                    ))
                }
            </select>
        </div>  
    )
}

export function DropdownKondisiBuah({setvalue}){
    return(
        <div className=" bg-gray-200">
            <select name="pertumbuhan" className="rounded p-3 w-full"
            onChange={(e)=>setvalue(e.target.value)}
            >
                <option value="" selected disabled hidden>Kondisi Buah</option>
                {
                    KondisiBuah().map((value)=>(
                        <option value={value.nama}>{value.nama}</option>                       
                    ))
                }
            </select>
        </div>  
    )
}

export function DropdownKondisiBatang({setvalue}){
    return(
        <div className=" bg-gray-200">
            <select name="pertumbuhan" className="rounded p-3 w-full"
            onChange={(e)=>setvalue(e.target.value)}
            >
                <option value="" selected disabled hidden>Kondisi Batang</option>
                {
                    KondisiBatang().map((value)=>(
                        <option value={value.nama}>{value.nama}</option>                       
                    ))
                }
            </select>
        </div>  
    )
}

export function DropdownKondisiAnakan({setvalue}){
    return(
        <div className=" bg-gray-200">
            <select name="pertumbuhan" className="rounded p-3 w-full"
            onChange={(e)=>setvalue(e.target.value)}
            >
                <option value="" selected disabled hidden>Kondisi Anakan</option>
                {
                    KondisiAnakan().map((value)=>(
                        <option value={value.nama}>{value.nama}</option>                       
                    ))
                }
            </select>
        </div>  
    )
}

export function DropdownKondisiFisik({setvalue}){
    return(
        <div className=" bg-gray-200">
            <select name="pertumbuhan" className="rounded p-3 w-full"
                        onChange={(e)=>setvalue(e.target.value)}
            >
                <option value="" selected disabled hidden>Kondisi Fisik</option>
                {
                    KondisiFisik().map((value)=>(
                        <option value={value.nama}>{value.nama}</option>                       
                    ))
                }
            </select>
        </div>  
    )
}
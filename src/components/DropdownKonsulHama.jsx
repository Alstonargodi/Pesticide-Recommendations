import { FasePertumbuhan } from "../model/FasePertumbuhan"
import { JenisMusim } from "../model/JenisMusim"
import { KondisiAnakan } from "../model/KondisiAnakan"
import { KondisiBatang } from "../model/KondisiBatang"
import { KondisiBuah } from "../model/KondisiBuah"
import { KondisiDaun } from "../model/KondisiDaun"
import { KondisiFisik } from "../model/KondisiFisik"
import { VarietasPadi } from "../model/VarietasPadi"

export function DropdownPertumbuhan(){
    return(
        <div className=" bg-gray-200">
            <select name="pertumbuhan" className="rounded p-3 w-full">
                {
                    FasePertumbuhan().map((value)=>(
                        <option value={value.tahap}>{value.nama}</option>                       
                    ))
                }
            </select>
        </div>  
    )
}

export function DropdownVarietas(){
    return(
        <div className=" bg-gray-200">
            <select name="pertumbuhan" className="rounded p-3 w-full">
                {
                    VarietasPadi().map((value)=>(
                        <option value={value.nama}>{value.nama}</option>                       
                    ))
                }
            </select>
        </div>  
    )
}

export function DropdownKondisiDaun(){
    return(
        <div className=" bg-gray-200">
            <select name="pertumbuhan" className="rounded p-3 w-full">
                {
                    KondisiDaun().map((value)=>(
                        <option value={value.nama}>{value.nama}</option>                       
                    ))
                }
            </select>
        </div>  
    )
}

export function DropdownMusim(){
    return(
        <div className=" bg-gray-200">
            <select name="pertumbuhan" className="rounded p-3 w-full">
                {
                    JenisMusim().map((value)=>(
                        <option value={value.nama}>{value.nama}</option>                       
                    ))
                }
            </select>
        </div>  
    )
}

export function DropdownKondisiBuah(){
    return(
        <div className=" bg-gray-200">
            <select name="pertumbuhan" className="rounded p-3 w-full">
                {
                    KondisiBuah().map((value)=>(
                        <option value={value.nama}>{value.nama}</option>                       
                    ))
                }
            </select>
        </div>  
    )
}

export function DropdownKondisiBatang(){
    return(
        <div className=" bg-gray-200">
            <select name="pertumbuhan" className="rounded p-3 w-full">
                {
                    KondisiBatang().map((value)=>(
                        <option value={value.nama}>{value.nama}</option>                       
                    ))
                }
            </select>
        </div>  
    )
}

export function DropdownKondisiAnakan(){
    return(
        <div className=" bg-gray-200">
            <select name="pertumbuhan" className="rounded p-3 w-full">
                {
                    KondisiAnakan().map((value)=>(
                        <option value={value.nama}>{value.nama}</option>                       
                    ))
                }
            </select>
        </div>  
    )
}

export function DropdownKondisiFisik(){
    return(
        <div className=" bg-gray-200">
            <select name="pertumbuhan" className="rounded p-3 w-full">
                {
                    KondisiFisik().map((value)=>(
                        <option value={value.nama}>{value.nama}</option>                       
                    ))
                }
            </select>
        </div>  
    )
}
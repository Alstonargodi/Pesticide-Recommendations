import { DropdownKondisiAnakan, DropdownKondisiBatang, DropdownKondisiBuah, DropdownKondisiDaun, DropdownKondisiFisik, DropdownMusim, DropdownPertumbuhan, DropdownVarietas } from "../components/DropdownKonsulHama"

export function Beranda(){
    return(
        <div className="min-h-screen bg-gray-600 min-w-screen">
            <div className="container">
                <div className="p-20">
                    <KonsulHama></KonsulHama>
                </div>

                <div className="p-20">
                    <HasilKonsulHama></HasilKonsulHama>
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


function KonsulHama(){
    return(
        <div className="bg-gray-300 rounded p-5 shadow-lg">
            <h1 className="text-start text-xl px-5">Konsultasi Hama</h1>
            <div className="flex p-3">
                <div className="w-1/2 px-2">
                    <h1 className="text-start text-xl py-5">Fase pertumbuhan</h1>
                    <DropdownPertumbuhan></DropdownPertumbuhan>
                    <h1 className="text-start text-xl py-5">Varietas</h1>
                    <DropdownVarietas></DropdownVarietas>
                    <h1 className="text-start text-xl py-5">Jenis Musim</h1>
                    <DropdownMusim></DropdownMusim>
                    <h1 className="text-start text-xl py-5">Kondisi Daun</h1>
                    <DropdownKondisiDaun></DropdownKondisiDaun>
                </div>
                <div className="w-1/2 px-2">
                    <h1 className="text-start text-xl py-5">Kondisi Buah</h1>
                    <DropdownKondisiBuah></DropdownKondisiBuah>
                    <h1 className="text-start text-xl py-5">Kondisi Batang</h1>
                    <DropdownKondisiBatang></DropdownKondisiBatang>
                    <h1 className="text-start text-xl py-5">Kondisi Anakan</h1>
                    <DropdownKondisiAnakan></DropdownKondisiAnakan>
                    <h1 className="text-start text-xl py-5">Kondisi Fisik</h1>
                    <DropdownKondisiFisik></DropdownKondisiFisik>
                </div>
            </div>           
            <div>
                <button className="p-3 rounded bg-blue-500 text-white">Analisa</button>
            </div> 
        </div>
    )
}

function HasilKonsulHama(){
    return(
        <div className="bg-gray-400 p-5 rounded shadow-lg">
            <h1 className="text-start text-xl px-5">Hasil Konsultasi Hama</h1>
            <div className="flex p-3">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-[#F5F8FA] border-y-2 font-bold">
                            <th className="w-[66px] py-3">ID CASE</th>
                            <th className="w-[366px]">Hama Penyerang</th>
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
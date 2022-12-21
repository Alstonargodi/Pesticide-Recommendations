
export function HasilKonsulHama({result,data}){
    return(
        <div className="bg-gray-200 p-5 rounded shadow-lg">
            <h1 className="text-start text-xl px-5 font-bold">Hasil Konsultasi Hama</h1>
                <div className="text-xl px-5 text-start">
                    <h2 className="py-2 font-semibold">
                        kasus Baru
                   </h2>
                   <h2>Tahap Pertumbuhan:<label className="font-bold">  {data.pertumbuhan}</label></h2>
                   <h2>Varietas Padi:<label className="font-bold">  {data.varietas}</label></h2>
                   <h2>jenis Musim:<label className="font-bold">  {data.musim}</label></h2>
                   <h2>Kondisi Daun:<label className="font-bold">  {data.kondisi_daun}</label></h2>
                   <h2>Kondisi Buah:<label className="font-bold">  {data.kondisi_buah}</label></h2>
                   <h2>Kondisi Batang:<label className="font-bold">  {data.kondisi_batang}</label></h2>
                   <h2>Kondisi Anakan:<label className="font-bold">  {data.kondisi_anakan}</label></h2>
                   <h2>Kondisi Fisik:<label className="font-bold">  {data.kondisi_fisik}</label></h2>
                </div>
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

import { BaseUrl } from "./BaseUrl"
import axios from "axios"

export const PostPenentuHama = async(data) =>{
    console.log(data)
    const url = `${BaseUrl}/casebase-penentu-hama`
    const response = await axios({
        method : 'post',
        headers : {
            "Content-Type" : "application/json"
        },
        url : url,
        data : data
    })
    return response
}
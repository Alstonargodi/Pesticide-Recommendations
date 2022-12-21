import { BaseUrl } from "./BaseUrl"
import axios from "axios"

export const PostPenentuHama = async(data) =>{
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

export const PostPenentuPestisida = async(data) =>{
    const url = `${BaseUrl}/casebase-penentu-pestisida`
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
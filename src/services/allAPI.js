import SERVERURL from './serverurl'
import commonAPI from './commonAPI'

export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
}

export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
}
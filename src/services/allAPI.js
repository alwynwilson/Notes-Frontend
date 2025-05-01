import SERVERURL from './serverurl'
import commonAPI from './commonAPI'

export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
}

export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
}

export const addNotesAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVERURL}/addnotes`,reqBody,reqHeader)
}

export const getNotesAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/getnotes`,"",reqHeader)
}

export const editNotesAPI = async (pid,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVERURL}/notes/${pid}/edit`,reqBody,reqHeader)
}

export const deleteNotesAPI = async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVERURL}/notes/${id}/remove`,{},reqHeader)
}

export const searchNotesAPI = async (searchKey,reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/searchnotes?search=${searchKey}`,"",reqHeader)
}
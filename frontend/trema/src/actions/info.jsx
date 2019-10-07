import axios from 'axios'

const apiUrl = "service/info";

export function getInfo(arg) {
    return {
        type: "GET_INFO",
        payload: axios.get(`${apiUrl}` )
    }
}

export function postInfo(arg) {
    return {
        type: "POST_INFO",
        payload: axios.post(`${apiUrl}` )
    }
}

export function putInfo(arg) {
    return {
        type: "PUT_INFO",
        payload: axios.put(`${apiUrl}` )
    }
}

export function deleteInfo(arg) {
    return {
        type: "DELETE_INFO",
        payload: axios.delete(`${apiUrl}` )
    }
}


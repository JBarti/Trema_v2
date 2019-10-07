import axios from 'axios'

const apiUrl = "service/application";

export function getApplication(arg) {
    return {
        type: "GET_APPLICATION",
        payload: axios.get(`${apiUrl}` )
    }
}

export function postApplication(arg) {
    return {
        type: "POST_APPLICATION",
        payload: axios.post(`${apiUrl}` )
    }
}

export function putApplication(arg) {
    return {
        type: "PUT_APPLICATION",
        payload: axios.put(`${apiUrl}` )
    }
}

export function deleteApplication(arg) {
    return {
        type: "DELETE_APPLICATION",
        payload: axios.delete(`${apiUrl}` )
    }
}


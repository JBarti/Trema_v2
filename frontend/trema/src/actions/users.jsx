import axios from 'axios'

const apiUrl = "service/users";

export function getUser(arg) {
    return {
        type: "GET_USERS",
        payload: axios.get(`${apiUrl}` )
    }
}

export function postUser(arg) {
    return {
        type: "POST_USERS",
        payload: axios.post(`${apiUrl}` )
    }
}

export function putUser(arg) {
    return {
        type: "PUT_USERS",
        payload: axios.put(`${apiUrl}` )
    }
}

export function deleteUser(arg) {
    return {
        type: "DELETE_USERS",
        payload: axios.delete(`${apiUrl}` )
    }
}


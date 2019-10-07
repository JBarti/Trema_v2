import axios from 'axios'

const apiUrl = "service/contact";

export function getContact(arg) {
    return {
        type: "GET_CONTACT",
        payload: axios.get(`${apiUrl}` )
    }
}

export function postContact(arg) {
    return {
        type: "POST_CONTACT",
        payload: axios.post(`${apiUrl}` )
    }
}

export function putContact(arg) {
    return {
        type: "PUT_CONTACT",
        payload: axios.put(`${apiUrl}` )
    }
}

export function deleteContact(arg) {
    return {
        type: "DELETE_CONTACT",
        payload: axios.delete(`${apiUrl}` )
    }
}


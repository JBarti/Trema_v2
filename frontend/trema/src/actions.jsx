import axios from 'axios'

const apiUrl = "",

export function getContacts(arg) {
    return {
        type: "GET_CONTACTS",
        payload: axios.get(`${apiUrl}/contacts` )
    }
}
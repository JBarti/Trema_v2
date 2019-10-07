import axios from 'axios'

const apiUrl = "service/about";

/* GET */

export function getAboutProject(arg) {
    return {
        type: "GET_PROJECT",
        payload: axios.get(`${apiUrl}/project` )
    }
}

export function getAboutBusiness(arg) {
    return {
        type: "GET_BUSINESS",
        payload: axios.get(`${apiUrl}/business` )
    }
}

export function getAboutProfessor(arg) {
    return {
        type: "GET_PROFESSOR",
        payload: axios.get(`${apiUrl}/professor` )
    }
}

export function getAboutAward(arg) {
    return {
        type: "GET_AWARD",
        payload: axios.get(`${apiUrl}/award` )
    }
}

/* POST */

export function postAboutProject(arg) {
    return {
        type: "POST_PROJECT",
        payload: axios.post(`${apiUrl}/project` )
    }
}

export function postAboutBusiness(arg) {
    return {
        type: "POST_BUSINESS",
        payload: axios.post(`${apiUrl}/business` )
    }
}

export function postAboutProfessor(arg) {
    return {
        type: "POST_PROFESSOR",
        payload: axios.post(`${apiUrl}/professor` )
    }
}

export function postAboutAward(arg) {
    return {
        type: "POST_AWARD",
        payload: axios.post(`${apiUrl}/award` )
    }
}

/* PUT */

export function putAboutProject(arg) {
    return {
        type: "PUT_PROJECT",
        payload: axios.put(`${apiUrl}/project` )
    }
}

export function putAboutBusiness(arg) {
    return {
        type: "PUT_BUSINESS",
        payload: axios.put(`${apiUrl}/business` )
    }
}

export function putAboutProfessor(arg) {
    return {
        type: "PUT_PROFESSOR",
        payload: axios.put(`${apiUrl}/professor` )
    }
}

export function putAboutAward(arg) {
    return {
        type: "PUT_AWARD",
        payload: axios.put(`${apiUrl}/award` )
    }
}

/* DELETE */

export function deleteAboutProject(arg) {
    return {
        type: "DELETE_PROJECT",
        payload: axios.delete(`${apiUrl}/project` )
    }
}

export function deleteAboutBusiness(arg) {
    return {
        type: "DELETE_BUSINESS",
        payload: axios.delete(`${apiUrl}/business` )
    }
}

export function deleteAboutProfessor(arg) {
    return {
        type: "DELETE_PROFESSOR",
        payload: axios.delete(`${apiUrl}/professor` )
    }
}

export function deleteAboutAward(arg) {
    return {
        type: "DELETE_AWARD",
        payload: axios.delete(`${apiUrl}/award` )
    }
}
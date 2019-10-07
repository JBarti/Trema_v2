import axios from 'axios'

const apiUrl = "service/headpage";

/* GET */

export function getHeadpageAchivement(arg) {
    return {
        type: "GET_ACHIVEMENT",
        payload: axios.get(`${apiUrl}/achivement` )
    }
}

export function getHeadpageCollege(arg) {
    return {
        type: "GET_COLLEGE",
        payload: axios.get(`${apiUrl}/college` )
    }
}

export function getHeadpageHeadmaster(arg) {
    return {
        type: "GET_HEADMASTER",
        payload: axios.get(`${apiUrl}/headmaster` )
    }
}

export function getHeadpageSubject(arg) {
    return {
        type: "GET_SUBJECT",
        payload: axios.get(`${apiUrl}/subject` )
    }
}

export function getHeadpageLink(arg) {
    return {
        type: "GET_LINK",
        payload: axios.get(`${apiUrl}/link` )
    }
}

/* POST */

export function postHeadpageAchivement(arg) {
    return {
        type: "POST_ACHIVEMENT",
        payload: axios.post(`${apiUrl}/achivement` )
    }
}

export function postHeadpageCollege(arg) {
    return {
        type: "POST_COLLEGE",
        payload: axios.post(`${apiUrl}/college` )
    }
}

export function postHeadpageHeadmaster(arg) {
    return {
        type: "POST_HEADMASTER",
        payload: axios.post(`${apiUrl}/headmaster` )
    }
}

export function postHeadpageSubject(arg) {
    return {
        type: "POST_SUBJECT",
        payload: axios.post(`${apiUrl}/subject` )
    }
}

export function postHeadpageLink(arg) {
    return {
        type: "POST_LINK",
        payload: axios.post(`${apiUrl}/link` )
    }
}

/* PUT */

export function putHeadpageAchivement(arg) {
    return {
        type: "PUT_ACHIVEMENT",
        payload: axios.put(`${apiUrl}/achivement` )
    }
}

export function putHeadpageCollege(arg) {
    return {
        type: "PUT_COLLEGE",
        payload: axios.put(`${apiUrl}/college` )
    }
}

export function putHeadpageHeadmaster(arg) {
    return {
        type: "PUT_HEADMASTER",
        payload: axios.put(`${apiUrl}/headmaster` )
    }
}

export function putHeadpageSubject(arg) {
    return {
        type: "PUT_SUBJECT",
        payload: axios.put(`${apiUrl}/subject` )
    }
}

export function putHeadpageLink(arg) {
    return {
        type: "PUT_LINK",
        payload: axios.put(`${apiUrl}/link` )
    }
}

/* DELETE */

export function deleteHeadpageAchivement(arg) {
    return {
        type: "DELETE_ACHIVEMENT",
        payload: axios.delete(`${apiUrl}/achivement` )
    }
}

export function deleteHeadpageCollege(arg) {
    return {
        type: "DELETE_COLLEGE",
        payload: axios.delete(`${apiUrl}/college` )
    }
}

export function deleteHeadpageHeadmaster(arg) {
    return {
        type: "DELETE_HEADMASTER",
        payload: axios.delete(`${apiUrl}/headmaster` )
    }
}

export function deleteHeadpageSubject(arg) {
    return {
        type: "DELETE_SUBJECT",
        payload: axios.delete(`${apiUrl}/subject` )
    }
}

export function deleteHeadpageLink(arg) {
    return {
        type: "DELETE_LINK",
        payload: axios.delete(`${apiUrl}/link` )
    }
}
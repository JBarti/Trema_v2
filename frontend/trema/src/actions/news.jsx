import axios from 'axios'

const apiUrl = "service/news";

export function getNews(arg) {
    return {
        type: "GET_NEWS",
        payload: axios.get(`${apiUrl}` )
    }
}

export function postNews(arg) {
    return {
        type: "POST_NEWS",
        payload: axios.post(`${apiUrl}` )
    }
}

export function putNews(arg) {
    return {
        type: "PUT_NEWS",
        payload: axios.put(`${apiUrl}` )
    }
}

export function deleteNews(arg) {
    return {
        type: "DELETE_NEWS",
        payload: axios.delete(`${apiUrl}` )
    }
}


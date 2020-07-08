
import axios from "axios";

const baseURL = "http://localhost:3000";

const handleError = err => console.error(err);

export const getAllLeagues = () => {
    return axios.get(`${baseURL}/leagues`)
    .catch(handleError);
}

export const getSingleLeague = (league_id) => {
    return axios.get(`${baseURL}/leagues/${league_id}`)
    .catch(handleError);
}

export const createNewLeague = (params) => {
    return axios.post(`${baseURL}/leagues`, params)
    .catch(handleError);
}



import axios from 'axios';

export const api = () => {
    return axios({
        method: 'POST',
        url: ''
    }).then((result) => {
        return result;
    }).catch((err) => {
        throw err;
    });
}
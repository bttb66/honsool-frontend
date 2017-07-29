import axios from 'axios';

export const postPicture = (file) => {
    console.log(file);
    const formData = new FormData();
    return axios({
        method: 'POST',
        url: ''
    }).then((result) => {
        return result;
    }).catch((err) => {
        throw err;
    });
}
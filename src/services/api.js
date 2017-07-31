import axios from 'axios';

export const postPicture = (file) => {
    console.log(file);
    const formData = new FormData();
    formData.append('image', file);
    console.log(formData);
    return axios.post('http://52.79.153.112:3000/cognitive',
        formData
    ).then((result) => {
        console.log(result);
        return result;
    }).catch((err) => {
        throw err;
    });
}
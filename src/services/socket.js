import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';



export const postChat = (name, msg) => {
    console.log('name', name);
    console.log('msg', msg);
    const socket = io.connect('http://52.79.153.112:3000');

    //socket.on('message', msg => console.log(msg));
//    return axios({
//        method: 'POST',
//        url: ''
//    }).then((result) => {
//        return result;
//    }).catch((err) => {
//        throw err;
//    });
}
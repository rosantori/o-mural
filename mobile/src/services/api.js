import axios from 'axios';

api = axios.create({
    baseURL: 'http://192.168.1.143:3333'
});

export default api;

//8192
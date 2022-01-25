import axios from 'axios';
import * as BASE from './base'

const NAxios = axios.create({
    baseURL: BASE.BASE_URL,
    timeout: 30000,
    headers: {
        'Content-type': 'application/json'
    }
});

export default NAxios;

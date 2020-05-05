import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: 'https://braindle.firebaseio.com/text'
});

export default AxiosInstance;
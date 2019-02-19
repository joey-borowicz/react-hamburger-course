import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-course-a9816.firebaseio.com/'
});

export default instance;
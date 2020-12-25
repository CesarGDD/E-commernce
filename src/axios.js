import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-base-b40b1.cloudfunctions.net/api' // API (cloud function)
});

export default instance;


//Debug local
// http://localhost:5001/base-b40b1/us-central1/api
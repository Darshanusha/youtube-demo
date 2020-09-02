import axios from 'axios';
const API_KEY = "AIzaSyAj5HVUwBNZ0Yy4JzmNMcBXqFH2N8zZGpQ";

export default axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3",
    params:{
        part: 'snippet',
        maxResult: 5,
        key: API_KEY,
    }
})
import axios from 'axios';
export default axios.create({
    baseURL:'http://localhost:8080',
    //headers: {'ngrok-skip-browser-warning':"true"} // CORS: Cross-origin resource sharing: allows us to load resources from origins (domain, scheme, or port) other than the server's own
})

import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID mT0zxjd6Yko_YOuhHKTBEEzhes5xrL6wlShOQL9rKUI"
    }
});
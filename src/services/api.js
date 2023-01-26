import axios from 'axios';

import errorResponseHandler from './errorResponseHandler';

const api = axios.create({
    baseURL: "https://example.com",
});

api.interceptors.response.use((response) => response,
    errorResponseHandler
)
export default api;
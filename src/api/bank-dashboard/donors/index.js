import axios from "axios";
import { baseUrl, bankDashboardEndPoint } from "@/constants/api.url";

const api = axios.create({
    baseURL: baseUrl + bankDashboardEndPoint,
    headers : {
        'Content-Type' : 'application/json',
    },
});

export default api;

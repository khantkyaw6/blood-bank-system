import axios from "axios";
import { baseUrl, adminDashboardEndPoint } from "@/constants/api.url";

const api = axios.create({
    baseURL: baseUrl + adminDashboardEndPoint,
    headers : {
        'Content-Type': 'application/json',
    },
});

export default api;
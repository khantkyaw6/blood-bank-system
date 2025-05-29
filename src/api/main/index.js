import axios from "axios";
import { baseUrl, mainEndPoint } from "@/constants/api.url";

const api = axios.create({
	baseURL: baseUrl + mainEndPoint,
	headers: {
		"Content-Type": "application/json",
	},
});

// // Add token to request headers if it exists in localStorage
// api.interceptors.request.use((config) => {
// 	// Check if token exists in localStorage
// 	const token = localStorage.getItem("admin");

// 	// If token exists, add it to the authorization header
// 	if (token) {
// 		config.headers.Authorization = `Bearer ${token}`;
// 	}

// 	return config;
// });

const getBanks = async() => {
    const res = await api.get('banks');
    return res.data;
}

export {getBanks};

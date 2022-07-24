import axios from "axios";

const axiosInstance = axios.create({ baseURL: "" });

axiosInstance.interceptors.request.use((value) => {
	return value;
});

export default axiosInstance;

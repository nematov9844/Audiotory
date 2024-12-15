/** @format */

import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_BASE_URL;
export const useAxios = () => {
	async function getData(path) {
		return await axios.get(`${baseUrl}/${path}`);
	}
	return { getData };
};

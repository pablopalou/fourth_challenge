import { useEffect, useState } from "react";
import axios from 'axios';

const useGetAirlines = (route) => {
	const [airlines, setAirlines] = useState([]);

	useEffect(async () => {
		const response = await axios(route);
        console.log(response.data['airlines'])
		setAirlines(response.data['airlines']);
	}, []);

	return {airlines, setAirlines};
};

export default useGetAirlines;
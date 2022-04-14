import { useEffect, useState } from "react";
import axios from 'axios';

const useGetFlights = (route) => {
	const [flights, setFlights] = useState([]);

	useEffect(async () => {
		const response = await axios(route);
		setFlights(response.data);
	}, []);

	return flights;
};

export default useGetFlights;

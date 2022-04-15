import { useEffect, useState } from "react";
import axios from 'axios';

const useGetFlights = (route) => {
	const [flights, setFlights] = useState([]);

	useEffect(async () => {
		const response = await axios(route);
        // console.log(response.data['flights']);
		setFlights(response.data['flights']);
	}, []);

	return flights;
};

export default useGetFlights;

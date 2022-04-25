import { useEffect, useState } from "react";
import axios from 'axios';

const useGetFlights = (route) => {
	const [flights, setFlights] = useState([]);
	const [data, setData] = useState({});

	useEffect(async () => {
		const response = await axios(route);
		setFlights(response.data.flights.data);
		setData(response.data.flights);
		// console.log(response.data.flights);
	}, []);

	const updateFlights = async (route) => {
		if (typeof setFlights == 'function'){
			const response = await axios(route);
			setFlights(response.data.flights.data);
			setData(response.data.flights);
		}
	};

	return {flights, setFlights, data, setData, updateFlights}
};



export {useGetFlights};

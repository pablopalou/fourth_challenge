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

	return {flights, setFlights, data, setData}
};

const updateFlights = async (route) => {
	console.log("aaaa");
	console.log(typeof setFlights);
	if (typeof setFlights == 'function'){
		console.log("esta definido");
		const response = await axios(route);
		setFlights(response.data.flights.data);
		setData(response.data.flights);
	} else {
		console.log("setFlights == undefined");
	}
};

export {useGetFlights, updateFlights};

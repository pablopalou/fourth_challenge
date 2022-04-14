import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import useGetFlights from '../hooks/useGetFlights';

const FlightsAll = () => {

    // hacer un custom hook y obtener los flights
    const route = "http://127.0.0.1:8000/getFlights";
    const flights = useGetFlights(route);
    // const {getFlights} = React.useContext(AppContext);
    // const flights = getFlights();

    return (
        <>
            <Header/>
            <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opaairline-5 sm:-mx-6 md:mx-0 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                    <TableHeader></TableHeader>
                    {flights.map(flight => (
                        <TableRows flight={flight} key={flight.id} />
                    ))}
                </table>
            </div>
            
        </>
        
    );
}

export default Flights;

if (document.getElementById('flightsAll')) {
    ReactDOM.render(<FlightsAll />, document.getElementById('flightsAll'));
}
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import HeaderFlights from '../components/HeaderFlights';
import useGetFlights from '../hooks/useGetFlights';
import TableHeader from '../components/TableHeader';
import TableRow from '../components/TableRow';

const FlightsAll = () => {
    // const { MIX_REACT_APP_HOME_ROUTE } = process.env;
    // const route =  MIX_REACT_APP_HOME_ROUTE + "/getFlights";
    const route = "http://127.0.0.1:8000/getFlights"
    const {flights,setFlights} = useGetFlights(route);
    // console.log(flights);

    return (
        <>
            <HeaderFlights setFlights={setFlights}/>
            <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opaairline-5 sm:-mx-6 md:mx-0 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                    <TableHeader></TableHeader>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        
                        { flights.map(flight => (
                            <TableRow flight={flight} key={flight.id} />
                        ))}
                    </tbody>
                </table>
            </div>
            
        </>
        
    );
}

export default FlightsAll;

if (document.getElementById('flightsAll')) {
    ReactDOM.render(<FlightsAll />, document.getElementById('flightsAll'));
}
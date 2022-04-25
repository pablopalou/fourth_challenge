import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import HeaderFlights from '../components/HeaderFlights';
import {useGetFlights} from '../hooks/useGetFlights';

import Table from '../components/Table';

const FlightsAll = () => {
    // const { MIX_REACT_APP_HOME_ROUTE } = process.env;
    // const route =  MIX_REACT_APP_HOME_ROUTE + "/getFlights";
    const route = "http://127.0.0.1:8000/getFlights?page=1"
    const {flights, setFlights, data, setData, updateFlights} = useGetFlights(route);

    return (
        <>
            <HeaderFlights setFlights={setFlights}/>
            <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opaairline-5 sm:-mx-6 md:mx-0 md:rounded-lg">
                <Table flights={flights} setFlights={setFlights}
                    data={data} setData={setData} updateFlights={updateFlights}
                >
                    
                </Table>
            </div>
            
        </>
        
    );
}

export default FlightsAll;

if (document.getElementById('flightsAll')) {
    ReactDOM.render(<FlightsAll />, document.getElementById('flightsAll'));
}
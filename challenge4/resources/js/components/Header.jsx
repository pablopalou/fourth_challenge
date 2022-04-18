import React from 'react';
import ReactDOM from 'react-dom';
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import ComboBox from "react-widgets/Combobox"
import DropdownList from "react-widgets/DropdownList"
import DatePicker from "react-widgets/DatePicker"
import "react-widgets/styles.css"
import useGetAirlines from '../hooks/useGetAirlines';

const Header = () => {
    const [showAdd, setShowAdd] = React.useState(false);

    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);

    const route = "http://127.0.0.1:8000/getAirlines";
    const airlines = useGetAirlines(route);
    const [selectedAirline, setSelectedAirline] = React.useState("SELECCIONE");
    const [selectedOrigin, setSelectedOrigin] = React.useState("SELECCIONE");
    const [selectedDestination, setSelectedDestination] = React.useState("SELECCIONE");
    

    const cleanSecondCombobox = () => {
        $('#origin')
            .empty()
            .append('<option key="SELECCIONE" selected="SELECCIONE" value="SELECCIONE">SELECCIONE</option>');
    }

    const cleanThirdCombobox = () => {
        $('#destination')
            .empty()
            .append('<option key="SELECCIONE" selected="SELECCIONE" value="SELECCIONE">SELECCIONE</option>');
    }

    const fillCities = (event) => {
        setSelectedAirline(event.target.value);
        // React.useEffect(() => {}, [selectedAirline]);
        cleanSecondCombobox();
        cleanThirdCombobox();
        fillSecondAndThird(event);
    };

    const fillSecondAndThird = (event) => {
        if (event.target.value !== "SELECCIONE"){
            {airlines.map(airline => {
                // con === no funciona
                if (airline.id == event.target.value ){ //aca antes comparaba con selectedAirline pero no se actualizaba
                    // tengo que cargar las ciudades
                    console.log(airline);
                    {airline['cities'].map(city => {
                        $('#origin').append(`<option key="${city.id}" value="${city.id}">
                                                ${city.name}
                                            </option>`);
                        $('#destination').append(`<option key="${city.id}" value="${city.id}">
                                            ${city.name}
                                        </option>`);

                        }
                    )}
                    
                } 
                }
            )}
        }
    }

    const fillDestinations = (event) => {
        setSelectedOrigin(event.value);
        // cleanSecondCombobox();
        // if (event.value !== "SELECCIONE"){
        //     //agarrar las ciudades y meterlas en el combobox 2 (primero borrar este combobox)
        // }
    };

    return (
        <div className="px-4 sm:px-6 lg:px-8 m-3">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Flights</h1>
                    <p className="mt-2 text-sm text-gray-700">A list of all the flights in Despegar!</p>
                </div>
                <div id="success-message">
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Button variant="primary" onClick={handleShowAdd} className="btn btn-outline-primary btn-sm add_flight" >
                        Add flight
                    </Button>
                    <>
                    <Modal show={showAdd} onHide={handleCloseAdd}>
                        <Modal.Header closeButton>
                        <Modal.Title>Add a new flight</Modal.Title>
                        </Modal.Header>
                        
                        <Modal.Body>
                            
                            <div>
                            <label htmlFor="airline" className="block text-sm font-medium text-gray-700">
                                Airline
                            </label>
                            <select
                                id="airline"
                                name="airline"
                                value={selectedAirline}
                                onChange={fillCities}
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            >
                                <option value="SELECCIONE" key='SELECCIONE'>SELECCIONE</option>
                                {airlines.map(airline => (
                                    <option value={airline.id} key={airline.id}>{airline.name}</option>
                                ))}
                            </select>
                            </div>


                            <div>
                            <label htmlFor="origin" className="block text-sm font-medium text-gray-700">
                                Origin
                            </label>
                            <select
                                id="origin"
                                name="origin"
                                value={selectedOrigin}
                                onChange={fillDestinations}
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            >
                                
                                <option value="SELECCIONE" key='SELECCIONE'>SELECCIONE</option>
                                <option value="sad" key='SELECCIOfdsNE'>mdeo</option>
                                <option value="fdddd" key='SELECdsadCIONE'>selina</option>
                            </select>
                            </div>
                            
                            <div>
                            <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                                Destination
                            </label>
                            <select
                                id="destination"
                                name="destination"
                                value={selectedDestination}
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            >
                                <option value="SELECCIONE" key='SELECCIONE'>SELECCIONE</option>
                            </select>
                            </div>


                            <div style={{marginTop: "12px"}}>
                            <label htmlFor="departureCalendar" style={{marginRight: "20px"}}>Departure:</label>
                            <input
                                type="datetime-local"
                                id="departureCalendar"
                                name="trip-end"
                                // :min="minArrivalDate"
                                // max="2022-12-31T00:00"
                                // @change="setArrival"
                                // :value="selectedArrival"
                            />
                            </div>
                            <div style={{marginTop: "12px"}}>
                            <label htmlFor="arrivalCalendar" style={{marginRight: "20px"}}>Arrival:</label>
                            <input
                                type="datetime-local"
                                id="arrivalCalendar"
                                name="trip-end"
                                
                            />
                            </div>
                            
                        </Modal.Body>
                        
                        <Modal.Footer>
                        <Button variant="btn btn-outline-secondary" onClick={handleCloseAdd}>
                            Close
                        </Button>
                        <Button variant="btn btn-outline-primary" onClick={handleCloseAdd}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    </>
                </div>
            </div>
        </div>

    );
}

export default Header;

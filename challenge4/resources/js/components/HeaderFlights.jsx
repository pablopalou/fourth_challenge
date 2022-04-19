import React from 'react';
import ReactDOM from 'react-dom';
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import ComboBox from "./ComboBox"
import "react-widgets/styles.css"
import useGetAirlines from '../hooks/useGetAirlines';

const HeaderFlights = () => {
    const [showAdd, setShowAdd] = React.useState(false);

    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);

    const route = "http://127.0.0.1:8000/getAirlines"
    // const route = process.env.MIX_HOME_ROUTE + "/getAirlines";
    
    const airlines = useGetAirlines(route);
    const [selectedAirline, setSelectedAirline] = React.useState("SELECT");
    const [selectedOrigin, setSelectedOrigin] = React.useState("SELECT");
    const [selectedDestination, setSelectedDestination] = React.useState("SELECT");

    const [origins, setOrigins] = React.useState(["SELECT"]);
    const [destinations, setDestinations] = React.useState(["SELECT"]);

    let fechaActual = new Date().toJSON().slice(0,19);

    

    const cleanOriginCombobox = () => {
        setOrigins([]);
        // funciona pero queda feo
        // $('#origin')
        //     .empty()
        //     .append('<option key="SELECT" selected="SELECT" value="SELECT">SELECT</option>');
    }

    const cleanDestinationCombobox = () => {
        setDestinations([]);
        // $('#destination')
        //     .empty()
        //     .append('<option key="SELECT" selected="SELECT" value="SELECT">SELECT</option>');
    }

    const fillCities = (event) => {
        setSelectedAirline(event.target.value);
        // React.useEffect(() => {}, [selectedAirline]);
        cleanOriginCombobox();
        cleanDestinationCombobox();
        fillSecondAndThird(event);
    };

    const fillSecondAndThird = (event) => {
        if (event.target.value !== "SELECT"){
            // dada la aerolinea, llenar el origen y el destino.
            {airlines.map(airline => {
                if (airline.id == event.target.value ){ 
                    {airline['cities'].map( city => {
                            // las podria guardar todas en un array asi despues las asigno todas juntas si es posible
                            setOrigins(prev => [...prev, city]);
                            setDestinations(prev => [...prev, city]);
                        }
                    )};
                }
            })}
        }
    }

            // funciona pero queda feo
            // {airlines.map(airline => {
            //     // con === no funciona
            //     if (airline.id == event.target.value ){ //aca antes comparaba con selectedAirline pero no se actualizaba
            //         // tengo que cargar las ciudades
            //         // console.log(airline);
            //         {airline['cities'].map(city => {
            //             $('#origin').append(`<option key="${city.id}" value="${city.id}">
            //                                     ${city.name}
            //                                 </option>`);
            //             $('#destination').append(`<option class="cl" key="${city.id}" value="${city.id}">
            //                                 ${city.name}
            //                             </option>`);
            //             }
            //         )}
                    
            //     } 
            //     }
            // )}
        

    const fillDestinations = (event) => {
        setSelectedOrigin(event.target.value);
        // delete from the destination state the event if it is not SELECT
        if (event.target.value !== 'SELECT'){
            setDestinations(destinations.filter(destination => destination.id != event.target.value))
        }

        // funciona pero queda feo
        // delete the destination that is the same as origin (if not SELECT)
        // if (event.target.value !== 'SELECT'){
        //     $('#destination > option').filter((o) => (o == event.target.value)).remove();
        // }
    };

    const updateArrivalMin = () => {
        var departureDate = document.getElementById("departureCalendar").value;
        document.getElementById("arrivalCalendar").value = "";
        document.getElementById("arrivalCalendar").setAttribute("min",departureDate);
    }

    const setSelectedDestinationn = (event) => {
        setSelectedDestination(event.target.value);
    }

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
                            <ComboBox name="airline"
                                selectedValue={selectedAirline}
                                onChangeDo={fillCities}
                                airlines={airlines}
                            ></ComboBox>

                            <ComboBox name="origin"
                                selectedValue={selectedOrigin}
                                onChangeDo={fillDestinations}
                                origins={origins}
                            ></ComboBox>
                            
                            <ComboBox name="destination"
                                selectedValue={selectedDestination}
                                onChangeDo={setSelectedDestinationn}
                                destinations={destinations}
                            ></ComboBox>

                            <div className='mt-3'>
                            <label htmlFor="departureCalendar" className='mr-5'>Departure:</label>
                            <input
                                type="datetime-local"
                                id="departureCalendar"
                                name="trip-end"
                                min={fechaActual}
                                onChange={updateArrivalMin}
                            />
                            </div>
                            <div className='mt-3'>
                            <label htmlFor="arrivalCalendar" className='mr-5'>Arrival:</label>
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

export default HeaderFlights;

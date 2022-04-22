import React, { useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';
import Modal from "react-bootstrap/Modal";
import ComboBox from "./ComboBox";
import Button from "react-bootstrap/Button";
import useGetAirlines from '../hooks/useGetAirlines';
import axios from 'axios';

const ModalCrud = (props) => {
    const {name, handleClose, show, setFlights, flights, selected, selEditAirline, selEditOrigin, selEditDestination} = props;
    console.log(JSON.stringify(name));
    
    const route = "http://127.0.0.1:8000/getAirlines"
    // const route = process.env.MIX_HOME_ROUTE + "/getAirlines";
    // console.log("SELEDITAIRLINE ES: ");
    // console.log(selEditAirline);
    const {airlines, setAirlines} = useGetAirlines(route);
    // const [selectedAirline, setSelectedAirline] = React.useState(selEditAirline == undefined || selEditAirline == {} ? "SELECT" : selEditAirline.name);
    const [selectedAirline, setSelectedAirline] = React.useState(["SELECT"]);
    const [selectedOrigin, setSelectedOrigin] = React.useState(["SELECT"] );
    const [selectedDestination, setSelectedDestination] = React.useState(["SELECT"]);

    const [origins, setOrigins] = React.useState(["SELECT"]);
    const [destinations, setDestinations] = React.useState(["SELECT"]);

    const [error, setError] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');

    let actualDate = new Date().toJSON().slice(0,19);
    // // console.log(actualDate);

    const validateFlightInfo = (flightInfo) => {
        if (flightInfo.airlineId != "SELECT" && flightInfo.originId != "SELECT" && flightInfo.destinationId != "SELECT" && flightInfo.takeOff != '' && flightInfo.landing != '' ){
            return true;    
        } else if (flightInfo.takeOff == '' || flightInfo.takeOff == '' || flightInfo.takeOff == undefined || flightInfo.landing == undefined){
            setErrorMessageDates();
        } else {
            setError(true);
            setErrorMessage("You must select a valid airline and also valid cities.");
        }
        return false;
    }

    const handleAdd = (event) => {
        const flightInfo = {
            airlineId : event.target[0].value,
            originId : event.target[1].value,
            destinationId : event.target[2].value,
            takeOff: event.target[3].value,
            landing: event.target[4].value 
        };
        // console.log("entre a add");
        if (validateFlightInfo(flightInfo)){
            axios.post(`http://127.0.0.1:8000/flights`, flightInfo)
            .then(response => {
                handleClose();
                setFlights(prev => [...prev, response.data.flight]);
                // vuelvo a setear las cosas a select.
                setSelectedAirline(["SELECT"]);
                setSelectedOrigin(["SELECT"]);
                setSelectedDestination(["SELECT"]);
                setOrigins(["SELECT"]);
                setDestinations(["SELECT"]);

            })
            .catch(err => console.warn(err));
        } 
    }

    const setErrorMessageDates = () => {
        setError(true);
        setErrorMessage("You must fill the form with valid takeOff and landing dates.");
    }

    const handleUpdate = (event) => {
        const flightInfoUpdate = {
            flightId: selected,
            airlineId : event.target[0].value,
            originId : event.target[1].value,
            destinationId : event.target[2].value,
            takeOff: event.target[3].value,
            landing: event.target[4].value 
        };

        if (validateFlightInfo(flightInfoUpdate)){
            axios.post(`http://127.0.0.1:8000/updateFlight/${flightInfoUpdate.flightId}`, flightInfoUpdate)
            .then(response => {
                handleClose();
                let flightsUpdated = [...flights];
                flightsUpdated = flightsUpdated.map( (flight) => {
                    if (flight.id == response.data.flight.id){
                        return response.data.flight;
                    } else {
                        return flight;
                    }
                });
                // otra manera de hacer el map mas corta es:
                // flightsUpdated.map( (flight) => flight.id == response.data.flight.id ? response.data.flight : flight);
                setFlights(flightsUpdated);
                setSelectedAirline(["SELECT"]);
                setSelectedOrigin(["SELECT"]);
                setSelectedDestination(["SELECT"]);
                setOrigins(["SELECT"]);
                setDestinations(["SELECT"]);

            })
            .catch(err => console.warn(err));
        } 
    }

    const handleSaveAdd = (event) => {
        event.preventDefault();
        setError(false);

        if (name == "Add"){
            handleAdd(event);
        } else {
            handleUpdate(event);
        }

    }

    const fillSecondAndThird = (value) => {
        // console.log("fillSecondAndThird");
        // console.log("Airlines: ", airlines);
        if (value !== "SELECT"){
            {airlines.map(airline => {
                if (airline.id == value ){ 
                    setOrigins(airline.cities);
                    setDestinations(airline.cities);
                }
            })}
        }
    }

    const fillCities = (value) => {
        // console.log(value);
        setSelectedAirline(value);
        fillSecondAndThird(value);
    };

    useEffect(() => {
        if (selEditAirline != undefined && selEditAirline != {}){
            // console.log("FIJARSE ACA:")
            // console.log(selEditAirline);
            fillCities(selEditAirline.id);
            setSelectedOrigin(selEditOrigin.id);
            setSelectedDestination(selEditDestination.id);
        }
    }, [selEditAirline, airlines]); 

    const fillDestinations = (value) => {
        setSelectedOrigin(value);
        // deberia agarrar la aerolinea seleccionada y cargar todo de vuelta y despues si filtrar
        // delete from the destination state the event if it is not SELECT
        if (value !== 'SELECT'){
            setDestinations(destinations.filter(destination => destination.id != value))
        }
    };

    const updateArrivalMin = () => {
        var departureDate = document.getElementById("departureCalendar").value;
        document.getElementById("arrivalCalendar").value = "";
        document.getElementById("arrivalCalendar").setAttribute("min",departureDate);
    }

    const setSelectedDestinationn = (value) => {
        setSelectedDestination(value);
    }
    // no se xq el titulo de: add a NEW flight no funciona
    return (
        <Modal show={true} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{name} a {JSON.stringify(name) == "Add" && <>"new"</> } flight</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                {error && <Toast className='mb-3 bg-red-500'>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">ERROR</strong>
                        </Toast.Header>
                        <Toast.Body>{errorMessage}</Toast.Body>
                        </Toast>}
                        
                <form id="add-form" onSubmit={handleSaveAdd}>
                    <ComboBox name="airline"
                        selectedValue={selectedAirline}
                        onChangeDo={(event) => fillCities(event.target.value)}
                        airlines={airlines}
                    ></ComboBox>

                    <ComboBox name="origin"
                        selectedValue={selectedOrigin}
                        onChangeDo={(event) => fillDestinations(event.target.value)}
                        cities={origins}
                    ></ComboBox>
                    
                    <ComboBox name="destination"
                        selectedValue={selectedDestination}
                        onChangeDo={(event) => setSelectedDestinationn(event.target.value)}
                        cities={destinations}
                    ></ComboBox>

                    <div className='mt-3'>
                    <label htmlFor="departureCalendar" className='mr-5'>Departure:</label>
                    <input
                        type="datetime-local"
                        id="departureCalendar"
                        name="departureCalendar"
                        min={actualDate}
                        onChange={updateArrivalMin}
                    />
                    </div>
                    <div className='mt-3'>
                    <label htmlFor="arrivalCalendar" className='mr-5'>Arrival:</label>
                    <input
                        type="datetime-local"
                        id="arrivalCalendar"
                        name="arrivalCalendar"
                        
                    />
                    </div>
                
                </form>
                
            </Modal.Body>
            
            <Modal.Footer>
            <Button variant="btn btn-outline-secondary" onClick={handleClose}>
                Close
            </Button>
            <Button type="submit" form='add-form' variant="btn btn-outline-primary">
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalCrud;
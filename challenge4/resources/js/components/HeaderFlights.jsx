import React from 'react';
import ReactDOM from 'react-dom';
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import ComboBox from "./ComboBox"
import "react-widgets/styles.css"
import useGetAirlines from '../hooks/useGetAirlines';
import axios from 'axios';
import Toast from 'react-bootstrap/Toast'

const HeaderFlights = (props) => {
    // console.log(props);
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

    const [error, setError] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');

    let actualDate = new Date().toJSON().slice(0,19);

    const handleSaveAdd = (event) => {
        event.preventDefault();
        setError(false);
        const flightInfo = {
            airlineId : event.target[0].value,
            originId : event.target[1].value,
            destinationId : event.target[2].value,
            takeOff: event.target[3].value,
            landing: event.target[4].value 
        };
        console.log(flightInfo);
        if (flightInfo.airlineId != "SELECT" && flightInfo.originId != "SELECT" && flightInfo.destinationId != "SELECT" && flightInfo.takeOff != undefined && flightInfo.landing != undefined ){
            const response = axios.post(`http://127.0.0.1:8000/flights`, flightInfo)
            .then(response => {
                handleCloseAdd();
                props.setFlights(prev => [...prev, response.data.flight]);
            })
            .catch(err => console.warn(err));
        } else if (flightInfo.takeOff == '' || flightInfo.takeOff == '' || flightInfo.takeOff == undefined || flightInfo.landing == undefined) {
            setError(true);
            setErrorMessage("You must fill the form with valid takeOff and landing dates.");
        } else {
            setError(true);
            setErrorMessage("You must select a valid airline and also valid cities.");
        }
        
        
        // hacer algo con el mensaje
    }

    // const cleanOriginCombobox = () => {
    //     setOrigins([]);
    //     // funciona pero queda feo
    //     // $('#origin')
    //     //     .empty()
    //     //     .append('<option key="SELECT" selected="SELECT" value="SELECT">SELECT</option>');
    // }

    // const cleanDestinationCombobox = () => {
    //     setDestinations([]);
    //     // $('#destination')
    //     //     .empty()
    //     //     .append('<option key="SELECT" selected="SELECT" value="SELECT">SELECT</option>');
    // }

    const fillCities = (event) => {
        setSelectedAirline(event.target.value);
        // React.useEffect(() => {}, [selectedAirline]);
        // al asignar directo todo el array de vuelta, no es necesario limpiar
        // cleanOriginCombobox();
        // cleanDestinationCombobox();
        fillSecondAndThird(event);
    };

    const fillSecondAndThird = (event) => {
        if (event.target.value !== "SELECT"){
            // dada la aerolinea, llenar el origen y el destino.
            {airlines.map(airline => {
                if (airline.id == event.target.value ){ 
                    // console.log(airline);
                    setOrigins(airline.cities);
                    setDestinations(airline.cities);

                    // No hay que agregar una por una... mas facil poner el array de una
                    // {airline['cities'].map( city => {
                    //         // las podria guardar todas en un array asi despues las asigno todas juntas si es posible
                    //         setOrigins(prev => [...prev, city]);
                    //         setDestinations(prev => [...prev, city]);
                    //     }
                    // )};
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
        // deberia agarrar la aerolinea seleccionada y cargar todo de vuelta y despues si filtrar
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
                                    onChangeDo={fillCities}
                                    airlines={airlines}
                                ></ComboBox>

                                <ComboBox name="origin"
                                    selectedValue={selectedOrigin}
                                    onChangeDo={fillDestinations}
                                    cities={origins}
                                ></ComboBox>
                                
                                <ComboBox name="destination"
                                    selectedValue={selectedDestination}
                                    onChangeDo={setSelectedDestinationn}
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
                        <Button variant="btn btn-outline-secondary" onClick={handleCloseAdd}>
                            Close
                        </Button>
                        <Button type="submit" form='add-form' variant="btn btn-outline-primary">
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

import React from 'react';
import TableHeader from '../components/TableHeader';
import TableRow from '../components/TableRow';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ModalCrud from './ModalCrud';
import axios from 'axios';
import Pagination from '../components/Pagination'

const Table = (props) => {
    const {flights, setFlights, data, setData} = props;
    const [showEdit, setShowEdit] = React.useState(false);
    const [showDelete, setShowDelete] = React.useState(false);

    const [selected, setSelected] = React.useState(0);
    const [selectedAirline, setSelectedAirline] = React.useState({});
    const [selectedOrigin, setSelectedOrigin] = React.useState({});
    const [selectedDestination, setSelectedDestination] = React.useState({});

    const [flightToDelete, setFlightToDelete] = React.useState(0);

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = (id) => {
        setShowDelete(true);
        setFlightToDelete(id);
    }
    
    const deleteFlight = () => {
        const flightInfo = {
            flightId : flightToDelete
        };
        // console.log(flightInfo);
        
        axios.post(`http://127.0.0.1:8000/deleteFlight`, flightInfo)
            .then(response => {
                // setear de vuelta los vuelos
                // setFlights(prev => [...prev, response.data.flight]);
                // console.log("falta solo setear el nuevo array de flights");
                setFlights(flights.filter((flight) => flight.id != flightToDelete));
                handleCloseDelete();
            })
            .catch(err => console.warn(err));
        
    }

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = (flight) => {
        // console.log("VUELOOO");
        // console.log(flight);
        setSelected(flight.id);
        setSelectedAirline(flight.airline);
        setSelectedOrigin(flight.origin);
        setSelectedDestination(flight.destination);
        setShowEdit(true);
        
    }

    return (
        <>
        <table className="min-w-full divide-y divide-gray-300">
            <TableHeader></TableHeader>
            <tbody className="divide-y divide-gray-200 bg-white">
                { props.flights.map(flight => (
                    <TableRow handleShowDelete={handleShowDelete}
                    handleShowEdit={handleShowEdit}

                    flight={flight} key={flight.id} />
                ))}
            </tbody>
        </table>
        
        {/* pongo el showEdit aca para que no se renderice el modal crud al pedo */}
        {showEdit && <ModalCrud
            name="Edit"
            show={showEdit}
            handleClose={handleCloseEdit}
            setFlights = {setFlights}
            selected = {selected}
            selEditAirline = {selectedAirline}
            selEditOrigin = {selectedOrigin}
            selEditDestination = {selectedDestination}
            flights = {flights}
        ></ModalCrud>}
        
        
        <Modal show={showDelete} onHide={handleCloseDelete}>
            <Modal.Header closeButton>
            <Modal.Title>Delete fligth</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this flight?</Modal.Body>
            <Modal.Footer>
            <Button variant="btn btn-outline-secondary" onClick={handleCloseDelete}>
                Cancel
            </Button>
            <Button variant="btn btn-outline-danger" onClick={deleteFlight}>
                Delete
            </Button>
            </Modal.Footer>
        </Modal>
        <Pagination data={data} setData={setData}/>
        </>
    );
}

export default Table;
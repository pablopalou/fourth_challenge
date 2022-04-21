import React from 'react';
import TableHeader from '../components/TableHeader';
import TableRow from '../components/TableRow';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ModalCrud from './ModalCrud';

const Table = (props) => {
    const {setFlights} = props;
    const [showEdit, setShowEdit] = React.useState(false);
    const [showDelete, setShowDelete] = React.useState(false);
    const [selected, setSelected] = React.useState(0);
    const [selectedAirline, setSelectedAirline] = React.useState({});
    const [selectedOrigin, setSelectedOrigin] = React.useState({});
    const [selectedDestination, setSelectedDestination] = React.useState({});

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

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
        {showEdit==true && <ModalCrud
            name="Edit"
            show={showEdit}
            handleClose={handleCloseEdit}
            setFlights = {setFlights}
            selected = {selected}
            selEditAirline = {selectedAirline}
            selEditOrigin = {selectedOrigin}
            selEditDestination = {selectedDestination}
        ></ModalCrud>}
        
        
        <Modal show={showDelete} onHide={handleCloseDelete}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseDelete}>
                Close
            </Button>
            <Button variant="primary" onClick={handleCloseDelete}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default Table;
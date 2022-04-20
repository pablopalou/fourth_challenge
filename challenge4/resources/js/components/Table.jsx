import React from 'react';
import TableHeader from '../components/TableHeader';
import TableRow from '../components/TableRow';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Table = (props) => {
    const [showEdit, setShowEdit] = React.useState(false);
    const [showDelete, setShowDelete] = React.useState(false);

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

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
        
        <Modal show={showEdit} onHide={handleCloseEdit}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEdit}>
                Close
            </Button>
            <Button variant="primary" onClick={handleCloseEdit}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
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
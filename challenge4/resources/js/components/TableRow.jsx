import React from 'react';
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"


const TableRow = ({flight}) => {    
    const [showEdit, setShowEdit] = React.useState(false);
    const [showDelete, setShowDelete] = React.useState(false);

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);


    
    return (
        <tr>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"> {flight.id} </td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{flight.airline.name }</td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{flight.origin.name}</td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{flight.destination.name }</td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{flight.takeOff }</td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{flight.landing}</td>
            <td>
                <Button variant="primary" value={flight.id} onClick={handleShowEdit} className="btn btn-outline-primary btn-sm edit_flight" >
                    Edit
                </Button>
            </td>
            <td>
                <Button variant="primary" value={flight.id} onClick={handleShowDelete} className="btn btn-outline-danger btn-sm delete_flight" >
                    Delete
                </Button>
            </td>
            {/* <td> <button onClick={()=>setOpenModalEdit(true)} type="button" value={flight.id} className="btn btn-outline-primary btn-sm edit_city"> Edit </button> </td>
            <td> <button onClick={()=>setOpenModalDelete(true)} type="button" value={flight.id} className="btn btn-outline-danger btn-sm delete_city"> Remove </button> </td> */}
            <>
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
            </>
            <>
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
        </tr>
        
    );
}

export default TableRow;
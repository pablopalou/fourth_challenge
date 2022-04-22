import React from 'react';
import Button from "react-bootstrap/Button"



const TableRow = (props) => {    
    const {flight, handleShowDelete, handleShowEdit} = props;
    return (
        <tr>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"> {flight.id} </td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{flight.airline.name }</td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{flight.origin.name}</td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{flight.destination.name }</td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{flight.takeOff }</td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{flight.landing}</td>
            <td>
                <Button variant="primary" value={flight.id} onClick={() => handleShowEdit(flight)} className="btn btn-outline-primary btn-sm edit_flight" >
                    Edit
                </Button>
            </td>
            <td>
                <Button variant="primary" value={flight.id} onClick={() => handleShowDelete(flight.id)} className="btn btn-outline-danger btn-sm" >
                    Delete
                </Button>
            </td>
            {/* <td> <button onClick={()=>setOpenModalEdit(true)} type="button" value={flight.id} className="btn btn-outline-primary btn-sm edit_city"> Edit </button> </td>
            <td> <button onClick={()=>setOpenModalDelete(true)} type="button" value={flight.id} className="btn btn-outline-danger btn-sm delete_city"> Remove </button> </td> */}
            
        </tr>
        
    );
}

export default TableRow;
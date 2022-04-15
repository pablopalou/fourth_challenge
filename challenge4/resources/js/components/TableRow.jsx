import React from 'react';

const TableRow = ({flight}) => {
    return (
        <tr>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"> {flight.id} </td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{flight.airline.name }</td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{flight.origin.name}</td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{flight.destination.name }</td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{flight.takeOff }</td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{flight.landing}</td>
            <td> <button type="button" value={flight.id} className="btn btn-outline-primary btn-sm edit_city"> Edit </button> </td>
            <td> <button type="button" value={flight.id} className="btn btn-outline-danger btn-sm delete_city"> Remove </button> </td>
        </tr>
        
    );
}

export default TableRow;
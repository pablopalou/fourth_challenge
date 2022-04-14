import React from 'react';
import ReactDOM from 'react-dom';


const TableHeader = () => {
    return (
        <thead className="bg-gray-50">
            <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">ID</th>
                <th scope="col" className=" px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">Airline</th>
                <th scope="col" className=" px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Origin</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Destination</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Departure</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Arrival</th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    {/* dejo espacio para el edit y  remove */}
                </th>
            </tr>
        </thead>
    );
}

export default TableHeader;
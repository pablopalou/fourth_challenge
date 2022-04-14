import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
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
                    {/* Falta hacer el boton de agregar con su respectivo pop up */}
                    {/* <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#addflightModal">
                        Add flight
                    </button> */}
                </div>
            </div>
        </div>

    );
}

export default Header;

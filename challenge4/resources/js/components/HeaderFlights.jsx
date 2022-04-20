import React from 'react';
import ReactDOM from 'react-dom';
import Button from "react-bootstrap/Button";

import "react-widgets/styles.css";

import ModalCrud from './ModalCrud';


const HeaderFlights = (props) => {
    const setFlights = props.setFlights;
    const [showAdd, setShowAdd] = React.useState(false);

    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);

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
                    <ModalCrud
                        showAdd={showAdd}
                        handleCloseAdd={handleCloseAdd}
                        setFlights = {setFlights}
                    >

                    </ModalCrud>
                </div>
            </div>
        </div>

    );
}

export default HeaderFlights;

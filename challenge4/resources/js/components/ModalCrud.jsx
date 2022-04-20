import React from 'react';
import Toast from 'react-bootstrap/Toast';
import Modal from "react-bootstrap/Modal";
import ComboBox from "./ComboBox";
import Button from "react-bootstrap/Button";

const ModalCrud = (props) => {
    const {selectedAirline, selectedDestination, selectedOrigin, showAdd, handleCloseAdd, 
        error, errorMessage, handleSaveAdd, fillCities, airlines, 
        fillDestinations, origins, destinations,
        setSelectedDestinationn, actualDate, updateArrivalMin} = props;
    return (
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
    );
}

export default ModalCrud;
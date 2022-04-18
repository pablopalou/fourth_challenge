import React from 'react';
import ReactDOM from 'react-dom';
import '../../../public/css/Modal.css';

const customStyle = {
    background: "rgba(32,35,41,.8)",
    position: "fixed",
    top: "-10px",
    left: "-10px",
    right: "-10px",
    bottom: "-10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white"
}

function ModalTrucho({ children }){
    return ReactDOM.createPortal(
        <div style={customStyle}>
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export {ModalTrucho};
import React from "react";
import {Button, Modal} from 'react-bootstrap';


export const ModalCard = ({showModal,closeModal, data}) => {
    return (
        <div>
        <Modal show={showModal}>
            <Modal.Title> &emsp; &emsp; &emsp; Conversion from {data[2]} to USD</Modal.Title>
            <Modal.Body>
                {data[1]} {data[2]} = {data[0]} USD
                <br></br>
                Rate today: 1 {data[2]} = {data[3]} USD
                <br></br>
                Rate %Difference(From yesterday's rate): {data[5]}
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick ={closeModal}>Close Modal</Button>
            </Modal.Footer>
         </Modal>
        </div>
    )
}
import "./ModalWindow.css";
import { useState } from "react";


export const ModalWindow = () => {

const [modal, setModal] = useState(true);

// This function will toggle the state from false to true 

const toggleModal = () => {
    setModal(!modal)
}

var closeModal = document.getElementById('close');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == closeModal) {
    closeModal.style.display = "none";
  }
}
    return (
        <div className="modal-window" id="close">
            <div className="overlay">
            <div className="modal-header">
            <button onClick={toggleModal} className="modal-button" class="btn-close" aria-label="Close">x</button>
            </div>
            <div className="modal-body">
             
            <h3>Error. Something went wrong...</h3>
            </div>
            </div>
        </div>
    );
};

export default ModalWindow;
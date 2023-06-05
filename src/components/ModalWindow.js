import "./ModalWindow.css";

export const ModalWindow = () => {
    return (
        <div className="modal-window">
            <div className="modal-box">
            <div className="modal-header">
            <button className="modal-button">x</button>
            </div>
            <div className="modal-body">
             
            <h3>Error. Something went wrong...</h3>
            </div>
            </div>
        </div>
    );
};

export default ModalWindow;
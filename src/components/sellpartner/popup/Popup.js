import { cloneElement } from "react";

const Popup = ({ headerText, contentComponent, changePopupContent, onClose }) => {

    return (
        <div className="popup-overlay">
            <div className="popup">
                <div className="popup-header">
                    <h3>{headerText}</h3>
                    <button
                        className="close-button"
                        onClick={onClose}
                    >
                        ×
                    </button>
                </div>
                <div className="popup-content">
                    {cloneElement(contentComponent, { changePopupContent })}
                </div>
            </div>
        </div>
    )
}

export default Popup;
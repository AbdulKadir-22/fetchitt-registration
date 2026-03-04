import React, { useEffect } from "react";
import Icon from "./Icon";

const Modal = ({ isOpen, onClose, title, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <Icon name="close" size={24} />
                </button>
                {title && (
                    <h2 className="display" style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "24px", color: "#272F51" }}>
                        {title}
                    </h2>
                )}
                <div style={{ color: "#64748b", lineHeight: 1.7 }}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;

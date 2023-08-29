import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        Contenido del modal
        <button onClick={onClose}>Cerrar Modal</button>
      </div>

      <div className="contenedor">
  <div className="card">Tarjeta 1</div>
  <div className="card">Tarjeta 2</div>
  <div className="card">Tarjeta 3</div>
 
</div>
    </div>
  );
};

export default Modal;
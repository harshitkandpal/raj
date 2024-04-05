import React from 'react';

const ImageModal = ({ src, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-content" style={{ maxWidth: '600px', maxHeight: '800px', width: '100%', height: '100%', backgroundColor: '#fff', padding: '20px', boxSizing: 'border-box', overflow: 'auto' }}>
        <img src={src} alt='img' style={{ maxWidth: '100%', height: 'auto' }} />
        <button onClick={onClose} style={{ marginTop: '10px', padding: '8px 16px', backgroundColor: '#333', color: '#fff', border: 'none', cursor: 'pointer' }}>Close</button>
      </div>
    </div>
  );
};

export default ImageModal;

import React, { useState } from 'react';
import ImageModal from './ImageModal'; // Import the modal component
import images from '../URL.json';
import Feedback from './Feedback';

const MyWork = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <section id="my-work" className="section-2 bg-gray-100 py-0">
      <div className="w-layout-grid grid">
        {images.map((src, index) => (
          <div key={index} className="div-block shadow-lg">
            <img
              src={src}
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 50vw, (max-width: 991px) 33vw, 25vw"
              className="image"
              alt='img'
              onClick={() => openModal(src)} // Open modal when clicked
            />
          </div>
        ))}
      </div>
      {selectedImage && <ImageModal src={selectedImage} onClose={closeModal} />}
    </section>
    <section>
      <Feedback/>
    </section>
    </div>
  );
};

export default MyWork;

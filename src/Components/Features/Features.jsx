import React from 'react';
import './Features.css';

function Features({ titleItem, content, url }) {
  return (
    <>
      <h2 className="sr-only">Features</h2>
      <div className="feature-item">
        <img src={url} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">{titleItem}</h3>
        <p>{content}</p>
      </div>
    </>
  )
}

export default Features;

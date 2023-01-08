import React from 'react';
import ReactGoogleSlides from "react-google-slides";

const SlideShow = ({ title, link }) => {
  return (
    <React.Fragment>
        <h2>{title}</h2>
        <ReactGoogleSlides
        width={640}
        height={480}
        slidesLink={link}
        slideDuration={5}
        position={1}
        showControls
        loop
        />
    </React.Fragment>
  );
}

export default SlideShow
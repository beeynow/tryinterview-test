import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <DotLottieReact
        src="https://lottie.host/744d9f1a-de55-4d3d-a322-1669e3a8e279/XHQFOaZuNt.lottie"
        loop
        autoplay
        className="loading-animation"
      />
    </div>
  );
};

export default Loading;

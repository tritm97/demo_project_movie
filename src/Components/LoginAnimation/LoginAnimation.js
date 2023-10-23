import React from 'react';
import * as loginAnimation from './../../assets/animation/loginAnimation.json';
import Lottie from 'react-lottie';
const LoginAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loginAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} width={500} height={500} />
    </div>
  );
};

export default LoginAnimation;

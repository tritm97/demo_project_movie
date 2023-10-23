import React from 'react';
import FormLogin from '../../Components/FormLogin/FormLogin';
import LoginAnimation from '../../Components/LoginAnimation/LoginAnimation';

const Login = () => {
  return (
    <div className="bg-gray-200 grid grid-cols-12 h-screen p-5">
      {/* cols-7  */}
      <div className="col-span-7 flex justify-center items-center">
        <LoginAnimation />
      </div>
      <div className="col-span-5">
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;

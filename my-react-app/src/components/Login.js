import React from 'react';
import './Login.css';
import Home from './Home';
import loginBackground from '../img/login-background.jpg'; // 画像パスを修正

const Login = () => {

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-left">
          <img src={loginBackground} alt="Login Background" />
        </div>
        <div className="login-right">
            <h2>ログイン</h2>
            <Home />
        </div>
      </div>
    </div>
  );
};

export default Login;

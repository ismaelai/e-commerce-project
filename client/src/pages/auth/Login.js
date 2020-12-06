import React, { useState } from 'react';
import { auth } from '../../firebase.js';
import { toast } from 'react-toastify';
import { Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          autoFocus
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
        />
      </div>

      <br></br>
      <button
        onClickt={handleSubmit}
        type="primary"
        className="mb-3"
        block
        shape="round"
        icon={<MailOutlined />}
        size="large"
        disabled={!email || password.length < 6}
      >
        Login with Email/Password
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <h4>Login</h4>
        <div className="col-md-5 offset-md-3"></div>
        {loginForm()}
      </div>
    </div>
  );
};
export default Login;

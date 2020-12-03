import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase.js';
import { toast } from 'react-toastify';

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, SetPassword] = useState('');

  useEffect(() => {
    setEmail(window.localStorage.getItem('emailForRegistration'));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Email and password is required.');
      return;
    }
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters.');
      return;
    }

    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href,
      );

      if (result.user.emailVerified) {
        //remove user email from local sotage
        window.localStorage.removeItem('emailForRegistration');
        // get user id token
        let user = auth.currentUser;
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();
        //redux store

        //redirect
        history.push('/');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const completeRegistrationForm = () => (
    <form onSubmit={handleSubmit}>
      <input type="email" className="form-control" value={email} disabled />
      <input
        type="password"
        className="form-control"
        value={password}
        onChange={(e) => SetPassword(e.target.value)}
        placeholder="Password"
        autoFocus
      />
      <br />
      <button type="submit" className="btn btn-raised">
        Complete Registration
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3"></div>
        <h4>Register Complete </h4>

        {completeRegistrationForm()}
      </div>
    </div>
  );
};
export default RegisterComplete;

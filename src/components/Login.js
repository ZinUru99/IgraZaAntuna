import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Login.css";

const Login = () => {
  return (
    <form id='loginForma'>
      <div className='form-outline mb-4 text-center'>
        <label className='form-label' htmlFor='form2Example1'>
          Username:
        </label>
        <input type='text' id='form2Example1' className='form-control' />
      </div>

      <button
        type='button'
        className='btn btn-primary btn-block mb-4 form-control'>
        Log in
      </button>

      <div className='text-center'>
        <button type='button' className='btn btn-link btn-floating mx-1'>
          <i className='fab fa-facebook-f'></i>
        </button>

        <button type='button' className='btn btn-link btn-floating mx-1'>
          <i className='fab fa-google'></i>
        </button>

        <button type='button' className='btn btn-link btn-floating mx-1'>
          <i className='fab fa-twitter'></i>
        </button>

        <button type='button' className='btn btn-link btn-floating mx-1'>
          <i className='fab fa-github'></i>
        </button>
      </div>
    </form>
  );
};

export default Login;

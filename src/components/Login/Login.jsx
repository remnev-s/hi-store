import React from 'react';
import './Login.scss';
import { Buttons } from '../UI/buttons/Buttons';

export const Login = () => {
  return (
    <section className='login-page'>
      <div className='login-page__inner wrapper'>
        <div className='login__container'>
          <form className='form__login'>
            <h2 className='form-description'>Login</h2>
            <fieldset className='form__login-set'>
              <label htmlFor='form__login-email'>
                <input
                  className='form__input form__input-email'
                  type='email'
                  id='form__login-email'
                  placeholder='Email*'
                  required
                />
              </label>
              <label htmlFor='form__login-email'>
                <input
                  className='form__input form__input-password'
                  type='password'
                  id='form__login-password'
                  placeholder='Password*'
                  required
                />
              </label>
              <Buttons mediumButton={true} text='Login' />

              <p className='forg-password'>Forgotten Password?</p>
            </fieldset>
          </form>
        </div>
        <div className='login__container'>
          <div className='login__container'>
            <form className='form__login'>
              <h2 className='form-description'>Create Account</h2>
              <fieldset className='form__login-set'>
                <label htmlFor='form__login-first-name'>
                  <input
                    className='form__input form__input-first-name'
                    type='text'
                    id='form__login-first-name'
                    placeholder='First Name*'
                    required
                  />
                </label>
                <label htmlFor='form__login-last-name'>
                  <input
                    className='form__input form__input-last-name'
                    type='text'
                    id='form__login-last-name'
                    placeholder='Last Name*'
                    required
                  />
                </label>
                <label htmlFor='form__login-email'>
                  <input
                    className='form__input form__input-email'
                    type='email'
                    id='form__login-email'
                    placeholder='Email*'
                    required
                  />
                </label>
                <label htmlFor='form__login-email'>
                  <input
                    className='form__input form__input-password'
                    type='password'
                    id='form__login-password'
                    placeholder='Password*'
                    required
                  />
                </label>
                <Buttons mediumButton={true} text='Register' />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

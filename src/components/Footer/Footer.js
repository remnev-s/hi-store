import React from 'react';
import './Footer.scss';
import { Buttons } from '../UI/buttons/Buttons';
import logo from '../../images/logo.svg';

export const Footer = () => {
  return (
    <section className='footer '>
      <div className='footer__content wrapper'>
        <img src={logo} alt='logo' className='footer__logo' />

        <ul className='social'>
          <li className='list'>
            <a href='#' className='list__link'>
              Instagram
            </a>
          </li>
          <li className='list'>
            <a href='#' className='list__link'>
              Twitter
            </a>
          </li>
        </ul>

        <ul className='police'>
          <li className='list'>
            <a href='#' className='list__link'>
              Shipping Policy
            </a>
          </li>
          <li className='list'>
            <a href='#' className='list__link'>
              Refund Policy
            </a>
          </li>
          <li className='list'>
            <a href='#' className='list__link'>
              Privacy Policy
            </a>
          </li>
          <li className='list'>
            <a href='#' className='list__link'>
              Terms of Service
            </a>
          </li>
        </ul>

        <form className='subscribe'>
          <p className='form-title'>
            Sign up for the latest news, offers and more.
          </p>
          <label className='form-label' htmlFor='email'>
            Email
          </label>
          <input
            className='form-input'
            type='email'
            id='email'
            placeholder='Email Address'
          />
          <Buttons smallButton={true} text='Sign up' />
        </form>
        <div className='footer__copyright'>
          <p className='footer__copyright-trext'>not for commercial use</p>
          <p className='footer__copyright-year'>2022</p>
        </div>
      </div>
    </section>
  );
};

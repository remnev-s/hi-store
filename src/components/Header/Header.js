import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

import './Header.scss';

export const Header = ({ count }) => {
  return (
    <>
      <header className='header'>
        <div className='header__nav wrapper'>
          <ul className='nav nav-menu nav__mobile'>
            <li className='list nav__list'>
              <Link className='nav__link' to='/products'>
                Products
              </Link>
            </li>
            <li className='list nav__list'>
              <Link className='nav__link' to='/journal'>
                Journal
              </Link>
            </li>
            <li className='list nav__list'>
              <Link className='nav__link' to='/about'>
                About
              </Link>
            </li>
          </ul>
          <div
            className='header__burger-menu'
            onClick={() => console.log('burger')}
          >
            <span></span>
          </div>
          <Link className='logo' to='/'>
            <img src={logo} alt='logo' />
          </Link>

          <ul className='nav user'>
            <li className='list user__list'>
              <Link className='nav__link login' to='/login'>
                Login
              </Link>
            </li>
            <li className='list user__list'>
              <Link className='nav__link cart' to='/cart'>
                Cart <span> ({count}) </span>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

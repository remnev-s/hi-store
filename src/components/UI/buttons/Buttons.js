import React from 'react';
import './Buttons.scss';
import clsx from 'clsx';

export const Buttons = ({ text, mediumButton, smallButton }) => {
  const classButton = clsx(
    { 'small-button': smallButton },
    { 'medium-button': mediumButton }
  );
  return <button className={`${classButton} main-button`}> {text} </button>;
};

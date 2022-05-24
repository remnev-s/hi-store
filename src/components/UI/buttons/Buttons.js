import React from 'react';
import './Buttons.scss';
import clsx from 'clsx';

export const Buttons = ({ text, button, smallButton }) => {
  const classButton = clsx({ 'small-button': smallButton });
  return <button className={`${classButton} main-button`}> {text} </button>;
};

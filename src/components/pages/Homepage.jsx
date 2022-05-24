import React from 'react';
import { Buttons } from '../UI/buttons/Buttons';

import { AboutSection } from '../pages/blocks-page/AboutSection/AboutSection';
import { ReadMore } from '../pages/blocks-page/ReadMore/ReadMore';
import { Products } from '../Products/Products';
import block1 from '../../images/block-1.jpg';
import block2 from '../../images/block-2.jpg';

export const Homepage = () => {
  return (
    <>
      <div className='header__promo '>
        <div className='header__promo-inner wrapper'>
          <h1 className='header__promo-title'>
            We understand tech accessories
          </h1>
          <div className='header__promo-subtitle'>
            <p>No distracting logos.</p>
            <p>Transparent pricing.</p>
            <p>High quality and easy returns if we didn’t get it right.</p>
            <p>We also decided, warranties should be included.</p>
          </div>
          <Buttons text='View products' />
        </div>
      </div>

      <div className='main wrapper'>
        <AboutSection
          img={block1}
          title='We made our tech accessories like we like our coffee — strong
          and charged.'
          subtitle='You’ll be powered with more energy and avoid
          the midday crash.'
        >
          <Buttons text='Shop now' />
        </AboutSection>

        <Products />

        <AboutSection
          aboutSection={true}
          img={block2}
          title='Our most visible life hack is to blend in, while standing out.'
          subtitle='«Luxury is having the best quality for practically nothing.»'
        >
          <Buttons text='Shop Here' />
        </AboutSection>
      </div>
      <ReadMore />
    </>
  );
};

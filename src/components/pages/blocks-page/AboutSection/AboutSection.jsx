import { Buttons } from '../../../UI/buttons/Buttons';
import './aboutSection.scss';
import clsx from 'clsx';
export const AboutSection = ({
  img,
  alt,
  title,
  subtitle,
  aboutSection,
  aboutSectionInner,
}) => {
  const classNameNew = clsx(
    { 'cost-sale': aboutSection },
    { 'about-section__inner': aboutSectionInner }
  );
  return (
    <section className='about-section '>
      <img src={img} className='about-section__img' alt={alt} />
      <div className={classNameNew}>
        <h2 className='about-section__title'> {title}</h2>
        <p className='about-section__subtitle'> {subtitle} </p>
        <Buttons button={true} text='Shop now' />
      </div>
    </section>
  );
};

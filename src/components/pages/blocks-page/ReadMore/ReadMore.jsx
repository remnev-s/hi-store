import { Buttons } from '../../../UI/buttons/Buttons';
import readMore from '../../../../images/read-more.png';
import './readMore.scss';

export const ReadMore = () => {
  return (
    <section className='read-more'>
      <div className='read-more__inner wrapper'>
        <img className='read-more__img' src={readMore} alt='img' />
        <Buttons text='Read more' />
      </div>
    </section>
  );
};

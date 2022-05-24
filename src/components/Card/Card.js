import './card.scss';
export const Card = ({ title, price, sale, priceSale }) => {
  return (
    <div className='card'>
      <span className='card__sale'> {sale} </span>
      <div className='card__description'>
        <p className='card__title'> {title} </p>
        <p className='card__price'> ${price} </p>
      </div>
      <p className='card__price-sale'> {priceSale} </p>
      <button className='card__btn'> add </button>
    </div>
  );
};

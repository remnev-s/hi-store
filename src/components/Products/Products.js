import { productsData } from '../../components/utils/productsData';
import { Card } from '../Card/Card';
import './products.scss';

const oneProducts = productsData.filter((item) => item.tag === 'oneProduct');
const bundle = productsData.filter((item) => item.tag === 'bundle');

export const Products = ({ title }) => {
  return (
    <section className='products'>
      <div className='products__inner'>
        <h2 className='products__descriptions'> Products </h2>
        <ul className='products__list'>
          {oneProducts.map((item) => (
            <li className='products__list-item' key={item.id}>
              <img src={item.img} className='products__img' alt='product' />
              <Card title={item.title} price={item.price} />
            </li>
          ))}
        </ul>
        <h2 className='products__descriptions'> Bundle </h2>
        <ul className='products__list'>
          {bundle.map((item) => (
            <li className='products__list-item' key={item.id}>
              <img src={item.img} className='products__img' alt='product' />
              <Card
                title={item.title}
                price={item.price}
                sale={item.sale}
                priceSale={item.priceSale}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const ProductsDescription = ({ title }) => {
  return <h2 className='products__descriptions'> {title} </h2>;
};

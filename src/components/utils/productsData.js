import card1 from '../../images/cards/card1.jpg';
import card2 from '../../images/cards/card2.jpg';
import card3 from '../../images/cards/card3.jpg';
import card4 from '../../images/cards/card4.jpg';
import card5 from '../../images/cards/card5.jpg';
import card6 from '../../images/cards/card6.jpg';
import card7 from '../../images/cards/card7.jpg';

import cardBundle1 from '../../images/cards/cardBundle1.jpg';
import cardBundle2 from '../../images/cards/cardBundle2.jpg';
import cardBundle3 from '../../images/cards/cardBundle3.jpg';

import { v4 as uuidv4 } from 'uuid';

export const productsData = [
  {
    id: uuidv4(),
    img: card1,
    title: 'USB-C to HDMI Adapter',
    price: 26.99,
    tag: 'oneProduct',
  },
  {
    id: uuidv4(),
    img: card2,
    title: 'USB-C to HDMI Adapter',
    price: 26.99,
    tag: 'oneProduct',
  },
  {
    id: uuidv4(),
    img: card3,
    title: 'USB-C to HDMI Adapter',
    price: 19.99,
    tag: 'oneProduct',
  },
  {
    id: uuidv4(),
    img: card4,
    title: 'USB-C to HDMI Adapter',
    price: 19.99,
    tag: 'oneProduct',
  },
  {
    id: uuidv4(),
    img: card5,
    title: 'USB-C to HDMI Adapter',
    price: 29.99,
    tag: 'oneProduct',
  },
  {
    id: uuidv4(),
    img: card6,
    title: 'USB-C to HDMI Adapter',
    price: 29.99,
    tag: 'oneProduct',
  },
  {
    id: uuidv4(),
    img: card7,
    title: 'USB-C to HDMI Adapter',
    price: 29.99,
    tag: 'oneProduct',
  },
  {
    id: uuidv4(),
    img: cardBundle1,
    title: 'The Commuter - USB-C Bundle',
    price: 99.99,
    tag: 'bundle',
    sale: 'Sale 5%',
    priceSale: '$94.99',
  },
  {
    id: uuidv4(),
    img: cardBundle2,
    title: 'The Creator - USB-C Bundle',
    price: 106.99,
    tag: 'bundle',
    sale: 'Sale 6%',
    priceSale: '$100.99',
  },
  {
    id: uuidv4(),
    img: cardBundle3,
    title: 'The Curator - USB-C Bundle',
    price: 106.99,
    tag: 'bundle',
    sale: 'Sale 6%',
    priceSale: '$100.99',
  },
];

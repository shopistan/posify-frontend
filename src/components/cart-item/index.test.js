import React from 'react';
import { mount } from 'enzyme';
import CartItem from './index';
const faker = require('faker');

const cartItem = mount(
  <CartItem
    item={{
      _id: faker.random.uuid(),
      name: faker.commerce.productName(),
      sku: faker.commerce.productAdjective(),
      price: faker.commerce.price(),
      image: faker.image.imageUrl(),
      quantity: faker.random.number(),
      selectedQty: faker.random.number(),
    }}
  />
);

describe('Cart Item', () => {
  const name = cartItem.prop('item').name;
  const sku = cartItem.prop('item').sku;
  const price = cartItem.prop('item').price;
  const image = cartItem.prop('item').image;

  it('Name rendered', () => {
    const nameElement = cartItem.find('h6[data-label="product-name"]');
    expect(nameElement.text()).toEqual(name);
  });

  it('Sku rendered', () => {
    const nameElement = cartItem.find('p[data-label="product-sku"]');
    expect(nameElement.text()).toEqual('SKU: ' + sku);
  });

  it('Price rendered', () => {
    const nameElement = cartItem.find('h6[data-label="product-price"]');
    expect(nameElement.text()).toEqual('$' + price);
  });

  it('Image rendered', () => {
    const imageElement = cartItem.find('img');
    expect(imageElement.prop('src')).toEqual(image);
  });
});

import React from 'react';
import { mount } from 'enzyme';
import CartItem from './index';

const cartItem = mount(
  <CartItem
    item={{
      _id: 1,
      name: 'test name',
      sku: 'test sku',
      quantity: 20,
      price: 2000,
      image: 'image source',
      selectedQty: 1,
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

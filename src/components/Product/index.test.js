import React from 'react';
import { mount } from 'enzyme';
import Product from './index';

const productItem = mount(
  <Product
    product={{
      name: 'test name',
      sku: 'test sku',
      quantity: 20,
      price: 2000,
      image: 'image source',
    }}
  />
);

describe('Product Item', () => {
  const name = productItem.prop('product').name;
  const sku = productItem.prop('product').sku;
  const price = productItem.prop('product').price;
  const image = productItem.prop('product').image;

  it('Name rendered', () => {
    const nameElement = productItem.find('h6[data-label="product-name"]');
    expect(nameElement.text()).toEqual(name);
  });

  it('Sku rendered', () => {
    const nameElement = productItem.find('p[data-label="product-sku"]');
    expect(nameElement.text()).toEqual('SKU: ' + sku);
  });

  it('Price rendered', () => {
    const nameElement = productItem.find('h6[data-label="product-price"]');
    expect(nameElement.text()).toEqual('$' + price);
  });

  it('Image rendered', () => {
    const imageElement = productItem.find('img');
    expect(imageElement.prop('src')).toEqual(image);
  });
});

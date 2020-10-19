import React from 'react';
import { mount } from 'enzyme';
import Product from './../Product';
const faker = require('faker');

const getProduct = () => {
  return {
    _id: faker.random.uuid(),
    name: faker.commerce.productName(),
    sku: faker.commerce.productAdjective(),
    price: faker.commerce.price(),
    image: faker.image.imageUrl(),
    quantity: faker.random.number(),
  };
};

const getProducts = (number = 3) => {
  return new Array(number).fill(undefined).map(getProduct);
};

describe('Home', () => {
  const products = getProducts();
  it('Products array rendered', () => {
    products.forEach((item) => {
      const productItem = mount(
        <Product
          product={{
            name: item.name,
            sku: item.sku,
            quantity: item.quantity,
            price: item.price,
            image: item.image,
          }}
        />
      );
      expect(productItem.prop('product').name).toBe(item.name);
      expect(productItem.prop('product').sku).toBe(item.sku);
      expect(productItem.prop('product').quantity).toBe(item.quantity);
      expect(productItem.prop('product').price).toBe(item.price);
      expect(productItem.prop('product').image).toBe(item.image);
    });
  });
});

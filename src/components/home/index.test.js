import React from 'react';
import { mount } from 'enzyme';
import Product from './../Product';

describe('Home', () => {
  const products = [
    {
      _id: 1,
      name: 'product name',
      sku: 'productsku',
      quantity: 10,
      price: 2000,
      image: 'image.jpg',
    },
    {
      _id: 2,
      name: 'product name',
      sku: 'productsku',
      quantity: 10,
      price: 2000,
      image: 'image.jpg',
    },
    {
      _id: 3,
      name: 'product name',
      sku: 'productsku',
      quantity: 10,
      price: 2000,
      image: 'image.jpg',
    },
  ];

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

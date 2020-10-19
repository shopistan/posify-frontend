import React from 'react';
import { mount } from 'enzyme';
import CartItem from './../cart';
const faker = require('faker');

const getCartItem = () => {
  return {
    _id: faker.random.uuid(),
    name: faker.commerce.productName(),
    sku: faker.commerce.productAdjective(),
    price: faker.commerce.price(),
    image: faker.image.imageUrl(),
    quantity: faker.random.number(),
    selectedQty: faker.random.number(),
  };
};

const getCartItems = (number = 3) => {
  return new Array(number).fill(undefined).map(getCartItem);
};

describe('Cart', () => {
  const cartItems = getCartItems();
  it('Cart array rendered', () => {
    cartItems.forEach((item) => {
      const cartItem = mount(
        <CartItem
          item={{
            _id: item._id,
            name: item.name,
            sku: item.sku,
            quantity: item.quantity,
            price: item.price,
            image: item.image,
            selectedQty: item.selectedQty,
          }}
        />
      );
      expect(cartItem.prop('item').name).toBe(item.name);
      expect(cartItem.prop('item').sku).toBe(item.sku);
      expect(cartItem.prop('item').quantity).toBe(item.quantity);
      expect(cartItem.prop('item').price).toBe(item.price);
      expect(cartItem.prop('item').image).toBe(item.image);
      expect(cartItem.prop('item').selectedQty).toBe(item.selectedQty);
    });
  });
});

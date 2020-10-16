import React from 'react';
import { mount } from 'enzyme';
import CartItem from './../cart';

describe('Cart', () => {
  const cartItems = [
    {
      _id: 1,
      name: 'test name',
      sku: 'test sku',
      quantity: 20,
      price: 2000,
      image: 'image source',
      selectedQty: 1,
    },
    {
      _id: 2,
      name: 'test name',
      sku: 'test sku',
      quantity: 20,
      price: 2000,
      image: 'image source',
      selectedQty: 1,
    },
    {
      _id: 3,
      name: 'test name',
      sku: 'test sku',
      quantity: 20,
      price: 2000,
      image: 'image source',
      selectedQty: 1,
    },
  ];

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

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Button, Typography, Grid } from '@material-ui/core';
import Theme from './../../constants/theme';
import CartItem from './../cart-item/index';

const useStyles = makeStyles({
  cart: {
    width: Theme.cartWidth,
    flexShrink: 0,
  },
  cartWrapper: {
    width: Theme.cartWidth,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  emptyCart: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  itemsContainer: {
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    padding: Theme.gridGutter * 2,
  },
  totalPriceWrapper: {
    marginBottom: Theme.gridGutter,
  },
  totalPrice: {
    textAlign: 'right',
  },
  buttonContainer: {
    padding: Theme.gridGutter * 2,
  },
});

const Cart = ({ items, updateCart, placeOrder }) => {
  const classes = useStyles();

  function removeCartItem(productId) {
    const updatedCart = items.filter((item) => item._id !== productId);
    updateCart(updatedCart);
  }

  function updateCartQty(item, key) {
    const itemsUpdated = [...items];
    const i = itemsUpdated.indexOf(item);
    itemsUpdated[i] = { ...item };
    key === 'increment'
      ? itemsUpdated[i].selectedQty++
      : itemsUpdated[i].selectedQty--;
    updateCart(itemsUpdated);
  }

  return (
    <Drawer
      className={classes.cart}
      anchor="right"
      variant="permanent"
      docked="true"
      classes={{
        paper: classes.cartWrapper,
      }}
    >
      {items && items.length ? (
        <>
          <div className={classes.itemsContainer}>
            {items.map((item) => (
              <CartItem
                key={item._id}
                item={item}
                removeItem={removeCartItem}
                updateQty={updateCartQty}
              />
            ))}
          </div>
          <div className={classes.buttonContainer}>
            <Grid container className={classes.totalPriceWrapper}>
              <Grid item xs={6}>
                <Typography variant="subtitle2">Total</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={classes.totalPrice} variant="subtitle2">
                  $
                  {items.reduce(
                    (totalPrice, item) =>
                      totalPrice + item.price * item.selectedQty,
                    0
                  )}
                </Typography>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={placeOrder}
            >
              Place Order Now
            </Button>
          </div>
        </>
      ) : (
        <div className={classes.emptyCart}>
          <Typography variant="subtitle2">No item in cart</Typography>
        </div>
      )}
    </Drawer>
  );
};

export default Cart;

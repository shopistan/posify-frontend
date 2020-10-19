import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import Product from './../Product/index';
import Cart from './../cart/index';
import PlaceOrder from './../place-order/index';
import Loading from './../loading/index';
import Theme from './../../constants/theme';

import './style.scss';

const useStyles = makeStyles({
  layout: {
    width: `calc(100% - ${Theme.cartWidth}px)`,
    minHeight: '100vh',
  },
  layoutContainer: {
    padding: Theme.gridGutter * 2,
  },
  emptyProductContainer: {
    height: `calc(100vh - ${Theme.gridGutter * 4}px)`,
  },
  productContainer: {
    minHeight: `calc(100vh - ${Theme.gridGutter * 4}px)`,
  },
});

const Home = () => {
  const classes = useStyles();
  const [products, setProducts] = useState(undefined);
  const [cartItems, setCartItems] = useState([]);
  const [placeOrderDialog, setPlaceOrder] = useState(false);

  useEffect(() => {
    axios
      .get(
        'https://fhfkzbydaj.execute-api.us-east-1.amazonaws.com/dev/products'
      )
      .then((response) => {
        console.log('res', response);
        setProducts(response.data.data);
      })
      .catch((err) => {
        console.log(err);
        setProducts('Something went wrong');
      });
  }, []);

  function addCartItem (product) {
    if (!cartItems.find((item) => item._id === product._id)) {
      product['selectedQty'] = 1;
      setCartItems((prevData) => [...prevData, product]);
    } else {
      const cartItemsUpdated = [...cartItems];
      const i = cartItemsUpdated.findIndex((item) => item._id === product._id);
      if (product.quantity > cartItemsUpdated[i].selectedQty) {
        cartItemsUpdated[i].selectedQty++;
        setCartItems(cartItemsUpdated);
      }
    }
  }
  function updateCartItems (products) {
    setCartItems(products);
  }
  function handlePlaceOrder () {
    setPlaceOrder(true);
  }
  function cancelPlaceOrder (e) {
    setPlaceOrder(e);
  }
  function reset () {
    setCartItems([]);
    setPlaceOrder(false);
  }

  return (
    <div className={classes.layout}>
      <div className={classes.layoutContainer}>
        <div
          className={
            products ? classes.productContainer : classes.emptyProductContainer
          }
        >
          {products ? (
            Array.isArray(products) && products.length > 0 ? (
              <Grid container spacing={3}>
                {products.map((product) => (
                  <Grid item xs={12} md={4} key={product._id}>
                    <Product product={product} addToCart={addCartItem} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Alert severity="error">{products}</Alert>
            )
          ) : (
            <Loading variant="normal" />
          )}
        </div>
      </div>
      <Cart
        items={cartItems}
        updateCart={updateCartItems}
        placeOrder={handlePlaceOrder}
      />
      {placeOrderDialog ? (
        <PlaceOrder
          cartData={cartItems}
          cancelOrder={cancelPlaceOrder}
          orderPlaced={reset}
        />
      ) : null}
    </div>
  );
};

export default Home;

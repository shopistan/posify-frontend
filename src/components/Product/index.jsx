import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  image: {
    height: 200,
  },
  name: {
    lineHeight: 1.15,
  },
  outOfStock: {
    color: 'red',
  },
  cardActions: {
    justifyContent: 'center',
  },
});

const Product = ({ product, addToCart }) => {
  const classes = useStyles();
  const { _id, name, sku, quantity, price, image } = product;

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.image} image={image} title={name} />
      <CardContent>
        <Typography variant="subtitle1" className={classes.name}>
          {name}
        </Typography>
        <Typography variant="body2" gutterBottom>
          SKU: {sku}
        </Typography>
        <Typography variant="subtitle2">${price}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => addToCart(product)}
          disabled={quantity === 0}
          classes={{ disabled: classes.outOfStock }}
        >
          {quantity > 0 ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;

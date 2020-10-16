import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Theme from './../../constants/theme';
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Icon,
  TextField,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    padding: Theme.gridGutter,
    marginBottom: Theme.gridGutter,
    position: 'relative',
  },
  image: {
    height: 80,
    width: 80,
  },
  details: {
    padding: `0 ${Theme.gridGutter}px 0 ${Theme.gridGutter}px`,
  },
  name: {
    lineHeight: 1.15,
  },
  qtyWrapper: {
    display: 'flex',
  },
  qtyInput: {
    width: 50,
  },
  deleteButton: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
const CartItem = ({ item, removeItem, updateQty }) => {
  const classes = useStyles();
  const { _id, name, sku, quantity, price, image, selectedQty } = item;

  return (
    <Card className={classes.root}>
      <CardMedia
        component={'img'}
        className={classes.image}
        image={image}
        title={name}
      />
      <CardContent className={classes.details}>
        <IconButton
          className={classes.deleteButton}
          onClick={() => removeItem(_id)}
        >
          <Icon>delete</Icon>
        </IconButton>
        <Typography
          variant="subtitle1"
          className={classes.name}
          data-label={'product-name'}
        >
          {name}
        </Typography>
        <Typography variant="body2" data-label={'product-sku'} gutterBottom>
          SKU: {sku}
        </Typography>
        <Typography variant="subtitle2" data-label={'product-price'}>
          ${price}
        </Typography>
        <div className={classes.qtyWrapper}>
          <IconButton
            size="small"
            className={classes.iconButton}
            component="button"
            onClick={() => updateQty(item, 'decrement')}
            disabled={selectedQty === 1}
          >
            <Icon>remove</Icon>
          </IconButton>
          <TextField
            size="small"
            type="number"
            className={classes.qtyInput}
            value={selectedQty}
            InputProps={{
              readOnly: true,
            }}
            inputProps={{
              style: { textAlign: 'center' },
            }}
            data-label="input"
          />
          <IconButton
            size="small"
            className={classes.iconButton}
            component="button"
            onClick={() => updateQty(item, 'increment')}
            disabled={selectedQty === quantity}
          >
            <Icon>add</Icon>
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartItem;

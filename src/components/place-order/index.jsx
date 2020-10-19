import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Icon,
  Typography,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Loading from './../loading/index';

const useStyles = makeStyles({
  field: {
    marginBottom: 20,
  },
  modalCenter: {
    textAlign: 'center',
  },
  successIcon: {
    fontSize: '6rem',
    color: 'green',
    marginBottom: 20,
  },
});

const PlaceOrder = ({ cartData, cancelOrder, orderPlaced }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [orderItems, setOrderItems] = useState([]);
  const [submitError, setSubmitError] = useState('');
  const [orderCompleted, setOrderCompleted] = useState(false);

  useEffect(() => {
    let orderItemsData = cartData.map((item) => {
      let obj = {
        sku: item.sku,
        quantity: item.selectedQty,
        price: item.price,
      };
      return obj;
    });
    setOrderItems(orderItemsData);
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
    cancelOrder(false);
  };

  return (
    <Dialog open={open} scroll="body" fullWidth>
      {!orderCompleted ? (
        <>
          <DialogTitle>Enter your details</DialogTitle>
          <DialogContent>
            <Formik
              initialValues={{
                customer: {
                  name: '',
                  email: '',
                  phone: '',
                  address: '',
                  city: '',
                  country: '',
                },
                items: orderItems,
              }}
              validationSchema={Yup.object().shape({
                customer: Yup.object().shape({
                  name: Yup.string().required('This is required field'),
                  email: Yup.string()
                    .email('Invalid Email')
                    .required('This is required field'),
                  phone: Yup.string()
                    .required('This is required field')
                    .matches(/^[0-9-()]*$/, 'Invalid Input'),
                  address: Yup.string().required('This is required field'),
                  city: Yup.string().required('This is required field'),
                  country: Yup.string().required('This is required field'),
                }),
                items: Yup.array().required(''),
              })}
              onSubmit={(fields, { setSubmitting }) => {
                setSubmitting(true);
                setSubmitError('');
                axios
                  .post(
                    'https://nw9ulr2s82.execute-api.us-east-1.amazonaws.com/dev/sales',
                    JSON.stringify(fields),
                    { mode: 'no-cors' }
                  )
                  .then((response) => {
                    console.log('res', response);
                    setOrderCompleted(true);
                    setTimeout(() => {
                      handleClose();
                      orderPlaced();
                    }, 9000);
                  })
                  .catch((err) => {
                    console.log(err);
                    setSubmitting(false);
                    setSubmitError('Something went wrong');
                  });
              }}
            >
              {({
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => {
                return (
                  <Form onSubmit={handleSubmit}>
                    <TextField
                      autoComplete="off"
                      className={classes.field}
                      variant="outlined"
                      label="Name"
                      name="customer.name"
                      value={values.customer.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        errors.customer &&
                        errors.customer.name &&
                        touched.customer &&
                        touched.customer.name
                      }
                      helperText={
                        errors.customer &&
                        errors.customer.name &&
                        touched.customer &&
                        touched.customer.name &&
                        errors.customer.name
                      }
                      fullWidth
                      size="small"
                    />
                    <TextField
                      autoComplete="off"
                      className={classes.field}
                      variant="outlined"
                      label="Email"
                      name="customer.email"
                      value={values.customer.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        errors.customer &&
                        errors.customer.email &&
                        touched.customer &&
                        touched.customer.email
                      }
                      helperText={
                        errors.customer &&
                        errors.customer.email &&
                        touched.customer &&
                        touched.customer.email &&
                        errors.customer.email
                      }
                      fullWidth
                      size="small"
                    />
                    <TextField
                      autoComplete="off"
                      className={classes.field}
                      variant="outlined"
                      label="Phone"
                      name="customer.phone"
                      value={values.customer.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        errors.customer &&
                        errors.customer.phone &&
                        touched.customer &&
                        touched.customer.phone
                      }
                      helperText={
                        errors.customer &&
                        errors.customer.phone &&
                        touched.customer &&
                        touched.customer.phone &&
                        errors.customer.phone
                      }
                      fullWidth
                      size="small"
                    />
                    <TextField
                      autoComplete="off"
                      className={classes.field}
                      variant="outlined"
                      label="Address"
                      name="customer.address"
                      value={values.customer.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        errors.customer &&
                        errors.customer.address &&
                        touched.customer &&
                        touched.customer.address
                      }
                      helperText={
                        errors.customer &&
                        errors.customer.address &&
                        touched.customer &&
                        touched.customer.address &&
                        errors.customer.address
                      }
                      fullWidth
                      size="small"
                    />
                    <TextField
                      autoComplete="off"
                      className={classes.field}
                      variant="outlined"
                      label="City"
                      name="customer.city"
                      value={values.customer.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        errors.customer &&
                        errors.customer.city &&
                        touched.customer &&
                        touched.customer.city
                      }
                      helperText={
                        errors.customer &&
                        errors.customer.city &&
                        touched.customer &&
                        touched.customer.city &&
                        errors.customer.city
                      }
                      fullWidth
                      size="small"
                    />
                    <TextField
                      autoComplete="off"
                      className={classes.field}
                      variant="outlined"
                      label="Country"
                      name="customer.country"
                      value={values.customer.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        errors.customer &&
                        errors.customer.country &&
                        touched.customer &&
                        touched.customer.country
                      }
                      helperText={
                        errors.customer &&
                        errors.customer.country &&
                        touched.customer &&
                        touched.customer.country &&
                        errors.customer.country
                      }
                      fullWidth
                      size="small"
                    />
                    {isSubmitting ? <Loading variant="overlay" /> : null}
                    {submitError ? (
                      <Alert severity="error">{submitError}</Alert>
                    ) : null}
                    <DialogActions>
                      <Button type="button" onClick={handleClose}>
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        color="primary"
                        disabled={!dirty || isSubmitting}
                      >
                        Place Order
                      </Button>
                    </DialogActions>
                  </Form>
                );
              }}
            </Formik>
          </DialogContent>
        </>
      ) : (
          <DialogContent className={classes.modalCenter}>
            <Icon className={classes.successIcon}>check_circle_outline</Icon>
            <Typography variant="h5" gutterBottom>
              Thank you for your order
          </Typography>
            <Typography variant="h6" gutterBottom>
              Your order has been placed successfully.
          </Typography>
            <Button type="button" color="primary" onClick={orderPlaced}>
              Ok
          </Button>
          </DialogContent>
        )}
    </Dialog>
  );
};

export default PlaceOrder;

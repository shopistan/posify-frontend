import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});

const Loading = ({ variant }) => {
  // const { variant } = props;
  const classes = useStyles();
  return (
    <div
      className={
        variant && variant === 'overlay'
          ? classes.overlay
          : classes.loader
      }
    >
      <CircularProgress />
    </div>
  );
};

export default Loading;

Loading.propTypes = {
  variant: PropTypes.string.isRequired,
};

import { Box, makeStyles } from '@material-ui/core';
import ProductViewsWithPrice from '../ProductViews';

const useStyles = makeStyles((theme) => ({
    image: {
      borderRadius: '0.75rem',
      padding: '.35rem',
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
    },
  }));

const CartProduct = ({cId,cPrice,cCount}) => {
    const classes = useStyles({ cti: '#2ba6df' });
    return (
        <Box m={1} className = "im-cart">
            <img className={classes.image} src='https://picsum.photos/200/300' />
            <Box m={1}>
                <div>Id: {cId}</div>
                <div>Price: <ProductViewsWithPrice price={cPrice}/></div>
                <div>Number of Products: {cCount}</div>
            </Box>
        </Box>
    );
}

export default CartProduct;
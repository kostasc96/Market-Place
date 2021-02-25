const CartProduct = ({cId,cPrice,cCount}) => {
    return (
        <div className = "im-cart">
            <img src='https://picsum.photos/200/300' />
            <div>Id: {cId}</div>
            <div>Price: {cPrice}</div>
            <div>Number of Products: {cCount}</div>
        </div>
    );
}

export default CartProduct;
const handleEmptyCart = ({productList}) => {
    console.log('Before empty');
    console.log(productList.length);
    if(productList.length > 0){
        productList = []
    }
    console.log('After empty');
    console.log(productList.length);
}

export default handleEmptyCart;
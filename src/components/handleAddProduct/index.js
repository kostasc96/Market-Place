const handleAddProduct = ({idOfProduct, countOfProduct, priceOfProduct, productsList}) => {
    let obj = {productId:idOfProduct, numberOfProducts:countOfProduct, totalPrice:priceOfProduct};
    productsList.push(obj); 
    console.log(productsList.length);
    console.log('Item added');
    console.log(countOfProduct);
    console.log(priceOfProduct);
}

export default handleAddProduct;
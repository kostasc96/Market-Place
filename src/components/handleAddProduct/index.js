const handleAddProduct = ({idOfProduct, countOfProduct, priceOfProduct, productsList}) => {
    let obj = {productId:idOfProduct, numberOfProducts:countOfProduct, totalPrice:priceOfProduct};
    productsList.push(obj); 
    console.log(productsList.length);
    console.log('Item added');
    console.log(obj.productId);
    console.log(obj.numberOfProducts);
}

export default handleAddProduct;
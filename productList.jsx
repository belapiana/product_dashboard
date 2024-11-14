import React from 'react';

const ProductList = ({ productList }) => {
  const listItems = productList.map((product, i) => (
    <ProductItem key={i} product={product} />  
  ));

  return (
    <ul>
      {listItems}
    </ul>
  );
};

export default ProductList;

import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ productList }) => {
  const listItems = productList.map((product, i) => (
    <ProductItem key={i} product={product} />  {/* Pass product as prop */}
  ));

  return (
    <ul>
      {listItems}
    </ul>
  );
};

export default ProductList;


import productList from "./app"


const ProductItem = ({productList}) => {
  return (
    <li>
      <h3>{productList.name}</h3>
      <p>Price: ${productList.price}</p>
      <p>{productList.description}</p>
    </li>
  );
};


export default ProductItem;

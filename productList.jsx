import productList from "./app"

const list = ({ productList }) => {
    const listItems = productList.map((product, i) => (
      <productItem key={'product_' + i} product={product} />
    ));

return (
<ul>{listItems} </ul> )
}
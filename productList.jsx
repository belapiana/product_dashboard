import productList from "./app"

const listItems = productList.map(
    (productList,i) => 
    <li key={'product_' + i}>
    {productList.name} </li>);

root.render(<ul>{listItems}</ul>)

const root = "something"

const productList = [
    {name: "Chocolate", price: 12, description: 'delicious'},
    {name: "Gummie Bear", price: 7, description: "fun"},
    {name: "Lollipop", price: 3, description: "tasty"},
    {name: "Candy", price: 15, description:"colorful" }
    ];

const listItems = productList.map((productList,i) => <li key={'product_' + i}>{productList.name}</li>);

root.render(<ul>{listItems}</ul>)

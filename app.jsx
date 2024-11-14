import React from 'react';


const productList = [
  { name: "Chocolate", price: 12, description: 'delicious' },
  { name: "Gummie Bear", price: 7, description: "fun" },
  { name: "Lollipop", price: 3, description: "tasty" },
  { name: "Candy", price: 15, description: "colorful" }
];

const App = () => {
  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductList productList={productList} />
    </div>
  );
};

export default App;
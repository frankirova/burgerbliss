import React, { useState, useEffect } from "react";
import { product } from "./helpers/products";
import { SimpleGrid } from "@chakra-ui/react";
import { NavBar } from "./components/Navbar/NavBar";
import { Card } from "./components/Card";
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    product.list().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <NavBar />
      <SimpleGrid
        columns={[1, 1, 2, 3]}
        bg="primary"
        color={"white"}
        minHeight="full"
        minWidth="full"
        placeItems={"center"}
        spacing={4}
        padding={4}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            url={product.url}
            price={product.price}
            name={product.name}
            toppings={product.toppings}
            stock={product.stock}
          />
        ))}
      </SimpleGrid>
    </>
  );
}

export default App;

import { Card } from "../components/Card";
import { SimpleGrid } from "@chakra-ui/react";
import { useProducts } from "../hooks/useProducts";

export const ProductList = () => {
  const { products } = useProducts();

  return (
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
  );
};

import { useContext } from "react";
import { CartContext } from "../../context";
import { Box, Divider, Grid, GridItem, Image } from "@chakra-ui/react";

export const CartList = ({ cart }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <>
      {cart.map((prod) => (
        <Box as="article" key={prod.id} my="1rem">
          <Grid templateColumns="repeat(5, 70px)" gap={4}>
            <GridItem w="100%" h="20">
              <Image src="//placehold.it/64x64" borderRadius="9999" />
            </GridItem>
            <GridItem w="100%" h="20">
              {prod.title}
            </GridItem>
            <GridItem w="100%" h="20">
              x{prod.quantity}
            </GridItem>
            <GridItem w="100%" h="20">
              ${prod.price}
            </GridItem>
            <GridItem w="100%" h="20">
              <Box
                onClick={() => {
                  removeItem(prod.id);
                }}
              >
                <i className="fa-solid fa-xmark"></i>
              </Box>
            </GridItem>
          </Grid>
          <Divider py={2} />
        </Box>
      ))}
    </>
  );
};

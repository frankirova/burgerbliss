import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Box, Divider, Grid, GridItem, Image } from "@chakra-ui/react";
import { TrashIcon } from "../../icons/TrashIcon";

export const CartList = ({ cart }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <>
      {cart.map((prod) => (
        <Box as="article" key={prod.id}>
          <Grid templateColumns="repeat(4, 72px)" gap={4} placeContent='center' fontSize='lg'>
            {/* <GridItem w="100%" h="20">
              <Image src="//placehold.it/48x48" borderRadius="9999" />
            </GridItem> */}
            <GridItem color='primary' h="20">
              {prod.name}
            </GridItem>
            <GridItem  h="20">
              x{prod.quantity}
            </GridItem>
            <GridItem  h="20">
              ${prod.price}
            </GridItem>
            <GridItem h="20">
              <Box
                onClick={() => {
                  removeItem(prod.id);
                }}
              >
                <TrashIcon />
              </Box>
            </GridItem>
          </Grid>
          <Divider py={2} />
        </Box>
      ))}
    </>
  );
};

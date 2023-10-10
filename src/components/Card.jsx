import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { CartContext } from "../context/cartContext";
import { useContext } from "react";
import { toast, Toaster } from "react-hot-toast";
import {CounterQuantity} from '../components/Cart/CounterQuantity'

export const Card = ({ id, stock, name, price, url, toppings }) => {
  const { addToCart } = useContext(CartContext);
  const quantity = 1;

  const addTo = (quantity) => {
    if (stock !== "0") {
      addToCart({ id, url, price, name, quantity });
    } else {
      toast.error("Error, agregaste un producto sin Stock al CARRITO!");
    }
  };
  return (
    <SimpleGrid
      rows={[4, 4, 4, 4]}
      key={id}
      p={6}
      placeItems={"center"}
      maxW={"sm"}
      minW={"sm"}
      maxH={"xxl"}
      minH={"xxl"}
      bg={"secondary"}
      color={"#242424"}
      overflowWrap={"break-word"}
    >
      <Box as={"section"} px={4}>
        <Image src={url} />
      </Box>
      <Box textAlign={"start"} minW={"300px"} maxW={"300px"}>
        <Text color={"primary"} fontWeight={"black"} fontSize={"4xl"}>
          {name}
        </Text>

        <Text fontWeight={"bold"} fontSize={"xl"}>
          {toppings}
        </Text>

        <Text color={"primary"} fontWeight={"bold"} fontSize={"4xl"}>
          ${price}
        </Text>
      </Box>
      <CounterQuantity stock={stock} addTo={addTo}/>
      {/* <Button onClick={() => addTo(quantity)}>Agregar</Button> */}
      <Toaster position="top-center" reverseOrder={false} />
    </SimpleGrid>
  );
};

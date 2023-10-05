import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

export const Card = ({ product }) => {
  return (
    <SimpleGrid
      rows={[4, 4, 4, 4]}
      key={product.id}
      p={6}
      placeItems={"center"}
      maxW={"sm"}
      minW={"sm"}
      maxH={'xl'}
      minH={'xl'}
      bg={"secondary"}
      color={"#242424"}
      overflowWrap={"break-word"}
    >
      <Box as={"section"} px={4}>
        <Image src={product.url} />
      </Box>
      <Box textAlign={"start"} minW={"300px"} maxW={"300px"}>
        <Text color={"primary"} fontWeight={"black"} fontSize={"4xl"}>
          {product.name}
        </Text>

        {product.toppings ? (
          <Text fontWeight={"bold"} fontSize={"xl"}>
            {product.toppings}
          </Text>
        ) : (
          <Text fontWeight={"bold"} fontSize={"xl"}>
            {product.category}
          </Text>
        )}

        <Text color={"primary"} fontWeight={"bold"} fontSize={"4xl"}>
          ${product.price}
        </Text>
      </Box>
    </SimpleGrid>
  );
};

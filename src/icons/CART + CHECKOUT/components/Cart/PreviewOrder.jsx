import { VStack, Text } from "@chakra-ui/react";

export const PreviewOrder = ({ checkout }) => {
  return (
    <VStack fontSize="xl">
      <Text>Email: {checkout.email} </Text>
      <Text>Direccion: {checkout.direction}</Text>
      <Text> Metodo de Pago: {checkout.formaDePago}</Text>
    </VStack>
  );
};

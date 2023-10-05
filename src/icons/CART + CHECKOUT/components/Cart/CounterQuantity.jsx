import { useCounter } from "../../hooks/useCounter";
import { Button, Flex, Text } from "@chakra-ui/react";

export const CounterQuantity = ({ prod, addTo }) => {
  const { counter, increment, decrement } = useCounter(prod.stock);

  return (
    <Flex as="section" direction="column" justify="center" align="center">
      <Flex gap={3} my="1rem" align="center">
        <Button onClick={() => increment()} bg="secondary" color="primary">
          +
        </Button>
        <Text as="span" size="md" fontWeight="bold">
          {counter}
        </Text>
        <Button onClick={() => decrement()} bg="secondary" color="primary">
          -
        </Button>
      </Flex>
      <Button
        my="1rem"
        onClick={() => {
          addTo(counter);
        }}
      >
        Add to cart
      </Button>
    </Flex>
  );
};

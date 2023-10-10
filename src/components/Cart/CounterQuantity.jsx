import { useCounter } from "../../hooks/useCounter";
import { Button, Flex, Text } from "@chakra-ui/react";
import { MinusIcon } from "../../icons/MinusIcon";
import { PlusIcon } from "../../icons/PlusIcon";

export const CounterQuantity = ({ stock, addTo }) => {
  const { counter, increment, decrement } = useCounter(stock);

  return (
    <Flex as="section" direction="row" gap={10} justify="center" align="center">
      <Flex gap={3} my="1rem" align="center">
        <Button
          size="xl"
          fontWeight={"bold"}
          onClick={() => increment()}
          bg="secondary"
          color="primary"
        >
          <PlusIcon />
        </Button>
        <Text as="span" size="xl" fontWeight="bold">
          {counter}
        </Text>
        <Button
          size="xl"
          fontWeight={"bold"}
          onClick={() => decrement()}
          bg="secondary"
          color="primary"
        >
          <MinusIcon />
        </Button>
      </Flex>
      <Button
        my="1rem"
        onClick={() => {
          addTo(counter);
        }}
      >
        Agregar al carrito
      </Button>
    </Flex>
  );
};

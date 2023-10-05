import { useContext, useEffect } from "react";
import { CartContext } from "../../context";
import { useForm } from "../../hooks";
import { CheckoutCheckboxGroup, CheckoutInputGroup } from "../Checkout";

import { Flex, FormControl, Text } from "@chakra-ui/react";

export const Checkout = () => {
  const { updateCheckout } = useContext(CartContext);
  const initialValue = {
    email: "",
    direction: "",
    formaDePago: "",
  };

  const {
    formState,
    handleChange,
    handleSubmit,
    updateFormState,
    hasError,
    handleBlur,
  } = useForm(initialValue);

  useEffect(() => {
    updateCheckout(formState);
  }, [formState]);

  return (
    <>
      <FormControl onSubmit={handleSubmit}>
        <Flex direction="column" gap={2}>
          <CheckoutInputGroup
            handleChange={handleChange}
            handleBlur={handleBlur}
            hasError={hasError}
          />
          <CheckoutCheckboxGroup
            formState={formState}
            updateFormState={updateFormState}
            hasError={hasError}
          />
          {hasError && <Text color="red">{hasError.formaDePago}</Text>}
        </Flex>
      </FormControl>
    </>
  );
};

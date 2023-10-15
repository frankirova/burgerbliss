import { CheckoutCheckboxGroup, CheckoutInputGroup } from "../Checkout";
import { Flex, FormControl, Text } from "@chakra-ui/react";

export const Checkout = ({
  formState,
  handleBlur,
  handleChange,
  handleSubmit,
  hasError,
  updateFormState,
}) => {
  return (
    <>
      <FormControl onSubmit={handleSubmit}>
        <Flex direction="column" gap={2}>
          <CheckoutInputGroup
            handleBlur={handleBlur}
            handleChange={handleChange}
            hasError={hasError}
          />
          <CheckoutCheckboxGroup
            formState={formState}
            hasError={hasError}
            updateFormState={updateFormState}
          />
          {hasError && <Text color="red">{hasError.formaDePago}</Text>}
        </Flex>
      </FormControl>
    </>
  );
};

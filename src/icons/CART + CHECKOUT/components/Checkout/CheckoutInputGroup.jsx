import { FormLabel, Input, Text } from "@chakra-ui/react";

export const CheckoutInputGroup = ({ handleChange, handleBlur, hasError }) => {
  return (
    <>
      <FormLabel>Email</FormLabel>
      <Input
        onChange={handleChange}
        onBlur={handleBlur}
        isRequired
        name="email"
        type="text"
        size="md"
        focusBorderColor="primary"
      />
      {hasError && <Text color="red">{hasError.email}</Text>}
      <FormLabel>Direccion</FormLabel>
      <Input
        onChange={handleChange}
        onBlur={handleBlur}
        isRequired
        name="direction"
        type="text"
        size="md"
        focusBorderColor="primary"
      />
      {hasError && <Text color="red">{hasError.direction}</Text>}
    </>
  );
};

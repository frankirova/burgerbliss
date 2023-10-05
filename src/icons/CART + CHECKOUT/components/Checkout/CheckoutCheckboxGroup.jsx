import { useCheckbox } from "../../hooks";
import { CheckboxGroup, Checkbox, Text, FormLabel } from "@chakra-ui/react";

export const CheckoutCheckboxGroup = ({ formState, updateFormState }) => {
  const { handleChangeCheckbox, selectedCheckbox } = useCheckbox(
    formState,
    updateFormState
  );

  return (
    <>
      <FormLabel>Metodo de pago</FormLabel>
      <CheckboxGroup>
        <Checkbox
          onChange={handleChangeCheckbox}
          colorScheme="green"
          textColor="white"
          name="formaDePago"
          value="Efectivo"
          isChecked={selectedCheckbox === "Efectivo"}
          isDisabled={
            selectedCheckbox !== null && selectedCheckbox !== "Efectivo"
          }
        >
          <Text color="black">Efectivo</Text>
        </Checkbox>
        <Checkbox
          onChange={handleChangeCheckbox}
          colorScheme="green"
          textColor="white"
          name="formaDePago"
          value="TarjetaDeCredito"
          isChecked={selectedCheckbox === "TarjetaDeCredito"}
          isDisabled={
            selectedCheckbox !== null && selectedCheckbox !== "TarjetaDeCredito"
          }
        >
          <Text color="black">Tarjeta de credito</Text>
        </Checkbox>
        <Checkbox
          onChange={handleChangeCheckbox}
          colorScheme="green"
          textColor="white"
          name="formaDePago"
          value="TarjetaDeDebito"
          isChecked={selectedCheckbox === "TarjetaDeDebito"}
          isDisabled={
            selectedCheckbox !== null && selectedCheckbox !== "TarjetaDeDebito"
          }
        >
          <Text color="black">Tarjeta de debito</Text>
        </Checkbox>
        <Checkbox
          onChange={handleChangeCheckbox}
          colorScheme="green"
          textColor="white"
          name="formaDePago"
          value="Transferencia"
          isChecked={selectedCheckbox === "Transferencia"}
          isDisabled={
            selectedCheckbox !== null && selectedCheckbox !== "Transferencia"
          }
        >
          <Text color="black">Transferencia</Text>
        </Checkbox>
      </CheckboxGroup>
    </>
  );
};

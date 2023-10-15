import { CartContext } from "../../context/cartContext";
import { Checkout } from "./Checkout";
import { useContext, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
export const CheckoutContainer = () => {
  const { updateCheckout } = useContext(CartContext);

  const initialValue = {
    email: "",
    direction: "",
    formaDePago: "",
    phone: 351,
  };
  const {
    formState,
    handleBlur,
    handleChange,
    handleSubmit,
    hasError,
    updateFormState,
  } = useForm(initialValue);

  useEffect(() => {
    updateCheckout(formState);
  }, [formState]);

  return (
    <Checkout
      formState={formState}
      handleBlur={handleBlur}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      hasError={hasError}
      updateFormState={updateFormState}
    />
  );
};

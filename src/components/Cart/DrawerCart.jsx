import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { useGetMessageCart } from "../../hooks/useGetMessageCart";
import { createOrder } from "../../helpers/db";
import { CheckoutContainer } from "../Checkout/CheckoutContainer";
import { MyDivider, CartList, PreviewOrder, BackButton } from "../Cart";

import {
  Flex,
  useDisclosure,
  Link,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Text,
  Image,
  Spinner,
} from "@chakra-ui/react";
import { CartIcon } from "../../icons/CartIcon";
import { TrashIcon } from "../../icons/TrashIcon";

export const DrawerCart = () => {
  const phone = import.meta.env.VITE_PHONE_NUMBER;
  const { cart, checkout, getTotal, clearCart, getQuantity } =
    useContext(CartContext);
  const [total, setTotal] = useState(0);
  // const total = getTotal(checkout.phone);

  const [currentStep, setCurrentStep] = useState("cart");
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { items } = useGetMessageCart(cart, total, checkout);
  const btnRef = useRef();

  useEffect(() => {
    if (!isOpen) {
      () => setCurrentStep("cart");
    }
  }, [isOpen]);

  useEffect(() => {
    const fetchTotal = async () => {
      setIsLoading(true);
      try {
        const totalValue = await getTotal(checkout.phone);
        setTotal(totalValue);
      } catch (error) {
        console.error(error);
        setTotal(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTotal();
  }, [isOpen, currentStep, checkout.phone]);

  const handleCreateOrder = () => {
    if (checkout.email === "") return;
    if (checkout.direction === "") return;
    if (checkout.formaDePago === "") return;
    createOrder(cart, checkout, total, setCurrentStep, setIsLoading);
    clearCart();
  };

  return (
    <>
      <Button
        width="6rem"
        ref={btnRef}
        bg="#a9b277"
        color="white"
        _hover={{ color: "white", bg: "secondary" }}
        p={6}
        mx="1.2rem"
        onClick={onOpen}
      >
        <CartIcon />: {getQuantity()}
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader display="flex" gap={4} alignItems="center">
            {currentStep === "fields" && (
              <BackButton setCurrentStep={setCurrentStep} />
            )}
            Mi carrito
          </DrawerHeader>
          <MyDivider />
          <DrawerBody>
            {isLoading && (
              <Flex alignItems="center" justifyContent="center">
                <Spinner />
              </Flex>
            )}

            {currentStep === "cart" && <CartList cart={cart} />}

            {currentStep === "fields" && <CheckoutContainer />}

            {currentStep === "finish" && <PreviewOrder checkout={checkout} />}
          </DrawerBody>

          <Flex justify="space-around" fontWeight="bold">
            <Text>Total:</Text>
            <Text> ${total}</Text>
          </Flex>
          <DrawerFooter>
            {currentStep === "cart" && (
              <>
                <Button
                  variant="outline"
                  mr={3}
                  onClick={onClose}
                  fontWeight="500"
                >
                  Cancelar
                </Button>
                <Button
                  onClick={() => setCurrentStep("fields")}
                  bg="primary"
                  color="white"
                  fontWeight="500"
                  _hover={{ color: "primary", bg: "secondary" }}
                >
                  Continuar
                </Button>
                <Button
                  onClick={() => {
                    clearCart();
                    onClose();
                  }}
                  mx="2"
                >
                  <TrashIcon />
                </Button>
              </>
            )}
            {currentStep === "fields" && (
              <Button
                bg="primary"
                color="white"
                size="lg"
                width="100%"
                fontWeight="500"
                _hover={{ color: "white" }}
                onClick={handleCreateOrder}
              >
                Crear orden
              </Button>
            )}
            {currentStep === "finish" && (
              <>
                <Button
                  isExternal
                  as={Link}
                  colorScheme="whatsapp"
                  href={`https://wa.me/${phone}?text=${encodeURIComponent(
                    items
                  )}`}
                  leftIcon={
                    <Image src="https://icongr.am/fontawesome/whatsapp.svg?size=24&color=ffffff" />
                  }
                  size="lg"
                  width="100%"
                  fontWeight="500"
                  _hover={{ color: "white" }}
                >
                  Confirmar pedido
                </Button>
              </>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

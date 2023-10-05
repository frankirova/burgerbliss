import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../../context";
import { useGetMessageCart } from "../../hooks";
import { createOrder } from "../../services/firestore_db/orders_db";
import { Checkout } from "../Checkout";
import { MyDivider, CartList, PreviewOrder, BackButton } from "../Cart";

import {
  Box,
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
  Tag,
  VStack,
} from "@chakra-ui/react";

export const DrawerCart = () => {
  const { cart, checkout, getTotal, clearCart, getQuantity } =
    useContext(CartContext);
  const total = getTotal();

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

  const handleCreateOrder = () => {
    if (checkout.email === "") return;
    if (checkout.direction === "") return;
    if (checkout.formaDePago === "") return;
    createOrder(cart, checkout, total, setCurrentStep, setIsLoading);
  };

  return (
    <>
      <Flex placeContent="center" pos="sticky" bottom="0px" left="0">
        <Button
          width="12rem"
          ref={btnRef}
          bg="primary"
          color="white"
          _hover={{ color: "white", bg: "primary" }}
          p={6}
          my="1rem"
          onClick={onOpen}
        >
          <Flex
            justifyContent="space-between"
            align="center"
            width="100%"
            height="1rem"
          >
            <Box maxWidth={'24px'}>
              <i className="fa-sharp fa-solid fa-cart-shopping"></i>
            </Box>
            <Tag
              bg="secondary"
              color="white"
              fontSize={["sm", "sm", "lg", "lg"]}
              p={2}
              // px={2}
            >
              Items: {getQuantity()}
            </Tag>
          </Flex>
        </Button>
      </Flex>

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

            {currentStep === "fields" && (
              <Checkout setCurrentStep={setCurrentStep} onClose={onClose} />
            )}

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
                  colorScheme="red"
                  mx="2"
                >
                  <i className="fa-solid fa-trash"></i>
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
                  href={`https://wa.me/543512274743?text=${encodeURIComponent(
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

import { NavLink } from "react-router-dom";
import { Flex, Image } from "@chakra-ui/react";
import { DrawerCart } from "../../components/Cart/DrawerCart";

export const NavBar = () => {
  return (
    <Flex
      justify="space-around"
      bgColor="secondary"
      pos={"sticky"}
      top={"0"}
      left={"0"}
      zIndex={"1"}
    >
      <Flex minW="100vw" fontSize="xl" justify="space-between" align="center">
        <NavLink to="/">
          <Image src="/assets/img3.jpg" alt="logo-bliss" />
        </NavLink>
        <DrawerCart />
      </Flex>
    </Flex>
  );
};

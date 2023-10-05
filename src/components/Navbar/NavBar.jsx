import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavLinksList } from "../../components";

import "../../styles/__navbar.css";
import { Flex, HStack, IconButton, Image, Text } from "@chakra-ui/react";
import { XIcon } from "../../icons/XIcon";
import { DrawerCart } from "../../components/Cart/DrawerCart";

export const NavBar = () => {
  const links = ["Catalogo", "Contacto", "Sobre nosotros"];
  const [display, setDisplay] = useState("none");

  return (
    <Flex mt="auto" justify="space-around" bgColor="secondary" minH="10vh">
      <Flex
        minW="90vw"
        fontSize="xl"
        mx="2rem"
        justify="space-between"
        align="center"
      >
        <NavLink to="/">
          <Image src="/assets/img3.jpg" alt="logo-focus"></Image>
        </NavLink>

        {/* <Flex gap={2}>
          <DrawerCart />
        </Flex> */}

        {/* <Flex
          fontSize={["sm", "sm", "sm", "lg"]}
          p={4}
          gap="1.4rem"
          display={["none", "none", "flex", "flex"]}
        >
          <NavLinksList links={links} setDisplay={setDisplay} />
        </Flex>

        <Flex
          gap={3}
          fontSize="2xl"
          width="100vw"
          height="100vh"
          p={6}
          bg={"white"}
          zIndex={20}
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
          display={display}
        > 
          <HStack justify="end" align>
            <IconButton icon={<XIcon />} onClick={() => setDisplay("none")} />
          </HStack>
          <NavLinksList links={links} setDisplay={setDisplay} />
        </Flex>

        <Flex gap={2}>
          <IconButton
            bg={"primary"}
            display={["flex", "flex", "none", "none"]}
            onClick={() => setDisplay("flex")}
          >
            <BarsIcon />
          </IconButton>
        </Flex>*/}
      </Flex>
    </Flex>
  );
};

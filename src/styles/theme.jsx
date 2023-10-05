import { extendTheme } from "@chakra-ui/react";

export const MyNewTheme = extendTheme({
  colors: {
    primary: "#7c9520",
    // secondary: "#ecf2f6",
    secondary: "#f3e6d4",
  },
  fonts: {
    body: "roboto",
  },
  components: {
    Button: {
      // Estilos globales para todos los botones
      baseStyle: {
        letterSpacing: "0.06em",
        fontWeight: "500",
      },
      // Estilos para variantes de botón específicas
      variants: {
        solid: {
          bg: "primary",
          color: "white",
          _hover: { bg: "secondary", color: "white" },
        },
        ghost: {
          color: "primary",
          _hover: { bg: "secondary", color: "white" },
        },
        // Agrega más variantes según tus necesidades
      },
    },
    Heading: {
      // Estilos globales para todos los botones
      baseStyle: {
        // letterSpacing: "0.06em",
        // fontWeight: "500",
        textAlign: "center",
        bg: "primary",
        color: "white",
        my: 3,
        p: 3,
      },
    },
    Text: {
        baseStyle: {
            fontSize:'lg'
        }
    }
  },
  styles: {
    global: {
      body: {
        fontFamily: "body",
        fontWeight: "normal",
        letterSpacing: "0.06em",
      },
    },
  },
});

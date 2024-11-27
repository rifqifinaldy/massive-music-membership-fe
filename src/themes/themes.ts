import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/plus-jakarta-sans";

const colors = {
  primary: {
    0: "#e1f5fa",
    100: "#b3e4f0",
    200: "#85d3e5",
    300: "#57c2db",
    400: "#29b0d1",
    500: "#118ab2",
    600: "#0e7191",
    700: "#0a586f",
    800: "#073f4d",
    900: "#04262c",
  },
  brand: {
    500: "#9d0208",
  },
  secondary: {
    0: "#d9e4e7",
    100: "#b3c9d0",
    200: "#8dadb9",
    300: "#6792a1",
    400: "#41768a",
    500: "#1db954",
    600: "#062f3d",
    700: "#05242e",
    800: "#04191f",
    900: "#020d0f",
  },
  green: {
    0: "#e6f8ec",
    100: "#c1eecd",
    200: "#9ce4af",
    300: "#77da90",
    400: "#52d072",
    500: "#1db954",
    600: "#189347",
    700: "#136d39",
    800: "#0e472b",
    900: "#09211d",
  },
  yellow: {
    0: "#fff8e1",
    100: "#ffecb3",
    200: "#ffe085",
    300: "#ffd457",
    400: "#ffc829",
    500: "#ffd166",
    600: "#cca952",
    700: "#99813d",
    800: "#665829",
    900: "#332c14",
  },
  red: {
    0: "#fce7ed",
    100: "#f8c3d0",
    200: "#f49fb3",
    300: "#f07b96",
    400: "#ec5779",
    500: "#9d0208",
    600: "#bf3859",
    700: "#8f2a43",
    800: "#601b2c",
    900: "#300d16",
  },
  neutral: {
    0: "#ffffff",
    100: "#e6e6e6",
    200: "#cccccc",
    300: "#b3b3b3",
    400: "#999999",
    500: "#121212",
    600: "#0f0f0f",
    700: "#0c0c0c",
    800: "#090909",
    900: "#050505",
  },
};

const breakpoints = {
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const theme = extendTheme({
  colors,
  breakpoints,
  fonts: {
    heading: `'Plus Jakarta Sans Variable', sans-serif`,
    body: `'Plus Jakarta Sans Variable', sans-serif`,
  },
  styles: {
    global: () => ({
      body: {
        backgroundColor: colors["neutral"][500],
        fontSize: {
          base: "14px",
          md: "16px",
        },
        color: colors["neutral"][0],
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontSize: "16px",
        letterSpacing: "0.03em",
        px: "100px",
        py: 4,
        fontWeight: 500,
      },
    },
    FormLabel: {
      baseStyle: {
        fontWeight: 500,
        fontSize: "16px",
      },
    },
  },
});

export default theme;

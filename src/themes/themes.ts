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
  secondary: {
    0: "#d9e4e7",
    100: "#b3c9d0",
    200: "#8dadb9",
    300: "#6792a1",
    400: "#41768a",
    500: "#073b4c",
    600: "#062f3d",
    700: "#05242e",
    800: "#04191f",
    900: "#020d0f",
  },
  success: {
    0: "#d5faec",
    100: "#abf5d9",
    200: "#80f0c7",
    300: "#56ebb4",
    400: "#2be6a1",
    500: "#06d6a0",
    600: "#05ab80",
    700: "#048060",
    800: "#035540",
    900: "#022a20",
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
    500: "#ef476f",
    600: "#bf3859",
    700: "#8f2a43",
    800: "#601b2c",
    900: "#300d16",
  },
  neutral: {
    0: "#ffffff",
    100: "#f9fbfc",
    200: "#f3f7f8",
    300: "#edf2f4",
    400: "#e7eef0",
    500: "#edf6f9",
    600: "#bcc4c7",
    700: "#8d9396",
    800: "#5e6264",
    900: "#2f3132",
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
        backgroundColor: colors["neutral"][900],
        fontSize: {
          base: "14px",
          md: "16px",
        },
        color: colors["neutral"][100],
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

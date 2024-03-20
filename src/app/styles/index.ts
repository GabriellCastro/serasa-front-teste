import { extendTheme } from "@chakra-ui/react";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

import { Textarea } from "./components/Textarea";

import { fontSizes } from "./foundations/fontSizes";
import { fonts } from "./foundations/fonts";
import { colors } from "./foundations/colors";
import { styles } from "./styles";

const config = {
  initialColorMode: "Dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  components: {
    Button,
    Input,
    Textarea,
  },
  fontSizes,
  colors,
  styles,
  fonts,
  shadows: {
    outline: "none",
  },
});

export default theme;

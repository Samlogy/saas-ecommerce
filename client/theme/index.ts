import { extendTheme } from "@chakra-ui/react";
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';

import { colors, breakpoints, fonts } from "./utilities";

const theme = extendTheme({
    colors,
    breakpoints,
    fonts,
    components: {
        Steps
    },
});


export default theme;
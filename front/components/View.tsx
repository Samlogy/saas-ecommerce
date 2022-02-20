import React, { FC } from "react";
import { Box } from "@chakra-ui/react"

const View: FC = ({ children, cond, ...rest }: { children: React.ReactNode, cond: boolean, rest?: React.ReactNode }) => {
    if(cond) return(
        <Box {...rest}>
            { children }
        </Box>
    )
    else return null;
}

export default View;
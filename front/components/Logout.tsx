
import React, { FC, useState } from "react";
import { Button, useColorModeValue } from "@chakra-ui/react"
import { useRouter } from "next/router";

import { IconLogout } from "../public/icons"
import { useAuth } from "../store";

const Logout: FC = () => {
    const [loggedOut, setLoggedOut] = useState(false);

    const notLogged = useAuth((state: any) => state.notLogged);
    const router = useRouter();

    const textColor = useColorModeValue('black', 'gray.100')
    const textHoverColor = useColorModeValue('gray.100', 'white')

    const logging_out = () => {
        notLogged();
        router.push('/login')
    };


    if ( loggedOut ) logging_out();

    return(
        <Button leftIcon={<IconLogout />} variant="ghost" color={textColor}
            fontWeight="400" mr="0rem" _hover={{ border: "none", color: textHoverColor }}
            onClick={() => setLoggedOut(true)}>
            Logout
        </Button>
    )
}

export default Logout;
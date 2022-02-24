
import React, { FC, useState } from "react";
import { Button } from "@chakra-ui/react"

import { IconLogout } from "../public/icons"

const Logout: FC = () => {
    const [loggedOut, setLoggedOut] = useState(false);

    const logging_out = () => {
        // history.push('/login')
        console.log('logout')
    };


    if ( loggedOut ) logging_out();

    return(
        <Button leftIcon={<IconLogout />} variant="ghost" 
            fontWeight="400" mr="0rem" _hover={{bg: "invisible", border: "none"}}
            onClick={() => setLoggedOut(true)}>
            Logout
        </Button>
    )
}

export default Logout;
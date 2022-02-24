import React, { FC } from "react";
import { Flex, Box, Select, Input } from "@chakra-ui/react"


const Filter: FC = () => {
    return(
        <Flex flexDir="row" flexWrap="wrap" justifyContent="space-between" alignItems="flex-start" my="1.5rem">
            <Select w="6rem" />
            <Input placeholder="Search product ..." w="18rem" />
            <Select w="6rem" />
        </Flex>
    )
}

export default Filter;
import { Container, Flex } from "@chakra-ui/react";
import React from "react";

interface ILayout {
  children: React.ReactNode;
  isHeaderVisible?: boolean;
  isFooterVisible?: boolean;
  rest?: any;
}

export default function Layout({
  children,
  isHeaderVisible,
  isFooterVisible,
  ...rest
}: ILayout) {
  return (
    <Flex flexDir="column" {...rest}>
      {/* {isHeaderVisible && <NavBar />} */}

      <Container
        maxW="1024px"
        minHeight="calc(100vh - 100px)"
        p="2rem 1.5rem"
        borderRadius="5px"
      >
        {children}
      </Container>

      {/* {isFooterVisible && <Footer />} */}
    </Flex>
  );
}

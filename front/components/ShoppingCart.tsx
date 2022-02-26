import {
    Flex,
    Button,
    Image,
    useDisclosure,
    useColorModeValue,
    Text, Divider, IconButton, Box,
    Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, DrawerCloseButton
  } from '@chakra-ui/react';
  import { FaTrash } from "react-icons/fa";
  import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
  import React, { useState } from "react";

  import { View } from "../components";

  const  data = [
    {
      img: 'https://bit.ly/dan-abramov',
      name: "Throwback Hip Ba",
      quantity: 1,
      price: 90.00
    },
    {
      img: 'https://bit.ly/dan-abramov',
      name: "Throwback Hip Ba",
      quantity: 1,
      price: 90.00
    },
    {
      img: 'https://bit.ly/dan-abramov',
      name: "Throwback Hip Ba",
      quantity: 1,
      price: 90.00
    },
    {
      img: 'https://bit.ly/dan-abramov',
      name: "Throwback Hip Ba",
      quantity: 1,
      price: 90.00
    }
  ];

const ShoppingCart = ({ isOpen, onClose }: { isOpen: any, onClose: any }) => {

    const onRemoveItem = () => {
      console.log('remove item')
    }
  
    return(
        <Drawer isOpen={isOpen} placement='right' size="sm" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader> Shopping Cart </DrawerHeader>

            <DrawerBody>
              <View cond={data.length > 0}>
                { data.map((el: any) => <CartItem data={el} onRemoveItem={onRemoveItem} />) }
                <Divider />

                <Flex justifyContent={'space-between'} mt="1rem">
                  <Text fontWeight="600"> Total </Text>
                  <Text fontWeight="600"> $262.00 </Text>
                </Flex>
              </View>
              <View cond={data.length === 0}>
                <Text> There is not product in your shopping cart </Text>
              </View>
            </DrawerBody>

            <DrawerFooter display="flex" flexDir="column">
              <Divider my="1rem" />
              <Text mb="1rem"> Shipping and taxes calculated at checkout. </Text>
              <Button w="full" colorScheme='blue'> Checkout </Button>
              <Text display="flex" mt="1rem"> or 
                <Text textColor="blue.600" ml="1rem" _hover={{ cursor: "pointer" }}> Continue Shopping → </Text> 
              </Text>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
    )
}

export default ShoppingCart;

const CartItem = ({ data, onRemoveItem }: { data: any, onRemoveItem: any }) => {
  const [quantity, setQuantity] = useState(data.quantity);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  return(
    <>
      <Flex justifyContent="space-between" mt="1rem">
        <Image boxSize='100px' src={data.img} borderRadius="5px" borderColor="gray" alt='Product' />

        <Flex flexDir="column">
          <Text fontSize="1rem" fontWeight="600"> {data.name} </Text> 
          <Text> Salmon </Text>
          <Flex justifyContent={'space-evenly'} alignItems='center'>
            <IconButton icon={<AiOutlinePlus />} aria-label='increment' onClick={() => handleQuantity('inc')} />
            <Text my="auto"> {quantity} </Text>
            <IconButton icon={<AiOutlineMinus />} aria-label='descrement' onClick={() => handleQuantity('dec')} />
          </Flex>
        </Flex>

        <Flex flexDir="column" justifyContent="space-between">
          <Text fontSize="1rem" fontWeight="600"> ${data.price} </Text>     
          <Box as="span" _hover={{ cursor: "pointer" }}> <FaTrash size={16} color="#60666f" onClick={() => onRemoveItem()} /> </Box>
        </Flex>
      </Flex>

      <Divider mt="1rem" mx="auto" w="95%" />
    </>
  )
}
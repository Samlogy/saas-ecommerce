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
  import { useShoppingCart } from "../store";

  const  products = [
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

const ShoppingCart = () => {
  const isVisible = useShoppingCart((state: any) => state.isVisible)
  const total = useShoppingCart((state: any) => state.total)
  const handleVisibility = useShoppingCart((state: any) => state.handleVisibility)
  const removeAll = useShoppingCart((state: any) => state.removeAll)

  
    return(
        <Drawer isOpen={isVisible} placement='right' size="sm" onClose={() => handleVisibility()}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader> Shopping Cart </DrawerHeader>

            <DrawerBody>
              <View cond={products.length > 0}>
                <Text textAlign={'right'} color='blue.500' fontSize='.9rem' mb='1rem' 
                    _hover={{ cursor: 'pointer', textDecor: 'underline' }}
                    onClick={() => removeAll()}> Remove all </Text>
                { products.map((product: any) => <CartItem data={product} />) }
                <Divider />

                <Flex justifyContent={'space-between'} mt="1rem">
                  <Text fontWeight="600"> Total </Text>
                  <Text fontWeight="600"> ${total} </Text>
                </Flex>
              </View>

              <View cond={products.length === 0}>
                <Text fontSize="1rem" color="gray.500"> There is not product in your shopping cart </Text>
              </View>
            </DrawerBody>

            <DrawerFooter display="flex" flexDir="column">
              <Divider my="1rem" />
              <Text mb="1rem" fontSize=".9rem" color="gray.500"> Shipping and taxes calculated at checkout. </Text>
              <Button w="full" colorScheme='blue'> Checkout </Button>
              <Text display="flex" mt="1rem"> or 
                <Text textColor="blue.600" ml="1rem" fontSize=".9rem" _hover={{ cursor: "pointer" }}> Continue Shopping → </Text> 
              </Text>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
    )
}

export default ShoppingCart;

const CartItem = ({ data }: { data: any }) => {
  const [quantity, setQuantity] = useState(data.quantity);

  const increment = useShoppingCart((state: any) => state.increment)
  const decrement = useShoppingCart((state: any) => state.decrement)
  const removeOne = useShoppingCart((state: any) => state.removeOne)

  const handleQuantity = (type: string) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
      decrement(data.id)
    } else {
      setQuantity(quantity + 1);
      increment(data.id)
    }
  };

  const onRemoveItem = () => {
    console.log('remove item')
    removeOne(data.id)
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
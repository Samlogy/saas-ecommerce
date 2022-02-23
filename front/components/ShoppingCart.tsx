import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Image,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Text, Divider, 
    Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, DrawerCloseButton
  } from '@chakra-ui/react';

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
  ]

const ShoppingCart = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const onRemoveItem = () => {
      console.log('remove item')
    }
  
    return(
      <>
        <Button colorScheme='teal' onClick={onOpen}>
            Open
        </Button>
        <Drawer isOpen={isOpen} placement='right' size="sm" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader> Shopping Cart </DrawerHeader>

            <DrawerBody>
              <View cond={data.length > 0}>
                { data.map((el: any) => <CartItem data={el} onRemoveItem={onRemoveItem} />) }
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
      </>
    )
}

export default ShoppingCart;

const CartItem = ({ data, onRemoveItem }: { data: any, onRemoveItem: any }) => {

  return(
    <>
      <Flex justifyContent="space-between" mt="1rem">
        <Image boxSize='100px' src={data.img} borderRadius="5px" borderColor="gray" alt='Product' />

        <Flex flexDir="column">
          <Text fontSize="1rem" fontWeight="600"> {data.name} </Text> 
          <Text> Salmon </Text>
          <Text mt="1.7rem"> Qty {data.quantity} </Text> 
        </Flex>

        <Flex flexDir="column" justifyContent="space-between">
          <Text fontSize="1rem" fontWeight="600"> ${data.price} </Text> 
          <Text textColor="blue.600" _hover={{ cursor: "pointer" }} onClick={() => onRemoveItem()}> Remove </Text>
        </Flex>
      </Flex>

      <Divider mt="1rem" mx="auto" w="95%" />
    </>
  )
}
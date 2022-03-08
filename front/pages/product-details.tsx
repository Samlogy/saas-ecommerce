import {
    Box,
    IconButton,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
  } from '@chakra-ui/react';
  import { MdLocalShipping } from 'react-icons/md';
  import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
  import React, { useState } from "react";

  import { Layout, Carousel, View } from "../components"

  
  const data = {
    name: "Automatic Watch",
    img: [
      'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
      'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
      'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    ],
    price: "$350.00 USD",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore",
    description2: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut laboreLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore",
    features: ['Chronograph', 'anti-magnetic', 'Tachymeter', 'Chronometer', 'Small seconds'],
    details: [
      {
        key: "Between lugs",
        value: "20 mm"
      },
      {
        key: "Bracelet",
        value: "leather strap"
      },
      {
        key: "Case",
        value: "Steel"
      },
      {
        key: "Case diameter",
        value: "42 mm"
      },
      {
        key: "Case diameter",
        value: "42 mm"
      },
      {
        key: "Case diameter",
        value: "42 mm"
      },
    ],
    delivery: "2-3 business days"
  };

  export default function productDetails() {
    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (type) => {
      if (type === "dec") {
        quantity > 1 && setQuantity(quantity - 1);
      } else {
        setQuantity(quantity + 1);
      }
    };

    return (
    <Layout isHeaderVisible isFooterVisible>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py={{ base: 18, md: 24 }}>
          {/* <Flex> */}
            <View cond={data.img.length === 0}>
              <Text> No Images </Text>
            </View>

            <View cond={data.img.length === 1}>
              <Image rounded={'md'} alt={'product image'} src={data.img[0]} fit={'cover'} align={'center'} w={'100%'} h={{ base: '100%', sm: '400px', lg: '500px' }} />
            </View>

            <View cond={data.img.length > 1}>
              <Carousel slides={data.img} />  
            </View>
          {/* </Flex> */}
          
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {data.name}
              </Heading>
              <Text color={useColorModeValue('gray.900', 'gray.400')} fontWeight={300} fontSize={'2xl'}>
                {data.price}
              </Text>
            </Box>
  
            <Stack spacing={{ base: 4, sm: 6 }} direction={'column'}
              divider={<StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />}>

              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text color={useColorModeValue('gray.500', 'gray.400')} fontSize={'2xl'} fontWeight={'300'}>
                  {data.description}
                </Text>
                <Text fontSize={'lg'}>
                {data.description2} 
                </Text>
              </VStack>

              <Box>
                <Text fontSize={{ base: '16px', lg: '18px' }} color="blue.500" fontWeight={'500'} textTransform={'uppercase'} mb={'4'}>
                  Features
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    { data.features.map((el: any) => <ListItem> {el} </ListItem>) }
                  </List>
                </SimpleGrid>
              </Box>

              <Box>
                <Text fontSize={{ base: '16px', lg: '18px' }} color="blue.500" fontWeight={'500'} textTransform={'uppercase'} mb={'4'}>
                  Product Details
                </Text>
  
                <List spacing={2}>
                  { data.details.map((el: any) =>
                      <ListItem>
                        <Text as={'span'} fontWeight={'bold'}>
                          {el.key}:
                        </Text>{' '}
                        {el.value}
                      </ListItem>
                    )
                  }
                </List>
              </Box>
            </Stack>

            <Flex flexDir="row-reverse" justifyContent={'space-between'}>
              <Flex justifyContent={'space-evenly'} alignItems='center' w="150px" mt={8}>
                <IconButton icon={<AiOutlinePlus />} aria-label='increment' onClick={() => handleQuantity('inc')} />
                <Text my="auto"> {quantity} </Text>
                <IconButton icon={<AiOutlineMinus />} aria-label='descrement' onClick={() => handleQuantity('dec')} />
              </Flex>
    
              <Button w="200px" mt={8} size={'lg'} py={'7'} bg={"blue.500"} color={"#fff"} textTransform={'uppercase'}
                _hover={{ transform: 'translateY(2px)', boxShadow: 'lg' }}>
                Add to cart
              </Button>
            </Flex>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping size={20} />
              <Text> {data.delivery} delivery </Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Layout>
    );
  }
import {
    Box,
    chakra,
    Container,
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

  import Layout from "../components/Layout"

  
  
  export default function productDetails() {
    const data = {
      name: "Automatic Watch",
      img: "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080",
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

    return (
    <Layout isHeaderVisible isFooterVisible>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py={{ base: 18, md: 24 }}>
          <Flex>
            <Image rounded={'md'} alt={'product image'}
              src={data.img} fit={'cover'} align={'center'} w={'100%'} h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          
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
  
            <Button w="200px" mx="auto" mt={8} size={'lg'} py={'7'} bg={"blue.500"} color={"#fff"} textTransform={'uppercase'}
              _hover={{ transform: 'translateY(2px)', boxShadow: 'lg' }}>
              Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping size={20} />
              <Text> {data.delivery} delivery </Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Layout>
    );
  }
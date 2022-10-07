import {
  Box,
  Checkbox,
  Divider,
  Flex,
  FormLabel,
  GridItem,
  Heading,
  HStack,
  Image,
  Radio,
  RadioGroup,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Elements } from '@stripe/react-stripe-js'
import { MdOutlineLocalShipping, MdOutlinePayment } from 'react-icons/md'
import { RiBillLine } from 'react-icons/ri'

import {
  ErrorMessage,
  FeedBack,
  InputField,
  Layout,
  MultiStepForm,
  StripeForm,
  TextField
} from '../components'
import stripePromise from '../lib/stripe'
import { useShoppingCartStore } from '../store'
import { checkoutSchema } from '../lib/validation'

const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc: 'https://fonts.googleapis.com/css?family=Roboto'
    }
  ]
}

const NBR_STEPS = 4

export default function Checkout() {
  const [feedBack, setFeedBack] = useState({
    isOpen: false,
    type: null
  })
  const [step, setStep] = useState<number>(1)

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    resolver: yupResolver(checkoutSchema[step]),
    mode: 'all'
  })

  const router = useRouter()

  const onSubmit = async (data: any) => {
    console.log(data)
    // call payment api
    const response = true
    if (response) {
      setFeedBack({
        type: 'success',
        isOpen: true
      })
      return
    }
    setFeedBack({
      type: 'error',
      isOpen: true
    })
  }

  //console.log(checkoutSchema[step])
  /*
  useEffect(() => {
    // redirect to /products after 5s
    if (feedBack.type === 'success') {
      setTimeout(() => {
        router.push('/products')
      }, 5000)
    }
  }, [feedBack?.type])
  */

  // fullName, email, phone, address, zipCode, isAddressShipping, shipping address (Billing Address)
  // --> if logged (push stored data into the form)
  // radio buttons (options), discount code --> (form apply) (Shipping Method)
  // stripe.js / paypal form (Payment)
  // feed back --> redirect after 5s to /products

  const shippingMethods = ['standard', 'express'] // get it from api (to get more customized fields)

  const steps = {
    1: {
      label: 'Billing Address',
      icon: RiBillLine,
      content: <BillingAddress errors={errors} register={register} />
    },
    2: {
      label: 'Shipping Method',
      icon: MdOutlineLocalShipping,
      content: (
        <ShippingMethod errors={errors} register={register} shippingMethods={shippingMethods} />
      )
    },
    3: {
      label: 'Review Order',
      icon: MdOutlineLocalShipping,
      content: <ReviewOrder />
    },
    4: {
      label: 'Payment',
      icon: MdOutlinePayment,
      content: <Payment setFeedBack={setFeedBack} />
    }
  }

  return (
    <Layout isHeaderVisible isFooterVisible>
      <Flex flexDir="column" justify={'space-between'}>
        <Heading fontSize="1.5rem" mb="2rem" textTransform={'uppercase'} mr="auto" w="full">
          Checkout
        </Heading>

        <MultiStepForm
          steps={steps}
          nbrSteps={NBR_STEPS}
          watch={watch}
          handleSubmit={handleSubmit}
          isValid={isValid}
          setStep={setStep}
          currentStep={step}
        />

        <FeedBack
          isOpen={feedBack?.isOpen}
          onClose={() =>
            setFeedBack(prev => {
              return {
                ...prev,
                isOpen: false
              }
            })
          }
          type={feedBack?.type}
        />
      </Flex>
    </Layout>
  )
}

function BillingAddress({ errors, register }: { errors: any; register: any }) {
  const bgColor = useColorModeValue('gray_9', 'gray_2')
  const inputBgColor = useColorModeValue('white', 'gray_3')
  return (
    <Flex
      m="3rem 0 1rem 0"
      flexDir="column"
      align="center"
      justify="center"
      borderRadius="10px"
      boxShadow="md"
      p={['1.5rem 1rem', '1.5rem 2rem', '', '']}
      w={['100%', '30rem']}
      mx="auto"
      bg={bgColor}
    >
      <InputField
        register={register}
        errors={errors}
        label="Full Name"
        name="fullName"
        placeholder="Full Name"
        autocomplete="on"
      />
      <TextField
        register={register}
        errors={errors}
        name="address"
        label="Address"
        placeholder="Address"
      />
      <InputField
        register={register}
        errors={errors}
        name="email"
        placeholder="Email"
        label="Email"
      />
      <InputField
        register={register}
        errors={errors}
        name="phone"
        placeholder="phone"
        label="phone"
      />
      <InputField
        register={register}
        errors={errors}
        name="zipCode"
        placeholder="Zip Code"
        label="Zip Code"
      />
      <Checkbox
        //defaultChecked={false}
        //defaultValue={['yes']}
        // onChange={handleCheckbox}
        //value={isShipAddress}
        colorScheme={'green'}
        bg={inputBgColor}
        w="20em"
        mb="1em"
        p=".5em"
        borderRadius="5px"
        isInvalid={errors['isShipAddress'] && register ? true : false}
        {...register('isShipAddress')}
        name="isShipAddress"
      >
        Ship to the same address
      </Checkbox>
      <InputField
        register={register}
        errors={errors}
        name="shippingAddress"
        placeholder="Shipping Address"
        label="Shipping Address"
        //  isDisabled={isShipAddress ? true : false}
      />
    </Flex>
  )
}
function ShippingMethod({
  errors,
  register,
  shippingMethods
}: {
  errors: any
  register: any
  shippingMethods: any
}) {
  const bgColor = useColorModeValue('gray_9', 'gray_2')
  const inputBgColor = useColorModeValue('white', 'gray_3')
  // receive totalPrice as default (then when valid discountCode is entred re-compute the newPrice)
  const newPrice = 1000
  return (
    <Flex
      m="3rem 0 1rem 0"
      flexDir="column"
      align="center"
      justify="center"
      borderRadius="10px"
      boxShadow="md"
      p={['1.5rem 1rem', '1.5rem 2rem', '', '']}
      w={['100%', '30rem']}
      mx="auto"
      bg={bgColor}
    >
      <RadioGroup
        //  onChange={setValue}
        // value={value}
        colorScheme="green"
        mb="1em"
        as={Flex}
        flexDir="column"
        w="20em"
        bg={inputBgColor}
        borderRadius="10px"
        p=".5em"
      >
        <FormLabel> Select Shipping Method </FormLabel>
        {shippingMethods?.map((el: any, idx: number) => (
          <Radio
            value={el}
            key={idx}
            isInvalid={errors['shippingMethod'] && register ? true : false}
            {...register('shippingMethod')}
            name="shippingMethod"
            textTransform="capitalize"
            bg={inputBgColor}
          >
            {el}
          </Radio>
        ))}
        {register && <ErrorMessage error={errors['shippingMethod']?.message} />}
      </RadioGroup>
      <InputField
        register={register}
        errors={errors}
        label="Discount Code"
        name="discountCode"
        placeholder="Discount Code"
      />
      <Box w="20em">
        <Box as="span"> New Price: </Box>
        <Box as="span"> {newPrice} </Box>
      </Box>
    </Flex>
  )
}
function Payment({ setFeedBack }: { setFeedBack: any }) {
  const bgColor = useColorModeValue('gray_9', 'gray_2')
  const price = '25£' // get price to pay
  return (
    <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
      <Flex
        m="3rem 0 1rem 0"
        flexDir="column"
        align="center"
        justify="center"
        borderRadius="10px"
        boxShadow="md"
        p={['1.5rem 1rem', '1.5rem 2rem', '', '']}
        w={['100%', '30rem']}
        mx="auto"
        bg={bgColor}
      >
        <StripeForm price={price} setFeedBack={setFeedBack} />
      </Flex>
    </Elements>
  )
}

function ReviewOrder() {
  return (
    <Flex
      justify={['center', '', 'space-between', 'space-around']}
      align="start"
      flexWrap="wrap"
      py={[0, 10, 20]}
      w={['100%']}
    >
      <Details />
      <Cart />
    </Flex>
  )
}

const Cart = () => {
  const bgColor = useColorModeValue('gray_9', 'gray_2')
  const secondaryTextColor = useColorModeValue('gray_3', 'gray_6')

  // computing all these fct get data from store (product store)

  const products = useShoppingCartStore((state: any) => state.products)

  const computeSubTotal: number = useMemo(() => {
    return 119
  }, [])
  const computeShippingFee: number = useMemo(() => {
    return 100
  }, [])
  const computeTaxes: number = useMemo(() => {
    const TVA = 0.1
    const newPrice = computeSubTotal * TVA
    return newPrice
  }, [])
  const computeTotal: number = useMemo(() => {
    return computeSubTotal + computeShippingFee + computeTaxes
  }, [])
  return (
    <VStack
      w={['100%', '80%', '30em']}
      align="flex-start"
      h="full"
      p={10}
      spacing={6}
      bg={bgColor}
      m=".5em"
      borderRadius="10px"
    >
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="xl">Your cart</Heading>
      </VStack>

      <Flex flexDir="column" alignItems="stretch" w="full">
        {products.map((product: any, idx: number) => (
          <Flex justify="space-between" key={idx} my=".5em">
            <Image
              boxSize="100px"
              src={product?.images[0]}
              borderRadius="5px"
              borderColor="gray"
              alt="Product"
            />
            <Flex flexDir="column" justify="flex-start" align="start">
              <Text fontSize="1rem" fontWeight="600" textAlign={'center'} mb=".5rem">
                {product?.name}
              </Text>
              <Text fontSize="1rem" fontWeight="600" textAlign={'center'} mb=".5rem">
                {`x ${product?.quantity}`}
              </Text>

              <Flex justifyContent={'space-evenly'} alignItems="center">
                <Box
                  as="span"
                  fontStyle="italic"
                  textDecor={product.discount && 'line-through'}
                  fontSize=".9rem"
                >
                  {`£${product?.quantity * product?.price}`}
                </Box>
                <Box as="span" fontWeight="600" fontSize=".9rem">
                  {product.discount && `£ ${product?.quantity * product?.price * product.discount}`}
                </Box>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>

      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm"> {`£${computeSubTotal}`} </Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size="sm">{`£${computeShippingFee}`}</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Taxes (estimated)</Text>
          <Heading size="sm">{`£${computeTaxes}`}</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent="space-between" w="full">
        <Text color={secondaryTextColor}>Total</Text>
        <Heading size="lg">{`£${computeTotal}`}</Heading>
      </HStack>
    </VStack>
  )
}
const Details = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 })

  const bgColor = useColorModeValue('gray_9', 'gray_2')
  const secondaryTextColor = useColorModeValue('gray_3', 'gray_6')

  // get all data (labels, values) --> react hook form (getValues(...labels))
  //  const values:string = getValues(...labels)

  const labels = [
    'full name',
    'email',
    'phone',
    'address',
    'zip code',
    'shipping address',
    'shipping method'
  ]
  const values = [
    'full name',
    'email',
    'phone',
    'address',
    'zip code',
    'shipping address',
    'shipping method'
  ]
  return (
    <VStack
      w={['100%', '80%', '30em']}
      align="flex-start"
      h="full"
      p={10}
      spacing={10}
      bg={bgColor}
      mx=".5em"
      borderRadius="10px"
    >
      <VStack spacing={2} alignItems="flex-start">
        <Heading size="xl">Your details</Heading>
        <Text>If you already have an account, click here to log in.</Text>
      </VStack>

      <SimpleGrid columns={1} rowGap={5} w="full">
        {labels.map((el, idx) => (
          <GridItem key={idx} colSpan={colSpan} textTransform="capitalize">
            <Box as="span"> {labels[idx]}: </Box>
            <Box as="span" fontStyle="italic" color={secondaryTextColor}>
              {values[idx]}
            </Box>
          </GridItem>
        ))}
      </SimpleGrid>
    </VStack>
  )
}

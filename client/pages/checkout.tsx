import { Box, Flex, Heading, Button, Radio, RadioGroup, useColorModeValue } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BsDiscord } from 'react-icons/bs'

import { InputField, Layout, StepForm, TextField, CustomTable } from '../components'
import { checkoutchema } from '../lib/validation'
import heroImage from '../public/images/home.png'
import productImage from '../public/images/product.png'

export default function Checkout() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(checkoutchema)
  })

  const onSubmit = async (data: any) => {
    console.log(data)
    console.log('submitted !!!')
  }
  //fullName address city postalCode country
  // payment Method
  // payment form fields

  const steps = [
    {
      label: 'Shipping Address',
      icon: BsDiscord,
      // description: 'description1 ',
      content: <ShippingAddressForm errors={errors} register={register} />
    },
    {
      label: 'Payment Method',
      icon: BsDiscord,
      // description: 'description1 ',
      content: <PaymentMethod errors={errors} register={register} />
    },
    {
      label: 'Payment Form',
      icon: BsDiscord,
      // description: 'description1 ',
      content: <PaymentForm errors={errors} register={register} />
    },

    {
      label: 'Place Order',
      icon: BsDiscord,
      //description: 'description 3',
      content: <PlaceOrder />
    }
  ]

  return (
    <Layout isHeaderVisible isFooterVisible>
      <Flex flexDir="column" justify={'space-between'}>
        <Heading fontSize="1.5rem" mb="2rem" textTransform={'uppercase'} mr="auto" w="full">
          Checkout
        </Heading>
        <StepForm
          steps={steps}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          trigger={trigger}
          isSubmitting={isSubmitting}
        />
      </Flex>
    </Layout>
  )
}

function PlaceOrder() {
  const itemBgColor = useColorModeValue('gray_8', 'gray_2')
  function onPlaceOrder() {
    console.log('order placed !')
  }
  const headers = ['', 'image', 'quantity', 'price', 'discount']
  const data = [
    {
      id: 1,
      name: 'Automatic Watch',
      images: [heroImage.src, productImage.src, heroImage.src, productImage.src],
      quantity: 1,
      price: 350,
      discount: 0.5,
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
      delivery: '2-3 business days',
      reviews: 34,
      rate: 4
    }
  ]
  const placeOrderData = {
    shippingAddress:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut perferendis sint cumque commodi culpa dolorum ipsum sequi possimus voluptates',
    paymentMethod: 'paypal'
  }
  return (
    <Flex flexDir="column" align="center">
      <Heading fontSize="1.5rem" mb="2rem">
        Place Order
      </Heading>
      <Flex>
        <Flex flexDir="column">
          <Flex flexDir="column" justify="space-between" mb="1.5rem">
            <Box fontWeight="600" fontSize="1.1rem">
              Shipping Address
            </Box>
            <Box> {placeOrderData.shippingAddress} </Box>
          </Flex>
          <Flex flexDir="column" justify="space-between" mb="1.5rem">
            <Box fontWeight="600" fontSize="1.1rem">
              Payment Method
            </Box>
            <Box> {placeOrderData.paymentMethod} </Box>
          </Flex>
          <Flex flexDir="column" justify="space-between" mb="1.5rem">
            <Box fontWeight="600" fontSize="1.1rem">
              Products Details
            </Box>
            <CustomTable headers={headers} data={data} />
          </Flex>
        </Flex>

        <Flex flexDir="column" p="1rem" bg={itemBgColor} borderRadius="10px" w="14rem">
          <Heading fontSize="1.1rem" mb="2rem">
            Order Summary
          </Heading>
          <Flex justify="space-between">
            <Box as="span">Items:</Box>
            <Box as="span">0$</Box>
          </Flex>
          <Flex justify="space-between">
            <Box as="span">Tax:</Box>
            <Box as="span">0$</Box>
          </Flex>
          <Flex justify="space-between">
            <Box as="span">Shipping:</Box>
            <Box as="span">0$</Box>
          </Flex>
          <Flex justify="space-between">
            <Box as="span">Total:</Box>
            <Box as="span">0$</Box>
          </Flex>
          <Button colorScheme="green" variant="solid" mt=".5rem" onClick={() => onPlaceOrder()}>
            Place Order
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
function ShippingAddressForm({ errors, register }: { errors: any; register: any }) {
  const itemBgColor = useColorModeValue('gray_8', 'gray_2')
  return (
    <Flex flexDir="column" align="center" m="3rem 0 1rem 0">
      <InputField
        register={register}
        errors={errors}
        label="Full Name"
        name="fullName"
        placeholder="Full Name"
        bg={itemBgColor}
        borderRadius="10px"
      />
      <TextField
        register={register}
        errors={errors}
        name="address"
        label="Address"
        placeholder="Address"
        bg={itemBgColor}
        borderRadius="10px"
      />
      <InputField
        register={register}
        errors={errors}
        name="city"
        placeholder="City"
        label="City"
        bg={itemBgColor}
        borderRadius="10px"
      />
      <InputField
        type="number"
        register={register}
        errors={errors}
        name="postaleCode"
        placeholder="Postale Code"
        label="Postale Code"
        bg={itemBgColor}
        borderRadius="10px"
      />
      <InputField
        register={register}
        errors={errors}
        name="country"
        placeholder="Country"
        label="Country"
        bg={itemBgColor}
        borderRadius="10px"
      />
    </Flex>
  )
}

function PaymentMethod({ errors, register }: { errors: any; register: any }) {
  const [value, setValue] = useState('')
  return (
    <Flex flexDir="column" align="center" m="3rem 0 1rem 0">
      <Heading fontSize="1.3rem" mb="1rem">
        What's your payment mean ?
      </Heading>
      <RadioGroup
        onChange={setValue}
        value={value}
        {...register('paymentMethod')}
        colorScheme="green"
      >
        <Flex flexDir="column">
          <Radio value="creditCard">Credit Card</Radio>
          <Radio value="paypal">PayPal</Radio>
        </Flex>
      </RadioGroup>
    </Flex>
  )
}

function PaymentForm({ errors, register }: { errors: any; register: any }) {
  return <Flex flexDir="column" align="center" m="3rem 0 1rem 0"></Flex>
}

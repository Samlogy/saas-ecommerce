import { Box, Checkbox, Flex, FormLabel, Heading, Radio, RadioGroup } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { BsDiscord } from 'react-icons/bs'

import { ErrorMessage, FeedBack, InputField, Layout, StepForm, TextField } from '../components'
import { checkoutchema } from '../lib/validation'

export default function Checkout() {
  const [feedBack, setFeedBack] = useState({
    isOpen: false,
    type: ''
  })

  const router = useRouter()

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

  const steps = [
    {
      label: 'Shipping Address',
      icon: BsDiscord,
      content: <BillingAddress errors={errors} register={register} />
    },
    {
      label: 'Shipping Method',
      icon: BsDiscord,
      content: (
        <ShippingMethod errors={errors} register={register} shippingMethods={shippingMethods} />
      )
    },
    {
      label: 'Payment',
      icon: BsDiscord,
      content: <Payment errors={errors} register={register} />
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
  return (
    <Flex flexDir="column" align="center" m="3rem 0 1rem 0">
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
        w="20em"
        mb="1em"
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
  // receive totalPrice as default (then when valid discountCode is entred re-compute the newPrice)
  const newPrice = 1000
  return (
    <Flex flexDir="column" align="center" m="3rem 0 1rem 0">
      <RadioGroup
        //  onChange={setValue}
        // value={value}
        colorScheme="green"
        mb="1em"
        as={Flex}
        flexDir="column"
        w="20em"
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
function Payment({ errors, register }: { errors: any; register: any }) {
  return (
    <Flex flexDir="column" align="center" m="3rem 0 1rem 0">
      Stripe Form Logic
    </Flex>
  )
}

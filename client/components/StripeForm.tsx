import { Box, Button, Flex, FormControl, FormLabel, Heading } from '@chakra-ui/react'
import {
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
  IdealBankElement,
  useElements,
  useStripe
} from '@stripe/react-stripe-js'
import { useState } from 'react'
import ErrorMessage from './ErrorMessage'
import { isEmpty } from '../lib/utils/fonctions'
import SelectField from './SelectField'

interface IStripeForm {
  price: string
  billingDetails?: any
  setFeedBack: any
}

export default function StripeForm({ price, billingDetails, setFeedBack }: IStripeForm) {
  const stripe = useStripe()
  const elements = useElements()

  const [card, setCard] = useState({
    complete: false,
    isLoading: false,
    paymentMethod: null,
    errors: {}
  })

  const [paymentOption, setPaymentOption] = useState('card')

  const onReset = () => {
    setCard(prev => {
      return {
        ...prev,
        errors: {},
        isLoading: false,
        paymentMethod: null
      }
    })
  }

  const onSubmitCard = async e => {
    e.preventDefault()
    if (!stripe || !elements) return

    if (card?.complete) {
      setCard(prev => {
        return {
          ...prev,
          isLoading: true
        }
      })
    }

    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement),
      billing_details: billingDetails
    })

    console.log(payload)

    setCard(prev => {
      return {
        ...prev,
        isLoading: false
      }
    })
    if (payload.error) {
      setCard(prev => {
        return {
          ...prev,
          error: payload?.error
        }
      })
      setFeedBack({ isOpen: true, type: 'error' })
    } else {
      setCard(prev => {
        return {
          ...prev,
          paymentMethod: payload?.paymentMethod
        }
      })
      setFeedBack({ isOpen: true, type: 'success' })
    }
  }
  const onSubmitIdealBank = async e => {
    e.preventDefault()
    if (!stripe || !elements) return

    const payload = await stripe.createPaymentMethod({
      type: 'ideal',
      ideal: elements.getElement(IdealBankElement),
      billing_details: billingDetails
    })
    console.log(payload)

    setCard(prev => {
      return {
        ...prev,
        isLoading: false
      }
    })
    if (payload.error) {
      setCard(prev => {
        return {
          ...prev,
          error: payload?.error
        }
      })
      setFeedBack({ isOpen: true, type: 'error' })
    } else {
      setCard(prev => {
        return {
          ...prev,
          paymentMethod: payload?.paymentMethod
        }
      })
      setFeedBack({ isOpen: true, type: 'success' })
    }
  }

  const onHandleChange = label => elementData => {
    let errors = card?.errors || {}

    const { elementType, complete, error } = elementData

    console.log(elementData)

    if (!complete && !error) {
      errors[elementType] = `${label} is incomplete or invalid.`
    } else if (complete && !error) {
      delete errors[elementType]
    }

    setCard(prev => {
      return {
        ...prev,
        errors
      }
    })
  }

  const PAYMENT_OPTIONS = {
    card: {
      title: 'Card Form',
      component: (
        <CardForm
          handleChange={onHandleChange}
          stripe={stripe}
          reset={onReset}
          price="25"
          card={card}
        />
      ),
      label: 'card',
      submit: onSubmitCard
    },
    idealBank: {
      title: 'Ideal Bank',
      component: (
        <IdealBankForm
          handleChange={onHandleChange}
          stripe={stripe}
          reset={onReset}
          price="25"
          card={card}
        />
      ),
      label: 'IdealBank',
      submit: onSubmitIdealBank
    }
  }

  return (
    <>
      <SelectField
        label="Select Payment mean"
        name="paymentMean"
        onChange={e => setPaymentOption(e.target.value)}
        w="85%"
      >
        <option value={'card'}>card</option>
        <option value={'idealBank'}>idealBank</option>
      </SelectField>

      <Flex flexDir="column" mt="1em">
        <Heading as="h4" textAlign="center" mb=".5em">
          {PAYMENT_OPTIONS[paymentOption]?.title}
        </Heading>
        <form onSubmit={PAYMENT_OPTIONS[paymentOption]?.submit}>
          <>{PAYMENT_OPTIONS[paymentOption]?.component}</>
        </form>
      </Flex>
    </>
  )
}

function CardForm({ handleChange, card, reset, stripe, price }: any) {
  return (
    <>
      <FormControl id="cardNumber" mb="1em" w="20em">
        <FormLabel htmlFor="cardNumber">Card Number</FormLabel>
        <CardNumberElement id="cardNumber" onChange={handleChange('card Number')} />
        {card?.errors['cardNumber'] && <ErrorMessage error={card?.errors['cardNumber']} />}
      </FormControl>

      <FormControl id="cardExpiration" mb="1em" w="20em">
        <FormLabel htmlFor="cardExpiration"> Expiration</FormLabel>
        <CardExpiryElement id="cardExpiry" onChange={handleChange('card Expiry')} />
        <ErrorMessage error={card?.errors['cardExpiry']} />
      </FormControl>

      <FormControl id="cardCvc" mb="1em" w="20em">
        <FormLabel htmlFor="cardCvc"> CVC</FormLabel>
        <CardCvcElement id="cardCvc" onChange={handleChange('card Cvc')} />
        <ErrorMessage error={card?.errors['cardCvc']} />
      </FormControl>

      <Flex justify="flex-end">
        <Button type="reset" variant="ghost" colorScheme="green" mr=".25em" onClick={reset}>
          Reset
        </Button>
        <Button
          type="submit"
          variant="solid"
          colorScheme="green"
          disabled={card?.isLoading || !stripe || isEmpty(card?.errors)}
        >
          {card?.isLoading ? 'Loading...' : `Pay ${price}`}
        </Button>
      </Flex>
    </>
  )
}

function IdealBankForm({ handleChange, card, reset, stripe, price }: any) {
  return (
    <>
      <FormControl id="idealBank" mb="1em" w="20em">
        <FormLabel htmlFor="idealBank"> Ideal Bank</FormLabel>

        <IdealBankElement id="IdealBankElement" onChange={handleChange} />
        <ErrorMessage error={card?.errors['idealBank']} />
      </FormControl>

      <Flex justify="flex-end">
        <Button type="reset" variant="ghost" colorScheme="green" mr=".25em" onClick={reset}>
          Reset
        </Button>
        <Button
          type="submit"
          variant="solid"
          colorScheme="green"
          disabled={card?.isLoading || !stripe || isEmpty(card?.errors)}
        >
          {card?.isLoading ? 'Loading...' : `Pay ${price}`}
        </Button>
      </Flex>
    </>
  )
}

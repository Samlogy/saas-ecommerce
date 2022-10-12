import { Button, Flex, FormControl, FormLabel, Heading, useColorModeValue } from '@chakra-ui/react'
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  FpxBankElement,
  IbanElement,
  IdealBankElement,
  useElements,
  useStripe
} from '@stripe/react-stripe-js'
import { useState } from 'react'
import { isEmpty } from '../lib/utils/fonctions'
import ErrorMessage from './ErrorMessage'
import SelectField from './SelectField'

interface IStripeForm {
  price: number
  billingDetails?: any
  setFeedBack: any
}
interface IForm {
  handleChange: (e: any) => void
  card: any
  reset: () => void
  stripe: any
  price: number
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
  const [paymentOption, setPaymentOption] = useState(null)

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

  const onSubmit = async (e: any) => {
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

    let payload = null
    if (paymentOption === 'card') {
      payload = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardNumberElement),
        billing_details: billingDetails
      })
    } else if (paymentOption === 'idealBank') {
      payload = await stripe.createPaymentMethod({
        type: 'ideal',
        ideal: elements.getElement(IdealBankElement),
        billing_details: billingDetails
      })
    } else if (paymentOption === 'iban') {
      payload = await stripe.createPaymentMethod({
        type: 'sepa_debit',
        sepa_debit: elements.getElement(IbanElement),
        billing_details: billingDetails
      })
    } else if (paymentOption === 'fpxBank') {
      payload = await stripe.createPaymentMethod({
        type: 'fpx',
        fpx: elements.getElement(FpxBankElement),
        billing_details: billingDetails
      })
    }

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

  const onHandleChange = (label: string) => (elementData: any) => {
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

  const PAYMENT_OPTIONS: any = {
    card: {
      title: 'Card Form',
      component: (
        <CardForm
          handleChange={onHandleChange}
          stripe={stripe}
          reset={onReset}
          price={price}
          card={card}
        />
      )
    },
    idealBank: {
      title: 'Ideal Bank',
      component: (
        <IdealBankForm
          handleChange={onHandleChange}
          stripe={stripe}
          reset={onReset}
          price={price}
          card={card}
        />
      )
    },
    iban: {
      title: 'Ideal Bank',
      component: (
        <IbanForm
          handleChange={onHandleChange}
          stripe={stripe}
          reset={onReset}
          price={price}
          card={card}
        />
      )
    },
    fpxBank: {
      title: 'Fpx Bank',
      component: (
        <FpxBankForm
          handleChange={onHandleChange}
          stripe={stripe}
          reset={onReset}
          price={price}
          card={card}
        />
      )
    }
  }

  return (
    <>
      <SelectField
        label="Select Payment Method"
        placeholder="Select Payment Method"
        name="paymentMean"
        onChange={e => setPaymentOption(e.target.value)}
      >
        <option value={'card'}>card</option>
        <option value={'idealBank'}>idealBank</option>
        <option value={'iban'}>iban</option>
        <option value={'fpxBank'}>fpxBank</option>
      </SelectField>

      <Flex flexDir="column" mt="1em">
        <Heading as="h4" textAlign="center" mb=".5em">
          {PAYMENT_OPTIONS[paymentOption]?.title}
        </Heading>
        <form onSubmit={onSubmit}>{PAYMENT_OPTIONS[paymentOption]?.component}</form>
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

function IdealBankForm({ handleChange, card, reset, stripe, price }: IForm) {
  return (
    <>
      <FormControl id="idealBank" mb="1em" w="20em">
        <FormLabel htmlFor="idealBank"> Ideal Bank</FormLabel>

        <IdealBankElement id="IdealBankElement" onChange={handleChange('Ideal Bank')} />
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

function IbanForm({ handleChange, card, reset, stripe, price }: IForm) {
  return (
    <>
      <FormControl id="iban" mb="1em" w="20em">
        <FormLabel htmlFor="iban"> IBAN</FormLabel>

        <IbanElement onChange={handleChange('IBAN')} />
        <ErrorMessage error={card?.errors['iban']} />
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

function FpxBankForm({ handleChange, card, reset, stripe, price }: IForm) {
  return (
    <>
      <FormControl id="iban" mb="1em" w="20em">
        <FormLabel htmlFor="fpxBank"> FPX Bank</FormLabel>
        <FpxBankElement onChange={handleChange('FPX Bank')} />
        <ErrorMessage error={card?.errors['fpxBank']} />
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

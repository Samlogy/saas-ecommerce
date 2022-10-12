import { Button, Flex, FormControl, FormLabel, Heading } from '@chakra-ui/react'
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
import { ErrorMessage, SelectField, View } from './'

interface IStripeForm {
  price: number
  billingDetails?: any
  setFeedBack: any
}
interface IForm {
  handleChange: any
  card: any
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

  const onSubmit = async () => {
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
    let objOptions: any = {}
    if (paymentOption === 'card') {
      objOptions = {
        type: 'card',
        card: elements.getElement(CardNumberElement)
      }
    } else if (paymentOption === 'idealBank') {
      objOptions = {
        type: 'ideal',
        ideal: elements.getElement(IdealBankElement)
      }
    } else if (paymentOption === 'iban') {
      objOptions = {
        type: 'sepa_debit',
        sepa_debit: elements.getElement(IbanElement)
      }
    } else if (paymentOption === 'fpxBank') {
      objOptions = {
        type: 'fpx',
        fpx: elements.getElement(FpxBankElement)
      }
    }

    payload = await stripe.createPaymentMethod({
      ...objOptions,
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

  const onHandleChange = (label: string) => (elementData: any) => {
    let errors = card?.errors || {}

    const { elementType, complete, error } = elementData

    //console.log(elementData)

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
      component: <CardForm handleChange={onHandleChange} card={card} />
    },
    idealBank: {
      title: 'Ideal Bank',
      component: <IdealBankForm handleChange={onHandleChange} card={card} />
    },
    iban: {
      title: 'Ideal Bank',
      component: <IbanForm handleChange={onHandleChange} card={card} />
    },
    fpxBank: {
      title: 'Fpx Bank',
      component: <FpxBankForm handleChange={onHandleChange} card={card} />
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

      <View cond={paymentOption} as={Flex} flexDir="column" mt="1em">
        <Heading as="h4" textAlign="center" mb=".5em">
          {PAYMENT_OPTIONS[paymentOption]?.title}
        </Heading>
        <>
          {PAYMENT_OPTIONS[paymentOption]?.component}

          <Flex justify="flex-end">
            <Button type="reset" variant="ghost" colorScheme="green" mr=".25em" onClick={onReset}>
              Reset
            </Button>
            <Button
              onClick={onSubmit}
              variant="solid"
              colorScheme="green"
              disabled={card?.isLoading || !stripe || isEmpty(card?.errors)}
            >
              {card?.isLoading ? 'Loading...' : `Pay ${price}`}
            </Button>
          </Flex>
        </>
      </View>
    </>
  )
}

function CardForm({ handleChange, card }: IForm) {
  return (
    <>
      <FormControl id="cardNumber" mb="1em" w="20em">
        <FormLabel htmlFor="cardNumber">Card Number</FormLabel>
        <CardNumberElement id="cardNumber" onChange={handleChange('card Number')} />
        {<ErrorMessage error={card?.errors['cardNumber']} />}
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
    </>
  )
}

function IdealBankForm({ handleChange, card }: IForm) {
  return (
    <FormControl id="idealBank" mb="1em" w="20em">
      <FormLabel htmlFor="idealBank"> Ideal Bank</FormLabel>

      <IdealBankElement id="IdealBankElement" onChange={handleChange('Ideal Bank')} />
      <ErrorMessage error={card?.errors['idealBank']} />
    </FormControl>
  )
}

function IbanForm({ handleChange, card }: IForm) {
  return (
    <FormControl id="iban" mb="1em" w="20em">
      <FormLabel htmlFor="iban"> IBAN</FormLabel>

      <IbanElement onChange={handleChange('IBAN')} />
      <ErrorMessage error={card?.errors['iban']} />
    </FormControl>
  )
}

function FpxBankForm({ handleChange, card }: IForm) {
  return (
    <FormControl id="iban" mb="1em" w="20em">
      <FormLabel htmlFor="fpxBank"> FPX Bank</FormLabel>
      <FpxBankElement onChange={handleChange('FPX Bank')} />
      <ErrorMessage error={card?.errors['fpxBank']} />
    </FormControl>
  )
}

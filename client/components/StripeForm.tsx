import { Button, Flex, FormControl, FormLabel } from '@chakra-ui/react'
import {
  CardElement,
  useElements,
  useStripe,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  Elements,
  ElementsConsumer
} from '@stripe/react-stripe-js'
import { useState } from 'react'
import ErrorMessage from './ErrorMessage'

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
    errors: null
  })

  const onReset = () => {
    setCard(prev => {
      return {
        ...prev,
        errors: null,
        isLoading: false,
        paymentMethod: null
      }
    })
  }

  const onSubmit = async e => {
    e.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return
    }

    if (card?.errors) {
      elements.getElement('card').focus()
      return
    }

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
      card: elements.getElement(CardElement),
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

  const handlePayment_InputChange = (name, label) => elementData => {
    let errors = card?.errors || {}

    if (!elementData.complete && !elementData.error) {
      errors[name] = `Your ${label} is incomplete or invalid.`
    } else if (elementData.complete && !elementData.error) {
      delete errors[name]
    }

    //console.log(elementData, name, label)

    setCard(prev => {
      return {
        ...prev,
        errors
      }
    })
  }

  const StripeElementsStyles = {
    iconStyle: 'solid',
    style: {
      base: {
        iconColor: 'black',
        color: 'black',
        fontWeight: 300,
        fontFamily: "'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif",
        fontSize: '16px',
        backgroundColor: 'white',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': {
          color: '#fce883'
        },
        '::placeholder': {
          color: 'lightgrey'
        }
      },
      invalid: {
        iconColor: 'red',
        color: 'red'
      }
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <FormControl id="cardNumber" mb="1em" w="20em">
        <FormLabel htmlFor="cardNumber">Card Number</FormLabel>
        <CardNumberElement
          id="cardNumber"
          onChange={handlePayment_InputChange('cardNumber', 'Card Number')}
          options={StripeElementsStyles}
        />
        <ErrorMessage error={card?.errors?.mesage} />
      </FormControl>

      <FormControl id="cardExpiration" mb="1em" w="20em">
        <FormLabel htmlFor="cardExpiration">Card Expiration</FormLabel>
        <CardExpiryElement
          id="cardExpiry"
          onChange={handlePayment_InputChange('cardExpiration', 'Card Expiration')}
          options={StripeElementsStyles}
        />
        <ErrorMessage error={card?.errors?.mesage} />
      </FormControl>

      <FormControl id="cardCVC" mb="1em" w="20em">
        <FormLabel htmlFor="cardCVC">Card CVC</FormLabel>
        <CardCvcElement
          id="cardCvc"
          onChange={handlePayment_InputChange('cardCVC', 'Card CVC')}
          options={StripeElementsStyles}
        />
        <ErrorMessage error={card?.errors?.mesage} />
      </FormControl>

      <Flex justify="flex-end">
        <Button type="reset" variant="ghost" colorScheme="green" onClick={onReset}>
          Reset
        </Button>
        <Button
          type="submit"
          variant="solid"
          colorScheme="green"
          disabled={card?.isLoading || !stripe}
        >
          {card?.isLoading ? 'Loading...' : `Pay ${price}`}
        </Button>
      </Flex>
    </form>
  )
}

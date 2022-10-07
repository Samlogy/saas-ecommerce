import { Button, Flex, FormControl, FormLabel } from '@chakra-ui/react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
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
    error: null
  })

  const onSubmit = async e => {
    e.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return
    }

    if (card?.error) {
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

  const onReset = () => {
    setCard(prev => {
      return {
        ...prev,
        error: null,
        isLoading: false,
        paymentMethod: null
      }
    })
  }

  const onHandleCard = (e: any) => {
    setCard(prev => {
      return {
        ...prev,
        error: e.error,
        complete: e.complete
      }
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <FormControl id="cardInfo" mb="1em" w="20em">
        <FormLabel htmlFor="cardInfo">Card</FormLabel>
        <CardElement className="sr-input sr-card-element" onChange={onHandleCard} />
        <ErrorMessage error={card?.error?.mesage} />
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

import { Box, Button, Flex, useColorModeValue } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'

interface IMultiStepForm {
  steps: any
  isValid: boolean
  handleSubmit: any
  setStep: any
  currentStep: number
  nbrSteps: number
  [restProps: string]: any
  isSubmit?: boolean

  triggerSubmit?: any
  submit: any
}
export default function MultiStepForm({
  steps,
  isValid,
  handleSubmit,
  setStep,
  currentStep,
  nbrSteps,
  isSubmit = true,

  triggerSubmit,
  submit,
  ...restProps
}: IMultiStepForm) {
  const NBR_STEPS = nbrSteps

  const onSubmit = (data: any) => {
    if (!cantNext) return
    console.log(data)
    submit()
  }
  const onNextStep = async () => {
    if (currentStep < NBR_STEPS) {
      setStep(prev => prev + 1)
      return
    } else if (cantNext) return
  }
  const onPreviousStep = () => {
    if (currentStep === 1) {
      return
    } else {
      setStep(prev => prev - 1)
    }
  }

  const refSubmit = useRef<any>(null)

  const cantPrevious = currentStep === 1
  const cantNext = currentStep === NBR_STEPS || !isValid

  useEffect(() => {
    console.log('triggerSubmit: ', triggerSubmit)
    triggerSubmit && refSubmit?.current?.click()
  }, [triggerSubmit])

  return (
    <Flex flexDir="column" w={'90%'} mx="auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <>
          <Flex justify="space-around" align="center" mb="1em" w="100%">
            <Button
              variant="outline"
              colorScheme="green"
              onClick={onPreviousStep}
              disabled={cantPrevious}
            >
              Prev
            </Button>
            <Flex justify="center" align="center" textTransform="capitalize">
              <Box
                as={Flex}
                justify="center"
                align="center"
                borderRadius="50%"
                bg={useColorModeValue('accent_4', 'accent_6')}
                color={useColorModeValue('gray_8', 'gray_3')}
                w="3.5em"
                h="3.5em"
                p=".1em"
                fontSize=".95em"
                letterSpacing="-2px"
              >
                {`${currentStep} / ${NBR_STEPS}`}
              </Box>
              <Box as="span" ml=".5em">
                {steps[currentStep].label}
              </Box>
            </Flex>
            <Button variant="outline" colorScheme="green" onClick={onNextStep} disabled={cantNext}>
              Next
            </Button>
          </Flex>

          {steps[currentStep].content}

          {
            <Button
              type="submit"
              ml="auto"
              disabled={!cantNext}
              ref={refSubmit}
              opacity={cantNext && isSubmit ? 1 : 0}
            >
              Submit
            </Button>
          }
        </>
      </form>
      <code> {restProps?.watch && JSON.stringify(restProps?.watch(), null, 2)} </code>
    </Flex>
  )
}

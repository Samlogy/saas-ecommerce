import { Box, Button, Flex, useColorModeValue } from '@chakra-ui/react'

interface IMultiStepForm {
  steps: any
  isValid: boolean
  handleSubmit: any
  setStep: any
  currentStep: number
  nbrSteps: number
  [restProps: string]: any
}
export default function MultiStepForm({
  steps,
  isValid,
  handleSubmit,
  setStep,
  currentStep,
  nbrSteps = 3,
  ...restProps
}: IMultiStepForm) {
  const NBR_STEPS = nbrSteps

  const onSubmit = (data: any) => {
    if (!cantNext) return
    console.log('form submitted !')
    console.log(data)
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

  const cantPrevious = currentStep === 1
  const cantNext = currentStep === NBR_STEPS || !isValid

  const { watch } = restProps

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
                bg="gray_8"
                color="gray_2"
                w="3.5em"
                h="3.5em"
                p=".1em"
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

          {cantNext && isValid && (
            <Button type="submit" ml="auto" disabled={!cantNext} onClick={() => onSubmit}>
              Submit
            </Button>
          )}
        </>
      </form>
      <code> {JSON.stringify(watch(), null, 2)} </code>
    </Flex>
  )
}

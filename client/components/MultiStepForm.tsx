import { Button, Flex } from '@chakra-ui/react'

interface IMultiStepForm {
  stepTitles: any
  stepForm: any
  isValid: boolean
  handleSubmit: any
  setStep: any
  step: number
  watch: any
  nbrSteps: number
}
export default function MultiStepForm({
  stepTitles,
  stepForm,
  isValid,
  handleSubmit,
  setStep,
  step,
  watch,
  nbrSteps = 3
}: IMultiStepForm) {
  const NBR_STEPS = nbrSteps

  const onSubmit = (data: any) => {
    if (!cantNext) return
    console.log('form submitted !')
    console.log(data)
  }
  const onNextStep = async () => {
    if (step < NBR_STEPS) {
      setStep(prev => prev + 1)
      return
    } else if (cantNext) return
  }
  const onPreviousStep = () => {
    if (step === 1) {
      return
    } else {
      setStep(prev => prev - 1)
    }
  }

  const cantPrevious = step === 1
  const cantNext = step === NBR_STEPS || !isValid

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          flexDir="column"
          justify="center"
          align="center"
          w="50%"
          m="auto"
          p="2em"
          border="1px solid"
          borderColor="gray.500"
          borderRadius="10px"
        >
          <Flex justify="space-between" align="center" mb="1em" w="100%">
            <Button onClick={onPreviousStep} disabled={cantPrevious}>
              Prev
            </Button>
            <Flex flexDir="column" justify="center" align="center" textTransform="capitalize">
              {`${step} / ${NBR_STEPS}`}
              {stepTitles[step].title}
            </Flex>
            <Button onClick={onNextStep} disabled={cantNext}>
              Next
            </Button>
          </Flex>

          {stepForm[step]}

          {cantNext && isValid && (
            <Button type="submit" ml="auto" disabled={!cantNext} onClick={() => onSubmit}>
              Submit
            </Button>
          )}
        </Flex>
      </form>
      <code> {JSON.stringify(watch(), null, 2)} </code>
    </>
  )
}

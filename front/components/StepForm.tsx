import { Step, Steps, useSteps } from 'chakra-ui-steps'
import { Flex, Box, Button } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { ModalPopUp } from '../components'

{
  /* <StepForm steps={steps} handleSubmit={handleSubmit} trigger={trigger} onSubmit={onSubmit} /> */
}

interface IStepFrom {
  initialStep?: number
  steps: any
  handleSubmit?: any
  trigger?: any
  onSubmit?: any
}

const StepForm = ({ initialStep = 0, steps, handleSubmit, trigger, onSubmit }: IStepFrom) => {
  const { nextStep, prevStep, activeStep } = useSteps({
    initialStep: initialStep
  })

  const handleSubmitt = async () => {
    btnRef?.current?.click()
    setShow({ state: true, status: 'success' })
  }

  const handleNextStep = async () => {
    let isValid = false
    for (let i = 0; i <= activeStep; i++) {
      if (i === activeStep) isValid = await trigger(steps[activeStep].fields)
    }
    if (isValid) nextStep()
  }

  const [show, setShow] = useState({ state: false, status: '' })
  const btnRef = useRef(null)

  return (
    <>
      <Box my="2rem">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Steps activeStep={activeStep}>
            {steps.map(({ label, icon, content, description }) => (
              <Step label={label} key={label} icon={icon} description={description}>
                {content}
              </Step>
            ))}
            <Button type="submit" mx="auto" size="sm" ref={btnRef} display="none">
              Hidden
            </Button>
          </Steps>
        </form>

        {activeStep === steps.length ? (
          <Flex p={4}>
            <Button mx="auto" size="sm" onClick={() => handleSubmitt()}>
              Submit
            </Button>
          </Flex>
        ) : (
          <Flex w="100%" justify="flex-end">
            <Button
              isDisabled={activeStep === 0}
              mr={4}
              onClick={prevStep}
              size="sm"
              variant="ghost"
            >
              Prev
            </Button>
            <Button size="sm" onClick={() => handleNextStep()}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Flex>
        )}
      </Box>
      <ModalPopUp
        open={show.state}
        close={() => setShow({ ...show, state: false })}
        mode={show.status}
      />
    </>
  )
}

export default StepForm

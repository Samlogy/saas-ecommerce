import { Step, Steps, useSteps } from 'chakra-ui-steps'
import { Flex, Box, Button } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { ModalPopUp } from '../components'

interface IStepFrom {
  initialStep?: number
  steps: any
  handleForm?: any
}

const StepForm = ({ initialStep = 0, steps, handleForm }: IStepFrom) => {
  const { nextStep, prevStep, activeStep } = useSteps({
    initialStep: initialStep
  })

  const onSubmit = () => {
    console.log('form submitted !')
  }

  const [show, setShow] = useState(false)
  const btnRef = useRef(null)

  return (
    <>
      <Box my="2rem">
        <Steps activeStep={activeStep}>
          {steps.map(({ label, content, icon, description }) => (
            <Step
              label={label}
              key={label}
              icon={icon}
              description={description}
              _hover={{ cursor: 'pointer' }}
            >
              <form onSubmit={handleForm}>
                {content}
                <Button
                  type="submit"
                  mx="auto"
                  size="sm"
                  onClick={() => onSubmit()}
                  ref={btnRef}
                  display="none"
                >
                  Hidden
                </Button>
              </form>
            </Step>
          ))}
        </Steps>

        {activeStep === steps.length ? (
          <Flex p={4}>
            <Button
              mx="auto"
              size="sm"
              onClick={() => {
                btnRef?.current?.click()
                setShow(true)
              }}
            >
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
            <Button size="sm" onClick={nextStep}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Flex>
        )}
      </Box>
      <ModalPopUp open={show} close={setShow} mode="success" />
    </>
  )
}

export default StepForm

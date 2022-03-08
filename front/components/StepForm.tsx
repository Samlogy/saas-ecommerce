import { Step, Steps, useSteps } from "chakra-ui-steps";
import { VStack, Flex, Box, Button, Text } from "@chakra-ui/react";
import { useRef } from 'react'

const StepForm = ({ initialStep = 3, steps, handleForm }: { initialStep?: number, steps: any, handleForm?: any }) => {
  const { nextStep, prevStep, activeStep } = useSteps({
    initialStep: initialStep
  })

  const onSubmit = () => {
      console.log('form submitted !')
  }

  const btnRef = useRef(null);
 

  return (
    <Box my="2rem">
      <Steps activeStep={activeStep}>
        {steps.map(({ label, content, icon, description }) => (
          <Step label={label} key={label} icon={icon} description={description} 
            _hover={{ cursor: 'pointer' }}>
            <form onSubmit={handleForm}>
              {content}
              <Button type="submit" mx="auto" size="sm" onClick={() => onSubmit()} ref={btnRef}
                    display='none'>
                Hidden
              </Button>
            </form>
          </Step>
        ))}
      </Steps>


      {activeStep === steps.length ? (
        <Flex p={4}>
          <Button mx="auto" size="sm" onClick={() => { console.log(btnRef) }}>
            Submit
          </Button>
        </Flex>
      ) : (
        <Flex w="100%" justify="flex-end">
          <Button isDisabled={activeStep === 0} mr={4} onClick={prevStep} size="sm" variant="ghost">
            Prev
          </Button>
          <Button size="sm" onClick={nextStep}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default StepForm;

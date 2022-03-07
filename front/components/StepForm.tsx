import { Step, Steps, useSteps } from "chakra-ui-steps";
import { VStack, Flex, Box, Button, Text } from "@chakra-ui/react";

const StepForm = ({ nbrSteps }: { nbrSteps: number }) => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 1
  });

  const onSubmit = () => {
      console.log('form submitted !')
  }

  const content = (
    <Flex my="2rem" p={4} border='1px' borderRadius={'5px'}>
      <Text> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde iste soluta officia molestias nemo vel officiis quaerat consequuntur iure error nam fugit nobis corrupti exercitationem blanditiis quasi, libero quam voluptates. </Text>
    </Flex>
  );

  const steps = [
    { label: 'Step 1', content },
    { label: 'Step 2', content },
    { label: 'Step 3', content },
  ];

  return (
    <Box my="2rem">
      <Steps activeStep={activeStep}>
        {steps.map(({ label, content }) => (
          <Step label={label} key={label}>
            {content}
          </Step>
        ))}
      </Steps>


      {activeStep === steps.length ? (
        <Flex p={4}>
          {/* <Button mx="auto" size="sm" onClick={reset}>
            Reset
          </Button> */}
          <Button mx="auto" size="sm" onClick={() => onSubmit()}>
            Submit
          </Button>
        </Flex>
      ) : (
        <Flex width="100%" justify="flex-end">
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

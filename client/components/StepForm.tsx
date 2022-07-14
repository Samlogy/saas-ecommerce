import { Step, Steps, useSteps } from 'chakra-ui-steps'
import { Flex, Box, Button } from '@chakra-ui/react'
import { useRef, useState } from 'react'

interface IStepFrom {
  initStep?: number
  steps: any
  handleSubmit?: any
  trigger?: any
  onSubmit?: any
  isSubmitting?: any
}

export default function StepForm({
  initStep = 0,
  steps,
  handleSubmit,
  trigger,
  onSubmit,
  isSubmitting
}: IStepFrom) {
  const { nextStep, prevStep, activeStep } = useSteps({
    initialStep: initStep
  })

  const handleNextStep = async () => {
    if (activeStep === steps.length) {
      btnRef?.current?.click()
      return
    }

    let isValid = false
    switch (activeStep) {
      case 0: {
        isValid = await trigger(['fullName'])
        break
      }
      case 1: {
        isValid = await trigger(['email'])
        break
      }
      case 2: {
        isValid = await trigger(['username'])
        break
      }
    }
    if (isValid) nextStep()
  }

  const btnRef = useRef(null)

  return (
    <>
      <Box my="2rem">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Steps activeStep={activeStep}>
            {steps.map(({ label, icon, content, description }) => (
              <Step key={label} label={label} icon={icon} description={description}>
                {content}
              </Step>
            ))}
            <Button type="submit" mx="auto" size="sm" ref={btnRef} display="none"></Button>
          </Steps>
        </form>

        <Flex w="100%" justify="flex-end">
          <Button isDisabled={activeStep === 0} mr={4} onClick={prevStep} size="sm" variant="ghost">
            Prev
          </Button>
          <Button size="sm" onClick={() => handleNextStep()} isDisabled={isSubmitting}>
            {activeStep === steps.length ? 'Finish' : 'Next'}
          </Button>
        </Flex>
      </Box>
    </>
  )
}

// <StepForm
//     steps={steps}
//     handleSubmit={handleSubmit}
//     onSubmit={onSubmit}
//     trigger={trigger}
//     isSubmitting={isSubmitting}
//   />

/*export const multiStepsSchema = yup.object().shape({
      fullName: yup.string().required('Full Name required'),
      email: yup.string().email('Enter a valid Email Address').required('Email required'),
      username: yup.string().required('Enter your username please')
    })*/

/*
    const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(multiStepsSchema)
  })

  const onSubmit = async (data: any) => {
    console.log(data)
    console.log('submitted !!!')
  }

  const steps = [
    {
      label: 'Step 1',
      icon: FaBeer,
      description: 'description1 ',
      content: (
        <InputField register={register} errors={errors} name="fullName" placeholder="fullName" />
      )
    },
    {
      label: 'Step 2',
      icon: FaBeer,
      description: 'description 2',
      content: <InputField register={register} errors={errors} name="email" placeholder="email" />
    },
    {
      label: 'Step 3',
      icon: FaBeer,
      description: 'description 3',
      content: (
        <InputField register={register} errors={errors} name="username" placeholder="username" />
      )
    }
  ]
    
    */

/*
  import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { FaBeer } from 'react-icons/fa'
import { multiStepsSchema } from '../lib/validation'
  
  */

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Textarea,
  useColorModeValue
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '../components'
import { commentSchema } from '../lib/validation'
import { removeState, saveState } from '../utils/localStorage'

interface IAddComment {
  isOpen: boolean
  onClose: () => void
}

const AddComment = ({ isOpen, onClose }: IAddComment) => {
  const [isChecked, setIsChecked] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(commentSchema)
  })

  const onAdd = async (data: any) => {
    isChecked
      ? saveState('user_data_comment', JSON.stringify(data))
      : removeState('user_data_comment')
  }

  const handleChange = (e: any) => {
    setIsChecked(e.target.checked)
  }

  const inputColor = useColorModeValue('gray_9', 'gray_3')

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody py="1.5rem">
          <form onSubmit={handleSubmit(onAdd)}>
            <FormControl id="fullName" mb="1rem">
              <FormLabel>
                Full Name
                <Box as="span" color="gray.500" fontSize=".85rem" fontStyle={'italic'}>
                  {' '}
                  (Optional){' '}
                </Box>
              </FormLabel>
              <Input
                type="text"
                placeholder="Full Name"
                _placeholder={{ color: 'gray.500' }}
                isInvalid={errors.fullName ? true : false}
                errorBorderColor="error"
                bg={inputColor}
                focusBorderColor={errors.fullName ? 'error' : 'accent_6'}
                borderRadius="5px"
                {...register('fullName')}
              />
              {errors.fullName && <ErrorMessage error={errors.fullName.message} />}
            </FormControl>

            <FormControl id="email" mb="1rem">
              <FormLabel> Email Address </FormLabel>
              <Input
                type="email"
                placeholder="your-email@example.com"
                _placeholder={{ color: 'gray.500' }}
                isInvalid={errors.email ? true : false}
                errorBorderColor="error"
                bg={inputColor}
                focusBorderColor={errors.email ? 'error' : 'accent_6'}
                borderRadius="5px"
                {...register('email')}
              />
              {errors.email && <ErrorMessage error={errors.email.message} />}
            </FormControl>

            <FormControl id="comment" mb="1rem">
              <FormLabel> Your Comment </FormLabel>
              <Textarea
                placeholder="Your Comment ..."
                _placeholder={{ color: 'gray.500' }}
                isInvalid={errors.comment ? true : false}
                errorBorderColor="error"
                bg={inputColor}
                focusBorderColor={errors.comment ? 'error' : 'accent_6'}
                borderRadius="5px"
                {...register('comment')}
              />
              {errors.comment && <ErrorMessage error={errors.comment.message} />}
            </FormControl>

            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}
              mb="1rem"
            >
              <Checkbox
                value={'true'}
                colorScheme="green"
                checked={isChecked}
                onChange={handleChange}
              >
                {' '}
                <Box as="span" fontWeight={'300'} fontSize=".8rem">
                  {' '}
                  Save my name, email in this browser for the next time I comment.{' '}
                </Box>{' '}
              </Checkbox>
            </Stack>

            <Button
              type="submit"
              isLoading={isSubmitting}
              bg="accent_4"
              color="white"
              _hover={{ bg: 'accent_6' }}
            >
              Post Comment
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AddComment

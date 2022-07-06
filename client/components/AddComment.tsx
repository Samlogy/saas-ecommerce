import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalHeader,
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
import { removeState, saveState } from '../lib/utils/localStorage'
import { CREATE_COMMENT } from '../lib/services'
import { useAuth } from '../store'

interface IAddComment {
  isOpen: boolean
  onClose: () => void
}

const AddComment = ({ isOpen, onClose }: IAddComment) => {
  const user = useAuth((state: any) => state.user)
  const isLogged = useAuth((state: any) => state.isLogged)
  // mutate (add new comment) (apollo --> API) CREATE_COMMENT

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(commentSchema),
    defaultValues:  {}
  })

  const onAdd = async (comment: any) => {
    console.log(comment)
    // {...comment, username: user.username, email: user.email}
    // call api
    reset({ comment: '' })
    onClose()
  }

  const inputColor = useColorModeValue('gray_9', 'gray_3')

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Comment</ModalHeader>
        <ModalCloseButton />
        <ModalBody py="1.5rem">
          <form onSubmit={handleSubmit(onAdd)}>
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

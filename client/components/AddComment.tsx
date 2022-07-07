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
  Textarea,
  useColorModeValue
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '../components'
import { commentSchema } from '../lib/validation'
// import { CREATE_COMMENT } from '../lib/services'
import { useAuthStore } from '../store'

interface IAddComment {
  isOpen: boolean
  onClose: () => void
}

const AddComment = ({ isOpen, onClose }: IAddComment) => {
  const user = useAuthStore((state: any) => state.user)
  // mutate (add new comment) (apollo --> API) CREATE_COMMENT

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(commentSchema),
    defaultValues: {}
  })

  console.log(errors)

  const onAdd = async (data: any) => {
    const comment = { ...data, username: user.username, email: user.email }
    console.log(comment)
    //
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

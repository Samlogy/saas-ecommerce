import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useColorModeValue
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '../components'
import { commentSchema } from '../lib/validation'
// import { CREATE_COMMENT } from '../lib/services'
import { useAuthStore } from '../store'


const AddComment = () => {
  const user = useAuthStore((state: any) => state.user)

  const [isOpen, setIsOpen] = useState(false)
  // mutate (add new comment) (apollo --> API) CREATE_COMMENT

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(commentSchema)
  })

  const onAdd = async (data: {comment:string}) => {
    const comment = { ...data, username: user.username, email: user.email }
    console.log(comment)
    // call api
    reset({ comment: '' })
    setIsOpen(false)
  }

  const inputColor = useColorModeValue('gray_9', 'gray_3')

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
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
      <Button
        bg={'accent_3'}
        _hover={{ bg: 'accent_2' }}
        color={'white'}
        w="10rem"
        display={'flex'}
        ml="auto"
        onClick={() => setIsOpen(true)}
      >
        Add Comment
      </Button>
    </>
  )
}

export default AddComment

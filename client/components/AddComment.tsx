import { Button, useColorModeValue } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CustomModal, TextField } from '../components'
import { commentSchema } from '../lib/validation'
// import { CREATE_COMMENT } from '../lib/services'
import { useAuthStore } from '../store'

export default function AddComment() {
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

  const onAdd = async (data: { comment: string }) => {
    const comment = { ...data, username: user.username, email: user.email }
    console.log(comment)
    // call api
    reset({ comment: '' })
    setIsOpen(false)
  }

  const Form = (
    <form onSubmit={handleSubmit(onAdd)}>
      <TextField
        name="comment"
        register={register}
        errors={errors}
        bg={useColorModeValue('white', 'gray_3')}
        label="Your Comment"
        placeholder="Your Comment ..."
        _placeholder={{ color: 'gray.500' }}
        w="100%"
      />

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
  )

  return (
    <>
      <CustomModal
        title="Add Comment"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        body={Form}
      />
      <Button
        bg={'accent_3'}
        _hover={{ bg: 'accent_4' }}
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

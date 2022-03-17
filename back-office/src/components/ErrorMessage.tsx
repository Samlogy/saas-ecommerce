import { Box } from '@chakra-ui/react'

const ErrorMessage = ({ error }: { error: string }) => {
  return (
    <Box textAlign="left" m="2px auto 0px auto" color="red" fontSize="12px">
      {error}
    </Box>
  )
}

export default ErrorMessage

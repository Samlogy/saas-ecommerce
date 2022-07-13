import { Box } from '@chakra-ui/react'
import React from 'react'

export default function ErrorMessage({ error }: { error: any }) {
  return (
    <Box textAlign="left" m="2px auto 0px auto" color="error" fontSize="12px">
      {error}
    </Box>
  )
}

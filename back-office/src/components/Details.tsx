import { Button, Flex, Image, Text } from '@chakra-ui/react'

import { CustomModal } from './'

interface IDetails {
  title: string
  data: any
  isOpen: boolean
  onClose: any
}

export default function Details({ title, data, isOpen, onClose }: IDetails) {
  const Body = (
    <Flex flexDir="column">
      <Image
        src={data?.img}
        alt="message-image"
        borderRadius={'5px'}
        w="5rem"
        h="5rem"
        mb=".5rem"
      />
      <Text mb=".5rem" fontSize="1.3rem">
        {data?.title}{' '}
      </Text>
      <Text mb=".5rem" color="gray_2">
        {data?.text}{' '}
      </Text>
      <Text fontSize=".8rem" fontStyle="italic" textAlign={'right'} color="gray_4">
        {data?.editedAt || data?.createdAt}{' '}
      </Text>
    </Flex>
  )
  const Footer = (
    <Button bg={'gray_4'} color="white" _hover={{ bg: 'gray_3' }} onClick={onClose}>
      Close
    </Button>
  )

  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      title={title}
      body={Body}
      footer={Footer}
    />
  )
}

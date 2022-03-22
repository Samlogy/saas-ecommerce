import {
  Box,
  Text,
  Button,
  Image,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter
} from '@chakra-ui/react'

import { useMessageStore } from 'store'

const MessageDetails = () => {
  const handleMessageVisibility = useMessageStore((state: any) => state.handleMessageVisibility)
  const message = useMessageStore((state: any) => state.message)
  const isVisible = useMessageStore((state: any) => state.isVisible)
  return (
    <Modal isOpen={isVisible} onClose={() => handleMessageVisibility(false)} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader> Message Details </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Flex flexDir="column">
            <Image
              src={message?.img}
              alt="message iamge"
              borderRadius={'5px'}
              w="5rem"
              h="5rem"
              mb=".5rem"
            />
            <Text> {message.title} </Text>
            <Text> {message.text} </Text>
            <Text> {message.createdAt} </Text>
          </Flex>
        </ModalBody>
        <ModalFooter>
          {' '}
          <Button
            bg={'disable'}
            color="white"
            _hover={{ bg: 'gray.600' }}
            onClick={() => handleMessageVisibility(false)}
          >
            {' '}
            Close{' '}
          </Button>{' '}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default MessageDetails

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

import { useNotificationStore } from '../store'

const NotificationDetails = () => {
  const handleNotificationVisibility = useNotificationStore(
    (state: any) => state.handleNotificationVisibility
  )
  const notification = useNotificationStore((state: any) => state.notification)
  const isVisible = useNotificationStore((state: any) => state.isVisible)
  return (
    <Modal isOpen={isVisible} onClose={() => handleNotificationVisibility(false)} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader> Notification Details </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Flex flexDir="column">
            <Image
              src={notification?.img}
              alt="notification iamge"
              borderRadius={'5px'}
              w="5rem"
              h="5rem"
              mb=".5rem"
            />
            <Text> {notification.title} </Text>
            <Text> {notification.text} </Text>
            <Text> {notification.createdAt} </Text>
            {/* <Display label="Name" data={notification.title} />
            <Display label="Quantity" data={notification.text} /> */}
          </Flex>
        </ModalBody>
        <ModalFooter>
          {' '}
          <Button
            bg={'disable'}
            color="white"
            _hover={{ bg: 'gray.600' }}
            onClick={() => handleNotificationVisibility(false)}
          >
            {' '}
            Close{' '}
          </Button>{' '}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default NotificationDetails

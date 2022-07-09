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

interface IDetails {
  title: string
  data: any
  isOpen: boolean
  setOpen: (isOpen: boolean) => void
}

const MessageDetails = () => {
  const setVisibile = useMessageStore((state: any) => state.setVisibile)
  const message = useMessageStore((state: any) => state.message)
  const isVisible = useMessageStore((state: any) => state.isVisible)
  return <Details title="Message" data={message} isOpen={isVisible} setOpen={setVisibile} />
}

export default MessageDetails

function Details({ title, data, isOpen, setOpen }: IDetails) {
  const message = useMessageStore((state: any) => state.message)
  return (
    <Modal isOpen={isOpen} onClose={() => setOpen(false)} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader> {title} </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Flex flexDir="column">
            <Image
              src={data?.img}
              alt="message iamge"
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
        </ModalBody>
        <ModalFooter>
          <Button
            bg={'gray_4'}
            color="white"
            _hover={{ bg: 'gray_3' }}
            onClick={() => setOpen(false)}
          >
            Close{' '}
          </Button>{' '}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

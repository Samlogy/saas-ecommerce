import { Flex, Modal, ModalBody, ModalContent, ModalOverlay, Text } from '@chakra-ui/react'
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillInfoCircle,
  AiFillWarning
} from 'react-icons/ai'

interface IModalPopUp {
  open: boolean
  close: () => void
  text: string
  mode: string
}

const ModalPopUp = ({ open, close, text, mode }: IModalPopUp) => {
  // modes --> success - warning - error - info
  const Icon =
    mode === 'success' ? (
      <AiFillCheckCircle size={100} color="#38a169" />
    ) : mode === 'error' ? (
      <AiFillCloseCircle size={100} color="#e53e3e" />
    ) : mode === 'warning' ? (
      <AiFillWarning size={100} color="#deb055" />
    ) : mode === 'info' ? (
      <AiFillInfoCircle size={100} color="#3182ce" />
    ) : (
      ''
    )

  return (
    <Modal isOpen={open} onClose={close} size={'xs'} blockScrollOnMount={false}>
      <ModalOverlay />
      <ModalContent top="15%">
        <ModalBody py="1rem">
          <Flex justifyContent="center" p=".5rem">
            {Icon}
          </Flex>
          <Text textAlign={'center'}> {text} </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ModalPopUp

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorModeValue
} from '@chakra-ui/react'

interface ICustomModal {
  isClose?: boolean
  isOpen: boolean
  onClose: any
  title?: string
  size?: any
  body?: React.ReactNode
  footer?: React.ReactNode
}

export default function CustomModal({
  isClose = true,
  isOpen,
  onClose,
  title,
  body,
  footer,
  size = 'sm'
}: ICustomModal) {
  const bgColor = useColorModeValue('gray_9', 'gray_2')
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalOverlay />
      <ModalContent borderRadius="10px" bg={bgColor}>
        {title && <ModalHeader> {title} </ModalHeader>}
        {isClose && <ModalCloseButton />}
        {body && <ModalBody> {body} </ModalBody>}
        {footer && <ModalFooter> {footer} </ModalFooter>}
      </ModalContent>
    </Modal>
  )
}

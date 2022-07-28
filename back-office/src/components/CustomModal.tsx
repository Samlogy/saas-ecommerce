import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'

interface ICustomModal {
  isOpen: boolean
  onClose: any
  title?: string
  size?: any
  body?: React.ReactNode
  footer?: React.ReactNode
}

export default function CustomModal({
  isOpen,
  onClose,
  title,
  size = 'md',
  body,
  footer
}: ICustomModal) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader> {title && title} </ModalHeader>
        <ModalCloseButton />

        <ModalBody>{body && body}</ModalBody>
        <ModalFooter>{footer && footer}</ModalFooter>
      </ModalContent>
    </Modal>
  )
}

import {
  Text,
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

import { AiFillCheckCircle, AiFillInfoCircle, AiFillWarning, AiFillCloseCircle } from "react-icons/ai";

interface IModalPopUp {
  isOpen: any, 
  onClose: any,  
  text: string,
  type: string
}

const ModalPopUp = ({ isOpen, onClose, text, type }: IModalPopUp) => {
  // types --> success - warning - error - info 
  return(
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody >
            <Flex justifyContent="center" mt="2rem" mb=".5rem">
              {
                type === "success" ? <AiFillCheckCircle size={100} color="green" /> :
                type === "error" ? <AiFillCloseCircle size={100} color="red" /> :
                type === "warning" ? <AiFillWarning size={100} color="orange" /> :
                type === "info" ? <AiFillInfoCircle size={100} color="blue" /> : ""
              }
            </Flex>
            <Text> {text} </Text>
          </ModalBody>

          <ModalFooter justifyContent={'center'}>
            <Button colorScheme='blue' w="100px" onClick={onClose}>
              Ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}

export default ModalPopUp;
import React, { useState } from 'react'
import { Flex, useToast } from '@chakra-ui/react'
import { CustomModal } from './'
import { AiFillCheckCircle, AiFillWarning, AiFillInfoCircle } from 'react-icons/ai'
import { MdError } from 'react-icons/md'

interface IModalFeedBack {
  status: string
  isOpen: boolean
  type: string
  onClose: (isOpen: boolean) => void
}
export default function ModalFeedBack({ status, isOpen, onClose, type }: IModalFeedBack) {
  const Body = (
    <Flex justify="center">
      {status === 'success' ? (
        <AiFillCheckCircle size={100} color="green" />
      ) : status === 'error' ? (
        <MdError size={100} color="red" />
      ) : status === 'warning' ? (
        <AiFillWarning size={100} color="yellow" />
      ) : status === 'info' ? (
        <AiFillInfoCircle size={100} color="blue" />
      ) : (
        ''
      )}
    </Flex>
  )

  return <CustomModal isOpen={isOpen} onClose={onClose} body={Body} />
}

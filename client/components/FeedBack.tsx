import React, { useState } from 'react'
import { Flex, useToast } from '@chakra-ui/react'
import { CustomModal } from './'
import { AiFillCheckCircle, AiFillWarning, AiFillInfoCircle } from 'react-icons/ai'
import { MdError } from 'react-icons/md'

interface IFeedBack {
  status: any
  isOpen: boolean
  type: string
  title?: string
  onClose: (isOpen: boolean) => void
}
export default function FeedBack({ status, isOpen, type, title, onClose }: IFeedBack) {
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

  const toast = useToast()
  function Display() {
    return toast({
      title: title,
      status: status,
      isClosable: true,
      duration: 3000,
      position: 'top-right',
      variant: 'left-accent'
    })
  }

  console.log(toast)

  if (type === 'modal') return <CustomModal isOpen={isOpen} onClose={onClose} body={Body} />
}

/*
<Button colorScheme="blue" onClick={() => setOpen(true)}>
        Button
      </Button>
      <FeedBack status="warning" type="toast" isOpen={isOpen} onClose={() => setOpen(false)} />*/

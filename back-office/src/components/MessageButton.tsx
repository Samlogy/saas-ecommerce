import React, { useEffect, useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { Button, Badge, Box, MenuItem, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { Dropdown, View } from 'components'
import { useMessageStore } from '../store'

function MessageButton() {
  const messages = useMessageStore((state: any) => state.messages)
  const handleMessageVisibility = useMessageStore((state: any) => state.handleMessageVisibility)
  const setMessage = useMessageStore((state: any) => state.setMessage)

  const msgs = messages.length

  const handleClickMessage = (data: any) => {
    handleMessageVisibility(true)
    setMessage(data)
  }

  useEffect(() => {
    // load message data (useQuery) --> delete useEffect & state related to it
    const data = [
      {
        id: 1,
        title: 'title',
        text: 'text...',
        createdAt: '19/03/2022'
      },
      {
        id: 2,
        title: 'title',
        text: 'text...',
        createdAt: '19/03/2022'
      },
      {
        id: 3,
        title: 'title',
        text: 'text...',
        createdAt: '19/03/2022'
      }
    ]
    // setNotifications(data)
  }, [])

  return (
    <Dropdown icon={<CustomButton msgs={msgs} />}>
      <View cond={messages.length > 0}>
        {messages?.map((el: any) => (
          <MenuItem
            key={el.id}
            flexDir={'row'}
            justifyContent="space-between"
            onClick={() => handleClickMessage(el)}
          >
            <Text isTruncated> {el.title} </Text>
            <Text isTruncated> {el.text} </Text>
          </MenuItem>
        ))}
        <Box textAlign="center" color="blue.500">
          <Link to="/messages"> View All </Link>
        </Box>
      </View>

      <View cond={messages.length === 0}>
        <Text textAlign={'center'} color="gray.500">
          {' '}
          There's no new Message{' '}
        </Text>
      </View>
    </Dropdown>
  )
}

const CustomButton = ({ msgs }: { msgs: number }) => {
  const btnRef = React.useRef(null)
  return (
    <Button variant="ghost" ref={btnRef}>
      {msgs > 0 ? (
        <Badge variant="solid" colorScheme="red" borderRadius="2xl">
          {msgs > 99 ? '99+' : msgs}
        </Badge>
      ) : (
        ''
      )}
      <MdEmail size="20" color="#ccc" />
    </Button>
  )
}

export default MessageButton

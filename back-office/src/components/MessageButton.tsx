import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { MdEmail, MdOutlineEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

import { View } from 'components'
import { IMessage } from 'lib/interfaces'
import { useMessageStore } from 'store'

export default function MessageButton() {
  const messages = useMessageStore((state: any) => state.messages)
  const setVisible = useMessageStore((state: any) => state.setVisible)
  const setMessage = useMessageStore((state: any) => state.setMessage)

  const handleClick = (data: IMessage) => {
    setMessage(data)
    setVisible(true)
  }
  const messageIcon = messages.length > 0 ? <MdEmail size={20} /> : <MdOutlineEmail size={20} />
  return (
    <Menu>
      <MenuButton as={IconButton} icon={messageIcon} bg="transparent"></MenuButton>
      <MenuList w={['5rem', '', '25rem']}>
        {messages.length > 0 ? (
          messages?.map((item: any) => (
            <MenuItem
              key={item.id}
              flexDir={'column'}
              justifyContent="space-between"
              onClick={() => handleClick(item)}
            >
              <Text
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="nowrap"
                textAlign="left"
                fontWeight="600"
                w="full"
              >
                {item.title}{' '}
              </Text>
              <Text
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="nowrap"
                textAlign="left"
                w="full"
              >
                {item.text}
              </Text>
            </MenuItem>
          ))
        ) : (
          <Text textAlign={'center'} color="gray_4">
            There's no new Message{' '}
          </Text>
        )}

        <View cond={messages.length > 0}>
          <Link to="/messages">
            <MenuItem justifyContent={'center'}>
              <Box color="accent_4" textAlign="center" w="full">
                View All
              </Box>
            </MenuItem>
          </Link>
        </View>
      </MenuList>
    </Menu>
  )
}

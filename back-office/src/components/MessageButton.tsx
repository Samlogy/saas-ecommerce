import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { MdEmail, MdOutlineEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

import { View } from 'components'
import { IMessage } from 'lib/interfaces'
import { useMessageStore } from 'store'

export default function MessageButton() {
  const messages = useMessageStore((state: any) => state.messages)
  const setVisibile = useMessageStore((state: any) => state.setVisibile)
  const setMessage = useMessageStore((state: any) => state.setMessage)

  const handleClick = (data: IMessage) => {
    setMessage(data)
    setVisibile(true)
  }
  const messageIcon = messages.length > 0 ? <MdEmail size={20} /> : <MdOutlineEmail size={20} />
  return (
    <Menu>
      <MenuButton as={IconButton} icon={messageIcon} bg="transparent"></MenuButton>
      <MenuList>
        {messages.length > 0 ? (
          messages?.map((item: IMessage) => (
            <MenuItem
              key={item.id}
              flexDir={'column'}
              justifyContent="space-between"
              onClick={() => handleClick(item)}
            >
              <Text isTruncated> {item.title} </Text>
              <Text isTruncated> {item.text} </Text>
            </MenuItem>
          ))
        ) : (
          <Text textAlign={'center'} color="gray_4">
            There's no new Message{' '}
          </Text>
        )}

        <View cond={messages.length > 0}>
          <MenuItem justifyContent={'center'}>
            <Box color="accent_4">
              <Link to="/messages"> View All </Link>
            </Box>
          </MenuItem>
        </View>
      </MenuList>
    </Menu>
  )
}

import {
  Button,
  Flex,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react'
import { AiOutlineMenu } from 'react-icons/ai'
import { View } from 'components'

import img from '../assets/images/home.png'

export default function MiniMap({ data }: { data: any }) {
  const bgColor = useColorModeValue('gray_9', 'gray_2')
  const textColor = useColorModeValue('gray_3', 'gray_9')

  const isVisible =
    useBreakpointValue({
      base: true,
      md: false
    }) || true

  console.log(isVisible)
  return (
    <>
      <View cond={isVisible}>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<AiOutlineMenu />}
            bg={bgColor}
            color={textColor}
            _hover={{ bg: bgColor }}
          >
            Menu
          </MenuButton>
          <MenuList>
            {data.map((el: any, idx: number) => (
              <ChakraLink
                key={idx}
                href={el.link}
                _hover={{ color: 'accent_3', textDecor: 'underline' }}
                mb=".25rem"
              >
                <MenuItem>{el.label}</MenuItem>
              </ChakraLink>
            ))}
          </MenuList>
        </Menu>
      </View>

      <View cond={isVisible}>
        <Flex
          flexDir={'column'}
          w="12rem"
          h="fit-content"
          border="1px solid"
          borderColor={bgColor}
          bg={bgColor}
          color={textColor}
          p=".5rem"
          borderRadius={'10px'}
          flexBasis={['20%', '', '', '10%']}
          display={['none', '', 'flex']}
        >
          {data.map((el: any, idx: number) => (
            <ChakraLink
              key={idx}
              href={el.link}
              _hover={{ color: 'accent_3', textDecor: 'underline' }}
              mb=".25rem"
            >
              {el.label}
            </ChakraLink>
          ))}
        </Flex>
      </View>
    </>
  )
}

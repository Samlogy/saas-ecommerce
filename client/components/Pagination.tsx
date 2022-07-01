import { Button, Flex, IconButton, useColorModeValue, useColorMode } from '@chakra-ui/react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

import { View } from './'

interface IPagination {
  page: number
  changePage: any
  pages: number[]
  nextPage: any
  prevPage: any
  startPage: any
  endPage: any
  lastPage: number
  isMobile?: boolean
}

const Pagination = ({
  page,
  changePage,
  pages,
  nextPage,
  prevPage,
  startPage,
  endPage,
  lastPage,
  isMobile
}: IPagination) => {
  const { colorMode: mode } = useColorMode()

  const bgColor = useColorModeValue('gray_8', 'gray_2')
  const textColor = useColorModeValue('accent_4', 'white')

  return (
    <>
      <View cond={isMobile}>
        <Flex>
          <Button disabled={page === lastPage} onClick={nextPage} color={textColor} m="1.5rem auto">
            Load More
          </Button>
        </Flex>
      </View>

      <View cond={!isMobile}>
        <Flex
          flexDir="row"
          justifyContent={'space-between'}
          w={['', '30rem', '', '']}
          m="1.5rem auto"
        >
          <Button
            fontSize=".9rem"
            mx=".25rem"
            bg={bgColor}
            color={textColor}
            _hover={{ bg: mode === 'light' ? 'gray_7' : 'gray_4', color: 'white' }}
            disabled={page === 1}
            onClick={startPage}
          >
            Start
          </Button>

          <IconButton
            aria-label="arrow left"
            icon={<RiArrowLeftSLine size={22} color="gray" />}
            bg={bgColor}
            color={textColor}
            _hover={{ bg: mode === 'light' ? 'gray_7' : 'gray_4', color: 'white' }}
            disabled={page === 1}
            onClick={prevPage}
          />

          <Flex flexDir="row" justifyContent={'center'}>
            {pages.map((page: number) => (
              <Button
                key={page}
                bg={bgColor}
                color={textColor}
                fontSize=".9rem"
                mx=".25rem"
                _hover={{ bg: mode === 'light' ? 'gray_7' : 'gray_4', color: 'white' }}
                onClick={() => changePage(page)}
              >
                {page}
              </Button>
            ))}
          </Flex>

          <IconButton
            aria-label="arrow right"
            icon={<RiArrowRightSLine size={22} color="gray" />}
            _hover={{ bg: mode === 'light' ? 'gray_7' : 'gray_4', color: 'white' }}
            bg={bgColor}
            color={textColor}
            disabled={page === lastPage}
            onClick={nextPage}
          />

          <Button
            bg={bgColor}
            color={textColor}
            fontSize=".9rem"
            mx=".25rem"
            _hover={{ bg: mode === 'light' ? 'gray_7' : 'gray_4', color: 'white' }}
            disabled={page === lastPage}
            onClick={endPage}
          >
            Last
          </Button>
        </Flex>
      </View>
    </>
  )
}

export default Pagination

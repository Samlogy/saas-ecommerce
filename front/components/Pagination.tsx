import { Button, Flex, IconButton } from '@chakra-ui/react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

interface IPagination {
  page: number
  changePage: any
  pages: number[]
  nextPage: any
  prevPage: any
  startPage: any
  endPage: any
}

const Pagination = ({
  page,
  changePage,
  pages,
  nextPage,
  prevPage,
  startPage,
  endPage
}: IPagination) => {
  return (
    <Flex flexDir="row" justifyContent={'space-between'} w="60%" m="1.5rem auto">
      <Button
        color="gray.600"
        fontSize=".9rem"
        mx=".25rem"
        _hover={{ bg: 'gray.400', color: 'white' }}
        disabled={page === 1}
        onClick={startPage}
      >
        {' '}
        Start{' '}
      </Button>

      <IconButton
        aria-label="arrow left"
        icon={<RiArrowLeftSLine size={22} color="gray" />}
        _hover={{ bg: 'gray.300', color: 'white' }}
        disabled={page === 1}
        onClick={prevPage}
      />

      <Flex flexDir="row" justifyContent={'center'}>
        {pages.map((el: number) => (
          <Button
            color="gray.600"
            fontSize=".9rem"
            mx=".25rem"
            _hover={{ bg: 'gray.400', color: 'white' }}
            onClick={() => changePage(el)}
          >
            {' '}
            {el}
          </Button>
        ))}
      </Flex>

      <IconButton
        aria-label="arrow right"
        icon={<RiArrowRightSLine size={22} color="gray" />}
        _hover={{ bg: 'gray.300', color: 'white' }}
        disabled={page === 42}
        onClick={nextPage}
      />

      <Button
        color="gray.600"
        fontSize=".9rem"
        mx=".25rem"
        _hover={{ bg: 'gray.400', color: 'white' }}
        disabled={page === 42}
        onClick={endPage}
      >
        {' '}
        Last{' '}
      </Button>
    </Flex>
  )
}

export default Pagination

import React from 'react'
import { Button, Flex, IconButton, useColorModeValue, useColorMode, Box } from '@chakra-ui/react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

import { View } from './'
import { usePagination, DOTS } from '../lib/hooks/usePagination'

interface IPagination {
  totalCount: number
  siblingCount?: number
  onPageChange: any
  currentPage: number
  pageSize: number
  isMobile?: boolean
}

export default function Pagination({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  isMobile
}: IPagination) {
  const bgColor = useColorModeValue('gray_8', 'gray_2')
  const textColor = useColorModeValue('accent_1', 'gray_7')

  const paginate = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  })

  // console.log(paginate)

  if (currentPage === 0 || paginate.range.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(1)
  }
  return (
    <>
      <View cond={isMobile}>
        <Flex>
          <Button
            onClick={currentPage === paginate.lastPage ? () => onPrevious() : () => onNext()}
            colorScheme="gray"
            m="1.5rem auto"
            _focus={{ outline: 'none' }}
          >
            {currentPage === paginate.lastPage ? 'Load Less' : 'Load More'}
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
          <IconButton
            aria-label="arrow-left"
            icon={<RiArrowLeftSLine size={22} color="gray" />}
            onClick={onPrevious}
            disabled={currentPage === paginate.firstPage}
            colorScheme="gray"
            _focus={{ outline: 'none' }}
          />
          {paginate.range.map((pageNumber: number | string, idx: number) => {
            if (pageNumber === DOTS) {
              return <Box as="span">&#8230;</Box>
            }

            return (
              <Button
                key={idx}
                colorScheme="gray"
                color={currentPage === pageNumber ? 'accent_4' : ''}
                _focus={{ outline: 'none' }}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </Button>
            )
          })}
          <IconButton
            aria-label="arrow-right"
            icon={<RiArrowRightSLine size={22} color="gray" />}
            onClick={onNext}
            disabled={paginate.lastPage === currentPage}
            colorScheme="gray"
            _focus={{ outline: 'none' }}
          />
        </Flex>
      </View>
    </>
  )
}

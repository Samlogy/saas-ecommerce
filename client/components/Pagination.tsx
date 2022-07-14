import React from 'react'
import { Button, Flex, IconButton, useColorModeValue, useColorMode, Box } from '@chakra-ui/react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

import { View } from './'
import { usePagination, DOTS } from '../lib/hooks/usePagination'

export default function Pagination(props) {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, isMobile } = props

  const bgColor = useColorModeValue('gray_8', 'gray_2')
  const textColor = useColorModeValue('accent_1', 'gray_7')

  const paginate = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  })

  console.log(paginate)

  if (currentPage === 0 || paginate.range.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }
  return (
    <>
      <View cond={isMobile}>
        <Flex>
          <Button
            disabled={currentPage === paginate.lastPage}
            onClick={onNext}
            bg={bgColor}
            color={textColor}
            m="1.5rem auto"
          >
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
          <IconButton
            aria-label="arrow-left"
            icon={<RiArrowLeftSLine size={22} color="gray" />}
            onClick={onPrevious}
            disabled={currentPage === paginate.firstPage}
            bg={bgColor}
            color={textColor}
          />
          {paginate.range.map(pageNumber => {
            if (pageNumber === DOTS) {
              return <Box as="span">&#8230;</Box>
            }

            return (
              <Button bg={bgColor} color={textColor} onClick={() => onPageChange(pageNumber)}>
                {pageNumber}
              </Button>
            )
          })}
          <IconButton
            aria-label="arrow-right"
            icon={<RiArrowRightSLine size={22} color="gray" />}
            onClick={onNext}
            disabled={paginate.lastPage === currentPage}
            bg={bgColor}
            color={textColor}
          />
        </Flex>
      </View>
    </>
  )
}

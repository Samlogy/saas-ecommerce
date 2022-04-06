import React, { useState } from 'react'
import { Table, Thead, Tbody, Tr, Flex, Box, useColorModeValue } from '@chakra-ui/react'

const CustomTable = (props: any) => {
  const initDataShow =
    props.limit && props.bodyData ? props.bodyData.slice(0, Number(props.limit)) : props.bodyData

  const [dataShow, setDataShow] = useState(initDataShow)

  let pages = 1

  let range: any = []

  if (props.limit !== undefined) {
    let page = Math.floor(props.bodyData.length / Number(props.limit))
    pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1
    // @ts-ignore
    range = [...Array(pages).keys()]
  }

  const [currPage, setCurrPage] = useState(0)

  const selectPage = (page: any) => {
    const start = Number(props.limit) * page
    const end = start + Number(props.limit)

    setDataShow(props.bodyData.slice(start, end))

    setCurrPage(page)
  }

  const bgColor = useColorModeValue('white', 'gray_2')
  const textColor = useColorModeValue('black', 'white')

  return (
    <Box borderRadius={'8px'} boxShadow="md" p=".75rem 1rem" bg={bgColor}>
      <div className="table-wrapper">
        <Table variant="striped" colorScheme="green">
          {props.headData && props.renderHead ? (
            <Thead>
              <Tr textAlign="left">
                {props.headData.map((item: any, idx: any) => props.renderHead(item, idx))}
              </Tr>
            </Thead>
          ) : null}
          {props.bodyData && props.renderBody ? (
            <Tbody>{dataShow.map((item: any, idx: any) => props.renderBody(item, idx))}</Tbody>
          ) : null}
        </Table>
      </div>

      {pages > 1 ? (
        <Flex justifyContent={'flex-end'} mt="1rem" alignItems={'center'}>
          {range.map((item: any, idx: any) => (
            <Flex
              key={idx}
              w="2rem"
              h="2rem"
              mr=".25rem"
              cursor={'pointer'}
              alignItems="center"
              justifyContent={'center'}
              borderRadius={'full'}
              transition="all 0.35s"
              _hover={{ bg: 'accent_4', color: 'white' }}
              bg={currPage === idx ? 'accent_3' : ''}
              color={currPage === idx ? 'white' : textColor}
              fontWeight={currPage === idx ? '600' : '300'}
              onClick={() => selectPage(idx)}
            >
              {item + 1}
            </Flex>
          ))}
        </Flex>
      ) : null}
    </Box>
  )
}

export default CustomTable

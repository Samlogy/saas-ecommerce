import { Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, Image } from '@chakra-ui/react'

import { formatCurrency } from 'lib/utils/functions'
import { ActionsMenu } from './'
import { useProductStore } from 'store'

interface ICustomTable {
  headers: string[]
  data: any
  isFooter?: boolean
}

export default function CustomTable({ headers, data, isFooter = false }: ICustomTable) {
  const setAction = useProductStore((state: any) => state.setAction)
  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="green">
          <Thead>
            {headers.map((el, idx) => (
              <Th key={idx}> {el} </Th>
            ))}
          </Thead>
          <Tbody>
            {data.map((el: any, idx: number) => (
              <Tr key={idx}>
                <Td p="15px 10px" maxW="2rem">
                  {el.id}
                </Td>
                <Td p="15px 10px">
                  <Image
                    boxSize="100px"
                    borderRadius="10px"
                    src={el.images[0]}
                    fallbackSrc="https://via.placeholder.com/100"
                    alt={el.name}
                  />
                </Td>
                <Td p="15px 10px">{el.name}</Td>
                <Td p="15px 10px" maxW="2rem" textAlign="center">
                  {el.quantity}
                </Td>
                <Td p="15px 10px" maxW="2rem" textAlign="center">
                  {formatCurrency(el.price)}
                </Td>
                <Td p="15px 10px" maxW="2rem" textAlign="center">
                  {el.discount ? `${el.discount * 100}%` : '---'}
                </Td>
                <Td p="15px 10px" w="2rem">
                  <ActionsMenu data={el} setAction={setAction} />
                </Td>
              </Tr>
            ))}
          </Tbody>
          {isFooter && (
            <Tfoot>
              {headers.map((el, idx) => (
                <Th key={idx}> {el} </Th>
              ))}
            </Tfoot>
          )}
        </Table>
      </TableContainer>
    </>
  )
}

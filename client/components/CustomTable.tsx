import { Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, Image } from '@chakra-ui/react'

//import { formatCurrency } from 'lib/utils/functions'

interface ICustomTable {
  headers: string[]
  data: any
  isFooter?: boolean
}

export default function CustomTable({ headers, data, isFooter = false }: ICustomTable) {
  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="green">
          <Thead>
            <Tr>
              {headers.map((el, idx) => (
                <Th key={idx}> {el} </Th>
              ))}
            </Tr>
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
                <Td p="15px 10px" maxW="2rem" textAlign="center"></Td>
                <Td p="15px 10px" maxW="2rem" textAlign="center">
                  {el.discount ? `${el.discount * 100}%` : '---'}
                </Td>
              </Tr>
            ))}
          </Tbody>
          {isFooter && (
            <Tfoot>
              <Tr>
                {headers.map((el, idx) => (
                  <Th key={idx}> {el} </Th>
                ))}
              </Tr>
            </Tfoot>
          )}
        </Table>
      </TableContainer>
    </>
  )
}

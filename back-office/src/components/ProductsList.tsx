import { 
   Text, Image,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td
  } from '@chakra-ui/react'

  import { ActionsMenu } from "../components"
  
interface IProductsList {
    data: any,
    setAction: any
  }
 const ProductsList = ({ data, setAction }: IProductsList) => {
    return(
        <Table variant='striped' colorScheme='blue'>
          <Thead>
            <Tr>
              { data?.headers.map((header: string) => <Th> {header} </Th>) }
            </Tr>
          </Thead>
  
          <Tbody>
            { data?.products.map((product: any) => 
              <Tr> 
                <Td> <Image src={product?.img} fallbackSrc='https://via.placeholder.com/150' alt='product iamge' borderRadius={'5px'} w="5rem" h="5rem" /> </Td>
                <Td> {product?.name}  </Td>
                <Td> <Text isTruncated w="2rem"> {product?.description} </Text>  </Td>
                <Td> {product?.quantity}  </Td>
                <Td> {product?.price}  </Td>
                <Td> <ActionsMenu productId={product.id} setAction={setAction} /> </Td>
              </Tr>
            )}
          </Tbody>
  
          <Tfoot>
            <Tr>
              { data?.headers.map((header: string) => <Th> {header} </Th>) }
            </Tr>
          </Tfoot>
        </Table>
    )
  }
  export default ProductsList
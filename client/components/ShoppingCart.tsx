import { Button, Divider, Flex, Text } from '@chakra-ui/react'
import { CartItem, CustomDrawer, View } from '../components'
import { formatCurrency } from '../lib/utils/fonctions'
import { useShoppingCartStore } from '../store'

export default function ShoppingCart() {
  const isOpen = useShoppingCartStore((state: any) => state.isOpen)
  const setOpen = useShoppingCartStore((state: any) => state.setOpen)
  const removeItems = useShoppingCartStore((state: any) => state.removeItems)
  const products = useShoppingCartStore((state: any) => state.products)

  const Body = (
    <>
      <View cond={products.length > 0}>
        <Text
          textAlign={'right'}
          color="accent_4"
          fontSize=".9rem"
          mb="1rem"
          _hover={{ cursor: 'pointer', textDecor: 'underline' }}
          onClick={() => removeItems()}
        >
          Remove all{' '}
        </Text>
        {products.map((product: any, idx: number) => (
          <CartItem key={idx} data={product} />
        ))}
        <Divider />

        <Flex justifyContent={'space-between'} mt="1rem">
          <Text fontWeight="600"> Total </Text>

          {products?.length > 0 &&
            formatCurrency(
              products.reduce((total: number, product: any) => {
                const price = total + product?.price * product.quantity
                return product.discount ? price * product?.discount : price
              }, 0)
            )}
        </Flex>
      </View>

      <View cond={products.length === 0}>
        <Text fontSize="1rem" color="gray.500">
          There is not product in your shopping cart{' '}
        </Text>
      </View>
    </>
  )
  const Footer = (
    <Flex flexDir="column" align="center">
      <Divider my="1rem" />
      <Text mb="1rem" fontSize=".9rem" color="gray.500">
        Shipping and taxes calculated at checkout.{' '}
      </Text>
      <Button w="full" bg={'accent_3'} _hover={{ bg: 'accent_2' }} color={'white'}>
        Checkout{' '}
      </Button>
      <Text display="flex" mt="1rem">
        or
        <Text textColor="accent_3" ml="1rem" fontSize=".9rem" _hover={{ cursor: 'pointer' }}>
          Continue Shopping →{' '}
        </Text>
      </Text>
    </Flex>
  )

  return (
    <CustomDrawer
      title="Shopping Cart"
      isOpen={isOpen}
      size="sm"
      onClose={() => setOpen(isOpen)}
      body={Body}
      footer={Footer}
    />
  )
}

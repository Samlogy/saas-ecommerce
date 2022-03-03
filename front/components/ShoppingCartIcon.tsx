import { Box, IconButton, useDisclosure } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai'

import { useShoppingCart } from "../store";

const ShoppingCartIcon = ({ value }: { value: number }) => {
  const { onOpen } = useDisclosure()
  const handleVisibility = useShoppingCart(state => state.handleVisibility)

    return(
      <Box pos="relative" onClick={() => {handleVisibility(); onOpen;}}> 
        { value > 0 ?
          <Box as="span" w="1.3rem" h="1.3rem" color="white" bg="error" display='flex' justifyContent='center' alignItems='center' fontSize='.5rem' textAlign='center' borderRadius={'50%'} m="0" pos="absolute" zIndex={9000} right={0} bottom={'50%'}> 
            { value >= 100 ? '99+' : value } 
          </Box> : ''
        }
        <IconButton aria-label='Shopping Cart' icon={<AiOutlineShoppingCart size={24} />} mr=".2rem" /> 
      </Box>
    )
}

export default ShoppingCartIcon;
import { Box, IconButton } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai'

import { useShoppingCart } from "../store";

const ShoppingCartIcon = ({ value }: { value: number }) => {
  const handleVisibility = useShoppingCart(state => state.handleVisibility)

    return(
      <Box pos="relative" onClick={() => handleVisibility()}> 
        { value > 0 ?
          <Box as="span" fontSize="xs" fontWeight="bold" lineHeight="none" p=".1rem .25rem" color="white" bg="error" display='flex' justifyContent='center' alignItems='center' textAlign='center' borderRadius={'50%'} m="0" pos="absolute" zIndex={9000} left={'40%'} bottom={'65%'}> 
            { value >= 100 ? '99+' : value } 
          </Box> : ''
        }
        <IconButton aria-label='Shopping Cart' icon={<AiOutlineShoppingCart size={24} />} mr=".2rem" /> 
      </Box>
    )
}

export default ShoppingCartIcon;
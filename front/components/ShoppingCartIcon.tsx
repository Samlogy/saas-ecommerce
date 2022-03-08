import { Box, IconButton, useDisclosure, chakra, Icon } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai'

import { useShoppingCart } from "../store";

const ShoppingCartIcon = ({ value }: { value: number }) => {
  const { onOpen } = useDisclosure()
  const handleVisibility = useShoppingCart(state => state.handleVisibility)

    return(
      // <Box pos="relative" onClick={() => {handleVisibility(); onOpen;}}> 
      //   { value > 0 ?
      //     <Box as="span" w="1.3rem" h="1.3rem" color="white" bg="error" display='flex' justifyContent='center' alignItems='center' fontSize='.5rem' textAlign='center' borderRadius={'50%'} m="0" pos="absolute" zIndex={9000} right={0} bottom={'50%'}> 
      //       { value >= 100 ? '99+' : value } 
      //     </Box> : ''
      //   }
      //   <IconButton aria-label='Shopping Cart' icon={<AiOutlineShoppingCart size={24} />} mr=".2rem" /> 
      // </Box>
      <chakra.span pos="relative" display="inline-block">
        <Icon
          boxSize={6}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </Icon>
        { value > 0 ?
          <chakra.span
            pos="absolute" top="-1px" right="-1px" p=".1rem .25rem"
            fontSize="xs" fontWeight="bold" lineHeight="none" color="red.100" transform="translate(50%,-50%)" bg="red.600" rounded="full"
          >
            { value >= 100 ? '99+' : value } 
          </chakra.span> : ''
        }
      </chakra.span>
    )
}

export default ShoppingCartIcon;
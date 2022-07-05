import { IconButton } from '@chakra-ui/react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { isProductFavourite, onAddFavouriteProduct } from '../lib/utils/fonctions'
import { useShoppingCart } from '../store'

export default function FavouriteButton({ id }: { id: number }) {
  const setIsFavourite = useShoppingCart((state: any) => state.setIsFavourite)

  const isFavourite = isProductFavourite(id) ? <AiFillHeart /> : <AiOutlineHeart />

  const handleFavourite = e => {
    e.preventDefault()
    setIsFavourite(id)
    onAddFavouriteProduct(id)
  }

  return (
    <IconButton
      isRound
      bg="white"
      color="gray.900"
      size="sm"
      aria-label="favourite-button"
      _hover={{ transform: 'scale(1.1)' }}
      sx={{ ':hover > svg': { transform: 'scale(1.1)' } }}
      transition="all 0.15s ease"
      icon={isFavourite}
      boxShadow="md"
      onClick={handleFavourite}
      position="absolute"
      top="4"
      right="4"
    />
  )
}

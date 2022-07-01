import { IconButton } from '@chakra-ui/react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { useShoppingCart } from '../store'

const FavouriteButton = ({ id }: { id: number }) => {
  const setIsFavourite = useShoppingCart((state: any) => state.setIsFavourite)
  const products = useShoppingCart((state: any) => state.products)

  const isFavourite = products.find((item: any) => item.id === id)?.isFavourite || false

  const handleFavourite = e => {
    e.preventDefault()
    setIsFavourite(id)
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
      icon={isFavourite ? <AiFillHeart /> : <AiOutlineHeart />}
      boxShadow="md"
      onClick={e => handleFavourite(e)}
      position="absolute"
      top="4"
      right="4"
    />
  )
}

export default FavouriteButton

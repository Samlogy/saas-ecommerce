import { IconButton } from '@chakra-ui/react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { loadState, saveState } from '../lib/utils/localStorage'
import { useShoppingCart } from '../store'

const FavouriteButton = ({ id }: { id: number }) => {
  const setIsFavourite = useShoppingCart((state: any) => state.setIsFavourite)
  //const products = useShoppingCart((state: any) => state.products)

  const isFavourite = () => {
    const data = loadState('favourite-products')
    if (!data) return false
    const isExist = data.find((item: number) => item === id)
    if (isExist) return true
    return false
  }

  const handleFavourite = e => {
    e.preventDefault()
    setIsFavourite(id)
    onAddFavourite(id)
  }
  const onAddFavourite = (id: number) => {
    let data = loadState('favourite-products')
    if (!data) {
      saveState('favourite-products', [id])
      return
    }
    const isExist = data.find((item: any) => item === id)
    if (isExist) {
      data = data.filter((item: any) => item !== id)
      saveState('favourite-products', [...data])
      return
    }
    saveState('favourite-products', [...data, id])
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
      icon={isFavourite() ? <AiFillHeart /> : <AiOutlineHeart />}
      boxShadow="md"
      onClick={e => handleFavourite(e)}
      position="absolute"
      top="4"
      right="4"
    />
  )
}

export default FavouriteButton

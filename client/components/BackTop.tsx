import { IconButton } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const BackTop = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    })
  }

  return (
    <>
      {showButton && (
        <IconButton
          aria-label="scroll-top"
          icon={<FaArrowUp size={20} color="white" />}
          onClick={scrollToTop}
          bg="accent_1"
          _hover={{ bg: 'accent_2', cursor: 'pointer' }}
          position="fixed"
          right="20px"
          bottom="20px"
          w="1rem"
          borderRadius={'10px'}
        />
      )}
    </>
  )
}

export default BackTop

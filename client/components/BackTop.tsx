import { IconButton, useColorModeValue } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { BiUpArrowAlt } from 'react-icons/bi'

export default function BackToTop() {
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
  const bgColor = useColorModeValue('gray_7', 'gray_2')
  const bgHoverColor = useColorModeValue('gray_6', 'gray_3')
  const textColor = useColorModeValue('gray_1', 'gray_7')

  return (
    <>
      {showButton && (
        <IconButton
          aria-label="scroll-top"
          icon={<BiUpArrowAlt size={26} />}
          onClick={scrollToTop}
          color={textColor}
          bg={bgColor}
          transition="all .35s"
          _hover={{
            bg: bgHoverColor,
            cursor: 'pointer',
            boxShadow: '0px 0px 50px 2px rgb(0 0 0 / 25%)'
          }}
          position="fixed"
          right="2%"
          bottom="8%"
          w="1rem"
          zIndex="100"
          borderRadius={'10px'}
        />
      )}
    </>
  )
}

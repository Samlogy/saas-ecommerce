import { useRef, useState, useEffect } from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'

export default function PreviewImage() {
  const [image, setImage] = useState<File>()
  const [preview, setPreview] = useState<string>()
  const fileInputRef = useRef<HTMLInputElement>()

  useEffect(() => {
    if (image) {
      const reader = new FileReader()
      console.log(reader)
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(image)
    } else {
      setPreview(null)
    }
  }, [image])

  console.log(image)

  return (
    <Flex flexDir="column" justifyContent={'center'} alignItems="center" p="0 .5rem" h="2rem">
      <Box pos="relative">
        {preview ? (
          <img onClick={() => setImage(null)} src={preview} />
        ) : (
          <button
            onClick={event => {
              event.preventDefault()
              fileInputRef.current.click()
            }}
          >
            Add Image
          </button>
        )}
        <input
          type="file"
          style={{ display: 'none' }}
          ref={fileInputRef}
          accept="image/*"
          onChange={event => {
            const file = event.target.files[0]
            if (file && file.type.substr(0, 5) === 'image') {
              setImage(file)
            } else {
              setImage(null)
            }
          }}
        />
      </Box>
    </Flex>
  )
}

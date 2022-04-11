import { Flex, Box, Image, Button } from '@chakra-ui/react'
import { useRef, useState, useEffect } from 'react'

interface IPreviewImages {
  multiple?: boolean
}
function PreviewImages({ multiple = false }: IPreviewImages) {
  const [images, setImages] = useState<any>()
  const [previews, setPreviews] = useState<any>()
  const fileInputRef = useRef<any>()

  useEffect(() => {
    if (images) {
      if (multiple) {
        const arrImgUrl = images.map((img: any) => URL.createObjectURL(img))
        setPreviews(arrImgUrl as string[])
      } else {
        const img = URL.createObjectURL(images)
        setPreviews(img as string)
      }
    } else setPreviews(null)
  }, [images])

  const handleMultiple = (val: any) => {
    let files = val
    if (files.length === 1) files = [files[0]]
    else files = [...files]
    files.forEach((file: any, idx: any) => {
      if (file && file.type.substr(0, 5) === 'image') {
        if (idx === 0) setImages([file])
        else if (idx >= 1) setImages((prev: any) => [...prev, file])
      } else {
        setImages(null)
      }
    })
  }
  const handleSingle = (val: any) => {
    const file = val
    if (file && file.type.substr(0, 5) === 'image') {
      setImages(file)
    } else {
      setImages(null)
    }
  }

  const setImagePreview = (e: any) => {
    if (multiple) handleMultiple(e.target.files)
    else handleSingle(e.target.files[0])
  }

  const handleClick = (e: any) => {
    e.preventDefault()
    fileInputRef.current?.click()
  }

  return (
    <Flex
      flexDir="column"
      justifyContent={'center'}
      alignItems="center"
      p="0 .5rem"
      w="fit-content"
    >
      {previews ? (
        <Flex flexWrap={'wrap'} justifyContent="space-between" w="full">
          {previews.map((img: any) => (
            <Image
              boxSize="25px"
              objectFit="cover"
              onClick={() => setImages(null)}
              src={img}
              borderRadius="10px"
              mb="1rem"
            />
          ))}
        </Flex>
      ) : (
        <Button onClick={e => handleClick(e)}>Add Image</Button>
      )}
      <input
        type="file"
        style={{ display: 'none' }}
        ref={fileInputRef}
        accept="image/*"
        multiple={multiple}
        onChange={e => setImagePreview(e)}
      />
    </Flex>
  )
}

export default PreviewImages

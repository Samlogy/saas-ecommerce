import { Flex, Image } from '@chakra-ui/react'
import { InputField } from './'

interface IEditImage {
  isMultiple?: boolean
  isPreview?: boolean
  avatar: IAvatar
  setAvatar: any
}
interface IAvatar {
  isLoading: boolean
  error: string
  previews: string[]
  images: any
}
export default function EditImage({
  isMultiple = false,
  isPreview = false,
  avatar,
  setAvatar
}: IEditImage) {
  // image
  const handleImage = (e: any) => {
    isMultiple ? handleMutli(e) : handleSingle(e)
  }
  function handleMutli(e: any) {
    let baseImages = e.target.files
    baseImages = [...baseImages]
    if (isPreview) {
      const imgPreview = baseImages.map((el: any) => URL.createObjectURL(el))
      setAvatar({ ...avatar, previews: imgPreview, images: baseImages })
      return
    }
    setAvatar({ ...avatar, images: baseImages })
  }
  function handleSingle(e: any) {
    const imgBase = e.target.files[0]
    if (isPreview) {
      const imgPreview = URL.createObjectURL(imgBase)
      setAvatar({ ...avatar, previews: [imgPreview], images: [imgBase] })
      return
    }
    setAvatar({ ...avatar, images: [imgBase] })
  }

  return (
    <InputField
      type="file"
      multiple={isMultiple}
      accept="image/*"
      name="image"
      label="image"
      placeholder="image"
      onChange={handleImage}
      w={['full', '30rem']}
      px="0"
      border="none"
    />
  )
}

interface IDisplayImage {
  data: any
}
function DisplayImage({ data }: IDisplayImage) {
  return (
    <Flex justify="flex-start" align="center">
      {data &&
        data.map((img: string, idx: number) => (
          <Image
            key={idx}
            boxSize="70px"
            objectFit="cover"
            src={img}
            fallbackSrc="https://via.placeholder.com/100"
            alt="Image"
            m="0 .25rem .5rem 0"
            borderRadius="5px"
          />
        ))}
    </Flex>
  )
}

import { Flex, Image } from '@chakra-ui/react'
import { InputField } from 'components'

interface IHandleImage {
  isMultiple?: boolean
  isPreview?: boolean
  avatar?: any
  setAvatar?: any
  label?: string
  isEdit?: boolean
}
interface IDisplayImage {
  data: any
}
interface IEditImage {
  isMultiple?: boolean
  isPreview?: boolean
  avatar: IAvatar
  label?: string
  setAvatar: any
}
interface IAvatar {
  isLoading: boolean
  error: string
  previews: string[]
  images: any
}
export default function HandleImage(props: IHandleImage) {
  const { isMultiple, isPreview, avatar, setAvatar, label = '', isEdit } = props
  if (isEdit) {
    return (
      <EditImage
        label={label}
        avatar={avatar}
        setAvatar={setAvatar}
        isMultiple={isMultiple}
        isPreview={isPreview}
      />
    )
  }
  return <DisplayImage data={avatar?.previews} />
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

function EditImage({
  isMultiple = false,
  isPreview = false,
  label = '',
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
      label={label}
      placeholder="image"
      onChange={handleImage}
      w="full"
      px="0"
      border="none"
    />
  )
}

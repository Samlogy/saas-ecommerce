import { useState } from 'react'
import { InputField } from 'components'

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
  console.log(avatar)
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

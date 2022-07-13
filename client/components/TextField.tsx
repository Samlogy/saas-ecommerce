import React from 'react'
import { Textarea, FormControl, FormLabel } from '@chakra-ui/react'
import { ErrorMessage } from '../components'

interface ITextField {
  errors?: any
  register?: any
  name: string
  label?: string
  placeholder?: string
  [restProps: string]: any
}

export default function TextField({
  errors,
  register,
  name,
  label,
  placeholder,
  ...restProps
}: ITextField) {
  const width = restProps.w ? restProps.w : '20rem'
  const height = restProps.h ? restProps.h : '7rem'
  return (
    <FormControl id={name} mb=".5rem" w={width}>
      {label && <FormLabel> {label} </FormLabel>}
      {register ? (
        <Textarea
          placeholder={placeholder}
          _placeholder={{ color: 'gray_4' }}
          isInvalid={errors[name] ? true : false}
          focusBorderColor={errors[name] ? 'error' : 'accent_5'}
          borderRadius="5px"
          h={height}
          {...register(name)}
          {...restProps}
        />
      ) : (
        <Textarea
          name={name}
          placeholder={placeholder}
          _placeholder={{ color: 'gray_4' }}
          focusBorderColor={'accent_5'}
          borderRadius="5px"
          h={height}
          {...restProps}
        />
      )}
      {register && <ErrorMessage error={errors[name]?.message} />}
    </FormControl>
  )
}

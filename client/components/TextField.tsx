import React from 'react'
import { Textarea, FormControl, FormLabel, useColorModeValue } from '@chakra-ui/react'
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
  const itemBgColor = useColorModeValue('white', 'gray_3')
  return (
    <FormControl id={name} mb="1em" w={restProps.w || ['90%', '20rem']}>
      {label && <FormLabel> {label} </FormLabel>}
      {register ? (
        <Textarea
          placeholder={placeholder}
          _placeholder={{ color: 'gray_4' }}
          isInvalid={errors[name] ? true : false}
          focusBorderColor={errors[name] ? 'error' : 'accent_5'}
          borderRadius="5px"
          bg={itemBgColor}
          h={restProps.h || '7em'}
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
          h={restProps.h || '7em'}
          bg={itemBgColor}
          {...restProps}
        />
      )}
      {register && <ErrorMessage error={errors[name]?.message} />}
    </FormControl>
  )
}

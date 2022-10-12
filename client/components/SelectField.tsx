import React from 'react'
import { Select, FormControl, FormLabel, useColorModeValue } from '@chakra-ui/react'
import { ErrorMessage } from '../components'

interface ISelectField {
  errors?: any
  register?: any
  name: string
  label?: string
  placeholder?: string
  children: any
  icon?: any
  [restProps: string]: any
}

export default function SelectField({
  errors,
  register,
  name,
  label,
  placeholder,
  icon,
  children,
  ...restProps
}: ISelectField) {
  const itemBgColor = useColorModeValue('white', 'gray_2')
  return (
    <FormControl id={name} mb="1em" w={restProps.w || '20em'}>
      {label && <FormLabel> {label} </FormLabel>}
      {register ? (
        <Select
          placeholder={placeholder}
          _placeholder={{ color: 'gray_4' }}
          isInvalid={errors[name] && register ? true : false}
          focusBorderColor={errors[name] && register ? 'error' : 'accent_5'}
          borderRadius="5px"
          icon={icon && icon}
          bg={itemBgColor}
          {...register(name)}
          {...restProps}
        >
          {children}
        </Select>
      ) : (
        <Select
          name={name}
          placeholder={placeholder}
          _placeholder={{ color: 'gray_4' }}
          focusBorderColor={'accent_5'}
          borderRadius="5px"
          icon={icon && icon}
          bg={itemBgColor}
          {...restProps}
        >
          {children}
        </Select>
      )}
      {register && <ErrorMessage error={errors[name]?.message} />}
    </FormControl>
  )
}

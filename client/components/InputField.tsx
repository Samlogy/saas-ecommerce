import React from 'react'
import {
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorModeValue
} from '@chakra-ui/react'
import { ErrorMessage } from '../components'

interface IInputField {
  errors?: any
  register?: any
  name: string
  label?: string
  placeholder?: string
  type?: string
  iconLeft?: any
  iconRight?: any
  [restProps: string]: any
}
export default function InputField({
  errors,
  register,
  name,
  label,
  placeholder,
  type = 'text',
  iconLeft,
  iconRight,
  ...restProps
}: IInputField) {
  const width = restProps.w ? restProps.w : '20rem'
  const itemBgColor = useColorModeValue('gray_8', 'gray_2')
  return (
    <FormControl id={name} mb=".5rem" w={width}>
      {label && <FormLabel> {label} </FormLabel>}
      <InputGroup>
        {iconLeft && <InputLeftElement children={iconLeft} />}
        {register ? (
          <Input
            type={type}
            placeholder={placeholder}
            _placeholder={{ color: 'gray_4' }}
            isInvalid={errors[name] && register ? true : false}
            focusBorderColor={errors[name] && register ? 'error' : 'accent_5'}
            borderRadius="10px"
            bg={itemBgColor}
            {...register(name)}
            {...restProps}
          />
        ) : (
          <Input
            type={type}
            name={name}
            placeholder={placeholder}
            _placeholder={{ color: 'gray_4' }}
            focusBorderColor="accent_5"
            borderRadius="10px"
            bg={itemBgColor}
            {...restProps}
          />
        )}
        {iconRight && <InputRightElement children={iconRight} />}
      </InputGroup>

      {register && <ErrorMessage error={errors[name]?.message} />}
    </FormControl>
  )
}

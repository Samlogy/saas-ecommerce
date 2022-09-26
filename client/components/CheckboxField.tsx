import { Checkbox, FormControl, FormLabel, useColorModeValue } from '@chakra-ui/react'
import { ErrorMessage } from '../components'

interface ICheckboxField {
  errors?: any
  register?: any
  name: string
  label?: string
  [restProps: string]: any
}
export default function CheckboxField({
  errors,
  register,
  name,
  label,
  ...restProps
}: ICheckboxField) {
  const width = restProps.w ? restProps.w : '20rem'
  return (
    <FormControl id={name} mb="1em" w={width}>
      {label && <FormLabel> {label} </FormLabel>}

      {register ? (
        <Checkbox
          colorScheme="green"
          isInvalid={errors[name] && register ? true : false}
          focusBorderColor={errors[name] && register ? 'error' : 'accent_5'}
          {...register(name)}
          {...restProps}
        />
      ) : (
        <Checkbox name={name} colorScheme="green" {...restProps}>
          {label && label}
        </Checkbox>
      )}

      {register && <ErrorMessage error={errors[name]?.message} />}
    </FormControl>
  )
}

import { FormControl, FormLabel, Radio, RadioGroup } from '@chakra-ui/react'
import { ErrorMessage } from '../components'

interface IRadioField {
  fields: any
  errors?: any
  register?: any
  name: string
  label?: string
  [restProps: string]: any
}
export default function RadioField({
  fields,
  errors,
  register,
  name,
  label,
  ...restProps
}: IRadioField) {
  const width = restProps.w ? restProps.w : '20rem'
  return (
    <FormControl id={name} mb="1em" w={width}>
      {label && <FormLabel> {label} </FormLabel>}

      <RadioGroup colorScheme="green" flexDir="column">
        {register
          ? fields?.map((el: any, idx: number) => (
              <Radio
                value={el}
                key={idx}
                isInvalid={errors[name] && register ? true : false}
                {...register(name)}
                name={name}
              >
                {el}
              </Radio>
            ))
          : fields?.map((el: any, idx: number) => (
              <Radio value={el} key={idx} name={name}>
                {el}
              </Radio>
            ))}
      </RadioGroup>

      {register && <ErrorMessage error={errors[name]?.message} />}
    </FormControl>
  )
}

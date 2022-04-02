import {
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea
} from '@chakra-ui/react'
import { MdPhone, MdEmail, MdLocationOn, MdFacebook, MdOutlineEmail } from 'react-icons/md'
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { Layout, ErrorMessage } from '../components'
import { contactSchema } from '../lib/validation'

const contacts = [
  {
    data: '+91-988888888',
    icon: <MdPhone color="#38a169" size="20px" />
  },
  {
    data: 'email@example.com',
    icon: <MdEmail color="#38a169" size="20px" />
  },
  {
    data: 'Bali, Indonesia',
    icon: <MdLocationOn color="#38a169" size="20px" />
  }
]
const socialMedia = [
  <MdFacebook size="28px" color="#38a169" />,
  <BsGithub size="28px" color="#38a169" />,
  <BsDiscord size="28px" color="#38a169" />
]

export default function contact() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(contactSchema)
  })

  const onContact = async (contact: any) => {
    console.log(contact)
    // api call
  }

  return (
    <Layout>
      <Flex flexDir="column" justifyContent={'center'} alignItems="center">
        <Heading fontSize="1.5rem" mr="auto" mb="2rem">
          {' '}
          Contact Us{' '}
        </Heading>
        <Flex
          flexDir={'row'}
          flexWrap={'wrap'}
          justifyContent={['center', '', 'space-between', '']}
          borderRadius={'10px'}
          boxShadow="md"
          p="1.5rem 2rem"
        >
          <Flex flexDir="column" justifyContent={'space-between'} p="1.5rem 2rem">
            <Text color="gray.500" fontSize={'1rem'} mb="1.5rem" maxW="20rem" minW="15rem">
              Reach out to us today via any of the given information
            </Text>

            <Flex flexDir={'column'} alignItems="flex-start" mb="1rem">
              {contacts.map(contact => (
                <Flex justifyContent={'space-between'} maxW="15rem">
                  <Box as="span" mr="1rem">
                    {' '}
                    {contact.icon}{' '}
                  </Box>
                  <Text fontSize="1rem" color="black" maxW="10rem">
                    {' '}
                    {contact.data}{' '}
                  </Text>
                </Flex>
              ))}
            </Flex>

            <Flex
              flexDir="row"
              pl={0}
              alignItems={'center'}
              justifyContent={['center', '', 'start', '']}
            >
              {socialMedia.map(icon => (
                <IconButton
                  aria-label="social media icon"
                  variant="ghost"
                  size="lg"
                  py=".5rem"
                  mr={['1rem', '', '0', '']}
                  isRound={true}
                  icon={icon}
                />
              ))}
            </Flex>
          </Flex>

          <Box p="1.5rem 2rem">
            <form onSubmit={handleSubmit(onContact)}>
              <FormControl id="name" mb=".5rem">
                <FormLabel>
                  Your Name
                  <Box as="span" color="gray.500" fontSize=".85rem" fontStyle={'italic'}>
                    {' '}
                    (Optional){' '}
                  </Box>
                </FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement pointerEvents="none" children={<BsPerson color="gray.800" />} />
                  <Input
                    type="text"
                    size="md"
                    isInvalid={errors.name ? true : false}
                    focusBorderColor={errors.name ? 'error' : 'accent_6'}
                    errorBorderColor="error"
                    borderColor="gray.300"
                    borderRadius="4px"
                    {...register('name')}
                  />
                </InputGroup>
                {errors.name && <ErrorMessage error={errors.name.message} />}
              </FormControl>

              <FormControl id="name" mb=".5rem">
                <FormLabel> Email </FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<MdOutlineEmail color="gray.800" />}
                  />
                  <Input
                    type="email"
                    size="md"
                    isInvalid={errors.email ? true : false}
                    focusBorderColor={errors.email ? 'error' : 'accent_6'}
                    errorBorderColor="error"
                    borderColor="gray.300"
                    borderRadius="4px"
                    {...register('email')}
                  />
                </InputGroup>
                {errors.email && <ErrorMessage error={errors.email.message} />}
              </FormControl>

              <FormControl id="name" mb=".5rem">
                <FormLabel> Message </FormLabel>
                <Textarea
                  _hover={{ borderRadius: 'gray.300' }}
                  placeholder="message"
                  isInvalid={errors.message ? true : false}
                  focusBorderColor={errors.message ? 'error' : 'accent_6'}
                  errorBorderColor="error"
                  borderColor="gray.300"
                  borderRadius="4px"
                  {...register('message')}
                />
                {errors.message && <ErrorMessage error={errors.message.message} />}
              </FormControl>

              <FormControl id="name" float="right" mb=".5rem">
                <Button type="submit" bg="accent_4" color="white" _hover={{ bg: 'accent_3' }}>
                  Send Message
                </Button>
              </FormControl>
            </form>
          </Box>
        </Flex>
      </Flex>
    </Layout>
  )
}

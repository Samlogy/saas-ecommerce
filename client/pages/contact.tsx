import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  IconButton,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { BsDiscord, BsGithub, BsPerson } from 'react-icons/bs'
import { MdEmail, MdFacebook, MdLocationOn, MdOutlineEmail, MdPhone } from 'react-icons/md'

import { InputField, Layout, TextField } from '../components'
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

  const bgColor = useColorModeValue('gray_9', 'gray_2')
  const textColor = useColorModeValue('balck', 'white')

  return (
    <Layout isHeaderVisible isFooterVisible>
      <Flex
        flexDir="column"
        justifyContent={'center'}
        alignItems="center"
        w={['15rem', '30rem', '', '50rem']}
        mx="auto"
      >
        <Heading fontSize="1.5rem" mb="2rem" textTransform={'uppercase'} mr="auto" w="full">
          Contact Us
        </Heading>
        <Flex
          flexDir={'row'}
          flexWrap={'wrap'}
          justifyContent={['center', '', '', 'space-between']}
          borderRadius={'10px'}
          boxShadow="md"
          p={['1.5rem 1rem', '1.5rem 2rem', '', '']}
          bg={bgColor}
        >
          <Flex
            flexDir="column"
            justifyContent={'space-between'}
            alignItems={['center', '', '', 'flex-start']}
            mb={['2rem', '', '', '0']}
          >
            <Text color={textColor} fontSize={'1rem'} mb="1.5rem" maxW="20rem">
              Reach out to us today via any of the given information
            </Text>

            <Flex
              flexDir={'column'}
              justifyContent="center"
              alignItems={['center', '', '', 'flex-start']}
              mb="1rem"
            >
              {contacts.map(contact => (
                <Flex justifyContent={'space-between'} w="15rem" mb="1rem">
                  <Box as="span" mr="1rem" color={'gray_9'}>
                    {contact.icon}
                  </Box>
                  <Text fontSize="1rem" color={textColor} w="12rem">
                    {contact.data}
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
              {socialMedia.map((icon, idx) => (
                <IconButton
                  aria-label="social media icon"
                  variant="ghost"
                  size="lg"
                  py=".5rem"
                  mr={['1rem', '', '0', '']}
                  isRound={true}
                  icon={icon}
                  key={idx}
                />
              ))}
            </Flex>
          </Flex>

          <Flex flexDir="column" justifyContent={'space-between'} mx={['auto', '', '0', '']}>
            <form onSubmit={handleSubmit(onContact)}>
              <InputField
                name="name"
                register={register}
                errors={errors}
                label="Your Name (Optional)"
                iconLeft={<BsPerson color="gray_1" />}
              />

              <InputField
                name="email"
                register={register}
                errors={errors}
                label="Email"
                iconLeft={<MdOutlineEmail color="gray_1" />}
              />

              <TextField
                name="message"
                register={register}
                errors={errors}
                label="Message"
                iconLeft={<MdOutlineEmail color="gray_1" />}
              />

              <FormControl id="name" float="right" mb=".5rem">
                <Button type="submit" bg="accent_4" color="white" _hover={{ bg: 'accent_3' }}>
                  Send Message
                </Button>
              </FormControl>
            </form>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  )
}

import { Box, Button, Flex, Link as ChakraLink, Text, useColorModeValue } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { MdEmail, MdLocationOn, MdOutlineEmail, MdPhone } from 'react-icons/md'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import Link from 'next/link'

//import { supabase } from '../lib/supabaseClient'
import { subscribeSchema } from '../lib/validation'

const DynamiFeedBack = dynamic(() => import('./FeedBack'))
//const DynamicCustomButton = dynamic(() => import('./CustomButton'))
const DynamicInputField = dynamic(() => import('./InputField'))

const services = ['web development', 'mobile developement', 'website SEO', 'Hosting']
const sitemap = ['home', 'about', 'projects', 'services', 'contact']
const contacts = [
  {
    data: '+213-540498180',
    icon: <MdPhone size="20px" />
  },
  {
    data: 'senanisammy@gmail.com',
    icon: <MdEmail size="20px" />
  },
  {
    data: 'Algeria, Tizi-Ouzou',
    icon: <MdLocationOn size="20px" />
  }
]

export default function Footer() {
  const bgColor = useColorModeValue('white', 'gray_2')
  const logoColor = useColorModeValue('accent_4', 'accent_7')
  const accentHoverColor = useColorModeValue('accent_2', 'accent_7')
  const inputColor = useColorModeValue('gray_8', 'gray_3')

  const [feedBack, setFeedBack] = useState({
    isOpen: false,
    type: ''
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(subscribeSchema)
  })

  const onSubscribe = async data => {
    try {
      /*
      const { error } = await supabase.from('subscriber').insert({ email: data?.emailSub }).single()
      if (!error) {
        onHandleFeedBack(true, 'success')
        return
      }
     */
      onHandleFeedBack(true, 'error')
    } catch (err: any) {
      onHandleFeedBack(true, 'error')
    }
  }

  const onHandleFeedBack = (isOpen: boolean, type?: string) => {
    setFeedBack(prevState => {
      return {
        ...prevState,
        isOpen,
        type
      }
    })
  }

  return (
    <Flex
      justify="space-between"
      align="center"
      flexWrap="wrap"
      p="2em 1.5em"
      bg={bgColor}
      boxShadow="dark-lg"
    >
      <DynamiFeedBack
        isOpen={feedBack?.isOpen}
        onClose={() => onHandleFeedBack(false, '')}
        type={feedBack?.type}
      />
      <Flex flexDir="column" w="20rem" mb="1em">
        <Box mb="1em" fontWeight="600" fontSize="1.2em" fontStyle="italic" color={logoColor}>
          E-commerce
        </Box>
        <Text mb="1em" fontWeight="600" fontSize="1.1em">
          Subscribe to our newsletter to stay updated
        </Text>
        <form onSubmit={handleSubmit(onSubscribe)}>
          <Flex flexWrap="wrap">
            <DynamicInputField
              name="emailSub"
              register={register}
              errors={errors}
              autoComplete="on"
              placeholder="Email"
              iconLeft={<MdOutlineEmail color="gray_1" />}
              bg={inputColor}
              w="15rem"
            />

            <Button type="submit" variant="solid" colorScheme="green" ml=".25em" w="5.5em">
              Subscribe
            </Button>
          </Flex>
        </form>
      </Flex>

      <Flex flexDir="column" justify="space-between" mb="1em" w="8rem" h="10em">
        <Text mb="1em" fontWeight="600" fontSize="1.1em">
          Site map
        </Text>
        <Flex flexDir="column">
          {sitemap.map((el: any, idx: number) => (
            <Link key={idx} href={`#${el}`} passHref>
              <a
                style={{
                  width: '4.5em',
                  textTransform: 'capitalize',
                  marginBottom: '.25em',
                  fontSize: '.95rem'
                }}
              >
                {el}
              </a>
            </Link>
          ))}
        </Flex>
      </Flex>

      <Flex flexDir="column" justify="space-between" mb="1em" w="auto" h="10em">
        <Text mb="1em" fontWeight="600" fontSize="1.1em">
          Our Services
        </Text>
        <Flex flexDir="column">
          {services.map((el: any, idx: number) => (
            <Text
              key={idx}
              textTransform="capitalize"
              mb=".25em"
              fontSize=".95rem"
              _hover={{ color: accentHoverColor, cursor: 'pointer' }}
            >
              {el}
            </Text>
          ))}
        </Flex>
      </Flex>

      <Flex flexDir="column" justify="space-between" mb="1em" w="auto" h="11em" mt="1rem">
        <Text mb="1em" fontWeight="600" fontSize="1.1em">
          Get in Touch
        </Text>
        <Flex flexDir="column">
          {contacts.map((el, idx) => (
            <Flex key={idx} mb=".25em">
              <Box as="span" color={logoColor}>
                {el.icon}
              </Box>
              <Box
                as="span"
                ml=".5em"
                fontSize=".95rem"
                _hover={{ color: accentHoverColor, cursor: 'pointer' }}
              >
                {el.data}
              </Box>
            </Flex>
          ))}
        </Flex>

        <Link href="/contact" passHref>
          <Button variant="outline" colorScheme="green" mt="1em">
            contact us
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}

import { Flex, Image, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../components'

export default function Services({ data }: { data: any }) {
  const bgColor = useColorModeValue('gray_9', 'gray_2')
  return (
    <SectionWrapper title="Some Services We Offer">
      <Flex flexDir="row" flexWrap="wrap" justifyContent={['center', 'space-between']}>
        {data.length > 0 &&
          data.map((service: any, idx: number) => (
            <Flex
              key={idx}
              flexDir={'column'}
              justifyContent="center"
              alignItems={'center'}
              boxShadow={'md'}
              w="15rem"
              borderRadius={'10px'}
              p="2rem 1.5rem"
              m={'.5rem'}
              bg={bgColor}
              // anim
              as={motion.div}
              layout
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Text fontWeight={'600'} fontSize="1.3rem" textAlign="center" mb=".75rem">
                {service.title}{' '}
              </Text>
              <Image src={service.image} boxSize={['135px', '', '', '']} />
              <Text fontSize=".9rem" mb=".75rem">
                {service.text}{' '}
              </Text>
              <Text fontWeight={'bold'} color={'accent_4'}>
                Learn More{' '}
              </Text>
            </Flex>
          ))}
      </Flex>
    </SectionWrapper>
  )
}

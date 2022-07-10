import { Heading, Flex } from '@chakra-ui/react'

import { Layout, CustomAccordion } from 'components'

const data = ['s1', 's2', 's3']
export default function Home() {
  const services = <Flex flexDir={'column'}>{data.map((el, idx) => el)}</Flex>
  const qa = <Flex flexDir={'column'}>{data.map((el, idx) => el)}</Flex>
  const about = <Flex flexDir={'column'}>{data.map((el, idx) => el)}</Flex>
  const deal = <Flex flexDir={'column'}>{data.map((el, idx) => el)}</Flex>

  return (
    <Layout isHeaderVisible>
      <Heading fontSize="1.5rem" textTransform={'uppercase'} mr="auto" w="full" mb="2rem">
        Home
      </Heading>
      <CustomAccordion title="services" body={services} />
      <CustomAccordion title="questions & answers" body={qa} />
      <CustomAccordion title="about" body={about} />
      <CustomAccordion title="deal" body={deal} />
    </Layout>
  )
}

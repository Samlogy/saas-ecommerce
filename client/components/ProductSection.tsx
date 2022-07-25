import { Flex } from '@chakra-ui/react'
import { ProductCard, SectionWrapper } from '../components'

export default function ProductSection({ title, data }: { title: string; data: any }) {
  return (
    <SectionWrapper title={title}>
      <Flex flexDir="row" flexWrap="wrap" justify={['center', '', 'space-between']}>
        {data.length > 0 &&
          data.map((product: any) => <ProductCard key={product?.id} data={product} readOnly />)}
      </Flex>
    </SectionWrapper>
  )
}

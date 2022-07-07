import { Flex } from '@chakra-ui/react'
import { ProductCard, SectionWrapper } from '../components'

export default function ProductsOnTrend({ data }: { data: any }) {
  return (
    <SectionWrapper title="Check out our products">
      <Flex flexDir="row" flexWrap="wrap" justifyContent={['center', '', 'space-between']}>
        {data.length > 0 &&
          data.map((product: any) => <ProductCard key={product?.id} data={product} readOnly />)}
      </Flex>
    </SectionWrapper>
  )
}

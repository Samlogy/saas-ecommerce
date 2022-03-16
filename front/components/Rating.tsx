import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import { useState, useMemo } from 'react'
import { Flex, Box } from '@chakra-ui/react'

const Rating = ({ initRate, reviews }: { initRate?: number; reviews?: number }) => {
  const [rate, setRate] = useState(initRate || null)
  const [hover, setHover] = useState(null)

  return (
    <Flex flexDir={'row'}>
      <Flex>
        {[1, 2, 3, 4, 5].map((star, idx: number) => {
          const currentRate = idx + 1
          return (
            <Box as="label" key={idx}>
              <input
                type="radio"
                name="rate"
                style={{ display: 'none' }}
                value={currentRate}
                onClick={() => setRate(currentRate)}
              />
              <BsStarFill
                className="star"
                color={currentRate <= (hover || rate) ? '#ffc107' : '#e4e5e9'}
                size={20}
                onMouseEnter={() => setHover(currentRate)}
                onMouseLeave={() => setHover(null)}
              />
            </Box>
          )
        })}
      </Flex>
      <Box as="span" ml=".5rem">
        {' '}
        {reviews}{' '}
      </Box>
      <Box as="span" ml=".1rem">
        {' '}
        Reviews{' '}
      </Box>
    </Flex>
  )
}
export default Rating

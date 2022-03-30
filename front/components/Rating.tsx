import { Box, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { BsStarFill } from 'react-icons/bs'

interface IRating {
  initRate?: number
  reviews?: number
}

const Rating = ({ initRate, reviews }: IRating) => {
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

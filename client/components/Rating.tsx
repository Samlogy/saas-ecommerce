import { Box, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { BsStarFill } from 'react-icons/bs'

interface IRating {
  initRate?: number
  readOnly?: boolean
}

export default function Rating({ initRate, readOnly }: IRating) {
  const [rate, setRate] = useState(initRate || null)
  const [hover, setHover] = useState(null)

  return (
    <Flex flexDir={'row'}>
      <Flex>
        {readOnly
          ? [1, 2, 3, 4, 5].map((star, idx) => {
              const currentRate = idx + 1
              return (
                <Box as="label" key={idx}>
                  <BsStarFill
                    className="star"
                    color={currentRate <= (hover || rate) ? '#ffc107' : '#e4e5e9'}
                    size={20}
                  />
                </Box>
              )
            })
          : [1, 2, 3, 4, 5].map((star, idx: number) => {
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
    </Flex>
  )
}

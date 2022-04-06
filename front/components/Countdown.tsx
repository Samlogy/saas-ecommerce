import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const calculateTimeLeft = (dueDay: any) => {
  let year = new Date().getFullYear()
  const difference = +dueDay - +new Date()
  //   console.log('difference: ', difference)
  let timeLeft = {}

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }
  }

  return timeLeft
}

interface ICountdown {
  initYear: number
  dueDay: any
}

function Countdown({ initYear, dueDay }: ICountdown) {
  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft(dueDay))
  const [year] = useState(initYear)

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(dueDay))
    }, 1000)
  })

  return (
    <Flex m="0rem 0 1rem 0">
      <CountBox data={timeLeft.days} type="days" />
      <CountBox data={timeLeft.hours} type="hours" />
      <CountBox data={timeLeft.minutes} type="minutes" />
      <CountBox data={timeLeft.seconds} type="seconds" />
    </Flex>
  )
}

export default Countdown

const CountBox = ({ data, type }: { data: any; type: any }) => {
  const bgColor = useColorModeValue('white', 'gray_2')
  const dataType =
    type === 'days'
      ? 'Days'
      : type === 'hours'
      ? 'Hours'
      : type === 'minutes'
      ? 'Minutes'
      : type === 'seconds'
      ? 'Seconds'
      : ''
  return (
    <Flex
      flexDir={'column'}
      alignItems="center"
      boxShadow="lg"
      p=".5rem"
      w="4rem"
      borderRadius={'10px'}
      m="0.5rem"
      bg={bgColor}
    >
      <Box as="span" fontWeight={'600'} fontSize="1rem">
        {' '}
        {data}{' '}
      </Box>
      <Box as="span" fontSize={'.8rem'}>
        {' '}
        {dataType}{' '}
      </Box>
    </Flex>
  )
}

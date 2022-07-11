import { Box, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react'

interface IDisplayRowData {
  label: string
  data: any
}

export default function DisplayRowData({ label, data }: IDisplayRowData) {
  const isDataExist = (data: any) => {
    if (Array.isArray(data) && data.length === 0) return false
    if (Object.keys(data).length === 0) return false
    if (!data) return false
    return true
  }

  return (
    <Flex mb=".5rem">
      <Box as="span" w="6.25rem" textAlign={'left'} fontWeight={'600'}>
        {label}:
      </Box>

      {!isDataExist(data) ? (
        <Box as="span" fontSize="1rem" fontWeight="400" ml=".5rem" color="gray_4">
          ---
        </Box>
      ) : Array.isArray(data) ? (
        <UnorderedList textAlign={'left'}>
          {data.map((item, idx) => (
            <ListItem key={idx} fontSize="1rem" fontWeight="400" ml=".5rem" color="gray_4">
              {item}
            </ListItem>
          ))}
        </UnorderedList>
      ) : (
        <Text
          textAlign={'left'}
          w="auto"
          fontSize="1rem"
          fontWeight="400"
          ml=".5rem"
          color="gray_4"
        >
          {data}
        </Text>
      )}
    </Flex>
  )
}

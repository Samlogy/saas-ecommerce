import { Flex, Box, Text } from "@chakra-ui/react"

interface IComment {
    id: number,
    name: string,
    createdAt: string,
    comment: string
}

const Comment = ({ data }: { data: IComment }) => {
    return(
        <Flex key={data.id} flexDir="row" flexWrap="wrap" alignItems="flex-start" my="1.5rem" p='1rem' boxShadow='md' borderRadius={'5px'}>
            <Flex alignItems='center'>
                <Box as="span" fontWeight="600"> {data.name} </Box>
                <Box as="span" fontWeight='300' fontSize='.8rem' ml='.25rem'> on </Box>
                <Box as="span" fontStyle={'italic'} fontSize='.8rem' ml='.5rem'> {data.createdAt} </Box>
            </Flex>
            <Text fontSize={'1rem'} fontWeight='300'> {data.comment} </Text>
        </Flex>
    )
}

export default Comment;
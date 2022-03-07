import { IconButton, Flex, Button } from '@chakra-ui/react';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { NumberSchema } from 'yup';

const Pagination = () => {
    const num = [1, 2, 3]
    return(
        <Flex flexDir='row' justifyContent={'space-between'} w="20rem" m="1.5rem auto">
            <IconButton aria-label='arrow left' icon={<RiArrowLeftSLine size={22} color='white' />} 
                bg="blue.500" borderRadius={'full'} _hover={{ bg: 'blue.600' }}  /> 

            <Flex flexDir='row' justifyContent={'center'}>
                {
                    num.map(el => 
                    <Button bg="blue.500" borderRadius={'full'} color='white' fontSize='.9rem' mx=".25rem" _hover={{ bg: 'blue.600' }}> {el} </Button>)
                }
            </Flex> 

            <IconButton aria-label='arrow right' icon={<RiArrowRightSLine size={22} color='white' />} 
                bg="blue.500" borderRadius={'full'} _hover={{ bg: 'blue.600' }}  /> 
        </Flex>
    )
}

export default Pagination
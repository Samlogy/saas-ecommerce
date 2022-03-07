import { IconButton, Flex, Button } from '@chakra-ui/react';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { NumberSchema } from 'yup';

const Pagination = () => {
    const num = [1, 2, 3]
    
    return(
        <Flex flexDir='row' justifyContent={'space-between'} w="60%" m="1.5rem auto">
            <Button color='gray.600' fontSize='.9rem' mx=".25rem" _hover={{ bg: 'gray.400', color: 'white' }}> Start </Button>
            <IconButton aria-label='arrow left' icon={<RiArrowLeftSLine size={22} color='gray' />} 
               _hover={{ bg: 'gray.300', color: 'white' }}  /> 

            <Flex flexDir='row' justifyContent={'center'}>
                {
                    num.map(el => 
                    <Button color='gray.600' fontSize='.9rem' mx=".25rem" _hover={{ bg: 'gray.400', color: 'white' }}> {el} </Button>)
                }
            </Flex> 

            <IconButton aria-label='arrow right' icon={<RiArrowRightSLine size={22} color='gray' />} 
               _hover={{ bg: 'gray.300', color: 'white' }}  /> 

            <Button color='gray.600' fontSize='.9rem' mx=".25rem" _hover={{ bg: 'gray.400', color: 'white' }}> Last </Button>
        </Flex>
    )
}

export default Pagination
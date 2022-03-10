import React, { useState } from "react";
import { Box, 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl, FormLabel, Input, Textarea, Checkbox, Stack, Button } from "@chakra-ui/react"

import { FormTemplate, ErrorMessage } from '../components'

import Link from 'next/link'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

// import { Layout, FormTemplate, ErrorMessage, SocialMediaButton } from "../components"
import { commentSchema } from "../lib/validation";

const AddComment = ({ isOpen, onClose }: { isOpen: any, onClose: any }) => {
    const [isChecked, setIsChecked] = useState(false);

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(commentSchema)
    });

    const onAdd = async (data: any) => {
        if (isChecked) {
            console.log('store data inside locale storage: ', data, isChecked)
            localStorage.setItem('user_data_comment', JSON.stringify(data))
        } else {
            localStorage.removeItem('user_data_comment')
        }
    }

    const handleChange = (e: any) => {
       setIsChecked(e.target.checked)
    };

    return(
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalCloseButton />
            <ModalBody py="1.5rem">
                <form onSubmit={handleSubmit(onAdd)}> 
                    <FormControl id="fullName" mb="1rem">
                        <FormLabel> Full Name </FormLabel>
                        <Input type="text" placeholder="Full Name" _placeholder={{ color: 'gray.500' }}
                                isInvalid={errors.fullName ? true : false}
                                errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                {...register("fullName")} />
                        {errors.fullName && <ErrorMessage error={errors.fullName.message} />}
                    </FormControl>

                    <FormControl id="email" mb="1rem">
                        <FormLabel> Email Address </FormLabel>
                        <Input type="email" placeholder="your-email@example.com" _placeholder={{ color: 'gray.500' }}
                                isInvalid={errors.email ? true : false}
                                errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                {...register("email")} />
                        {errors.email && <ErrorMessage error={errors.email.message} />}
                    </FormControl>

                    <FormControl id="comment" mb="1rem">
                        <FormLabel> Your Comment </FormLabel>
                        <Textarea type="text" placeholder="Your Comment ..." _placeholder={{ color: 'gray.500' }}
                                isInvalid={errors.comment ? true : false}
                                errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                {...register("comment")} />
                        {errors.comment && <ErrorMessage error={errors.comment.message} />}
                    </FormControl>

                    <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'} mb="1rem">
                        <Checkbox value={'true'} checked={isChecked} onChange={handleChange}> <Box as="span" fontWeight={'300'} fontSize=".8rem"> Save my name, email in this browser for the next time I comment. </Box> </Checkbox>
                    </Stack>

                    <Button type="submit"  bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500' }}>
                        Post Comment
                    </Button>
                </form>
            </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default AddComment;
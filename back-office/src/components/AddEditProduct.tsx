import { 
    Button, Image, Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    FormControl, FormLabel, Input, Textarea,
  } from '@chakra-ui/react';
  
  import { yupResolver } from "@hookform/resolvers/yup";
  import { useForm } from "react-hook-form";
  
  import { ErrorMessage } from "../components"
  import { addProductSchema } from "../lib/validation"

    interface IAddEditProduct {
        isOpen: boolean,
        onClose: () => void,
        product?: any,
        currentProduct: any,
        mode: string
    }
const AddEditProduct = ({ isOpen, onClose, product, currentProduct, mode }: IAddEditProduct) => {

    const formOptions = { 
        resolver: yupResolver(addProductSchema),
        defaultValues: mode === 'add' ? {} : product 
    };
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm(formOptions);


    function onSubmit(data: any) {
        return mode === 'add' ? createProduct(data) : updateProduct(product.id, data);
    }

    function createProduct(data: any) {
        console.log('create product: ', data)
    }

    function updateProduct(id: string, data: any) {
        console.log('edit product: ', data, id)
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader> { mode === 'add' ? "Add" : 'Edit' } Product </ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}> 
                        <Image boxSize='100px' objectFit='cover' src={currentProduct?.img || product?.img} fallbackSrc='https://via.placeholder.com/150' alt='Product Image' mb="1rem" borderRadius='5px' />
                        <FormControl id="image" mb=".5rem">
                            <FormLabel> Choose Image </FormLabel>
                            <Input type="file" placeholder="Product Image" border="none" px="0" isInvalid={errors.img ? true : false}
                                    errorBorderColor="error" borderColor="gray.300" borderRadius="4px"
                                    {...register("img")} />
                            {errors.img && <ErrorMessage error={errors.img.message} />}
                        </FormControl>

                        <FormControl id="name" mb=".5rem">
                            <FormLabel> Name </FormLabel>
                            <Input type="text" placeholder="Product Name" _placeholder={{ color: 'gray.500' }} isInvalid={errors.name ? true : false}
                                    errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                    {...register("name")} />
                            {errors.name && <ErrorMessage error={errors.name.message} />}
                        </FormControl>

                        <FormControl id="description" mb=".5rem">
                            <FormLabel> Description </FormLabel>
                            <Textarea placeholder="Product Description" _placeholder={{ color: 'gray.500' }} isInvalid={errors.description ? true : false}
                                    errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                    {...register("description")} />
                            {errors.description && <ErrorMessage error={errors.description.message} />}
                        </FormControl>

                        <FormControl id="price" mb=".5rem">
                            <FormLabel> Price </FormLabel>
                            <Input type="number" placeholder="Product Price" _placeholder={{ color: 'gray.500' }} isInvalid={errors.price ? true : false}
                                    errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                    {...register("price")} />
                            {errors.price && <ErrorMessage error={errors.price.message} />}
                        </FormControl>

                        <FormControl id="coupon" mb=".5rem">
                            <FormLabel> Add Coupon </FormLabel>
                            <Input type="text" placeholder="Product Coupon" _placeholder={{ color: 'gray.500' }} isInvalid={errors.coupon ? true : false}
                                    errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                    {...register("coupon")} />
                            {errors.coupon && <ErrorMessage error={errors.coupon.message} />}
                        </FormControl>

                        <Flex flexDir="row"> 
                            <Button type="submit" isLoading={isSubmitting} bg='blue.600' color="white" mt="1rem" ml="auto" display={'flex'} justifyContent='flex-end' _hover={{ bg: 'blue.700' }}> {mode === 'add' ? 'Create' : 'Edit'} </Button>
                            <Button type="reset" bg="gray.600" color='white' mt="1rem" ml="1rem" display={'flex'} justifyContent='flex-end' _hover={{ bg: 'gray.700' }} onClick={() => mode === "edit" ? {} : reset(formOptions.defaultValues)}> Reset </Button>
                        </Flex>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
export default AddEditProduct
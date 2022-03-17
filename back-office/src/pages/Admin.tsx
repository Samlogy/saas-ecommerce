import { 
    Heading, Button
  } from '@chakra-ui/react';
  import { AiOutlinePlus } from "react-icons/ai"
  import React, { useEffect, useState } from "react"
  
  import { Layout, View, ProductsList, ProductsFilter, ProductBox, ProductDetails, AddEditProduct } from "../components"

  
  interface ICurrentProduct {
    id: number | string,
    name: string,
    price: number | string,
    description: string,
    coupon: number, // ]0,1[
    img: string,
    quantity: number | string,
    // features: string[]
  }
  interface IAction {
    delete: boolean,
    disable: boolean,
    add: boolean,
    edit: boolean,
    details: boolean
  }
  
  export default function Admin() {
    const [action, setAction] = useState({ delete: false, disable: false, add: false, edit: false, details: false })
    const [currentProduct, setCurrentProduct] = useState({
      id: '', name: '', price: '', description: '', discount: 0, img: '', quantity: '', features: []
    })
    const [products, setProducts] = useState<ICurrentProduct[]>()
  
    const [query, setQuery] = useState('');
  
    // const headers = ['Image', 'Name', 'Description', 'Quantity', 'Price', 'Coupon', 'Actions']
    // const data = {
    //   headers,
    //   products
    // }

    // useEffect(() => {
      // load products data
      // const data = [
      //   {
      //     id: 1,
      //     img: 'https://bit.ly/dan-abramov',
      //     name: "Throwback Hip Ba",
      //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos omnis accusamus, debitis ducimus eveniet ex, ut aspernatur dolorum velit, consequatur eius amet et molestias non quae veritatis nostrum doloribus.',
      //     quantity: 1,
      //     price: 90.00,
      //     coupon: .2
      //   },
      //   {
      //     id: 2,
      //     img: 'https://bit.ly/dan-abramov',
      //     name: "Throwback Hip Ba",
      //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos omnis accusamus, debitis ducimus eveniet ex, ut aspernatur dolorum velit, consequatur eius amet et molestias non quae veritatis nostrum doloribus.',
      //     quantity: 1,
      //     price: 50.00,
      //     coupon: .2
      //   }
      // ]
      // setProducts(data)
    // }, []);
  
    return (
      <Layout isHeaderVisible isFooterVisible>
        <Heading as="h2" fontSize="24px">
          Products List
        </Heading>
  
        {/* <Button colorScheme='blue' variant='outline' ml="auto" display={'flex'} leftIcon={<AiOutlinePlus />} 
          onClick={() => setAction({...action, add: true})}> Add Product </Button>
  
        
        <View cond={action.delete}>
            <ProductBox isOpen={action.delete} setAction={setAction} onClose={() => setAction({...action, delete: false})} productId={1} mode="delete" />  
        </View>
  
        <View cond={action.disable}>
            <ProductBox isOpen={action.disable} setAction={setAction} onClose={() => setAction({...action, disable: false})} productId={1} mode="disable" />  
        </View>
  
        <View cond={action.add}>
          <AddEditProduct isOpen={action.add} 
              currentProduct={currentProduct} onClose={() => setAction({...action, add: false})} mode='add' />
        </View>
  
        <View cond={action.edit}>
          <AddEditProduct isOpen={action.edit} 
                currentProduct={currentProduct} onClose={() => setAction({...action, edit: false})} product={product} mode='edit' />
        </View>
  
        <View cond={action.details}>
          <ProductDetails isOpen={action.details} onClose={() => setAction({...action, details: false})} product={product} />
        </View>
  
        <ProductsFilter setQuery={setQuery} query={query} />
        <ProductsList data={data} setAction={setAction} /> */}
      </Layout>
    );
  }
  
  
  
  
  
  
  
  
  
  
  

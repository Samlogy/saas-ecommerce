import React, { useEffect, useState } from "react";
import { Flex, Text, Button, Heading } from "@chakra-ui/react"

import { Comment, View, AddComment } from "../components"

interface IPCommentList {
    productId: string,
    comments: any
}

const ListingComments = (props: IPCommentList) => {
    const [showAddComment, setShowAddComment] = useState(false);
    // const comments = props.comments
    const [comments, setComments] = useState([]);

    // console.log('props: ', props)
    // console.log('comments: ', comments)
    useEffect(() => {
        // api call --> load comments
        const data = [
            {
                name: 'Sam',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo',
                createdAt: '15/03/2022'
            },
            {
                name: 'Sam',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo',
                createdAt: '15/03/2022'
            },
            {
                name: 'Sam',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo',
                createdAt: '15/03/2022'
            },
        ];
        setComments(data)
    }, [props.productId])

    return(
        <Flex flexDir="column">
            <AddComment isOpen={showAddComment} onClose={() => setShowAddComment(false)} />
            <Heading size="lg" textAlign={'center'} my="1.5rem"> Leave a Comment </Heading>
            
            <Button w="10rem" display={'flex'} ml="auto" onClick={() => setShowAddComment(true)}> Add Comment </Button>

            <View cond={comments.length > 0 }>
                { comments.map((el: any) =>  <Comment data={el} />) }
            </View>

            <View cond={comments.length === 0 }>
                <Text> There's no comment posted yet ! </Text>
            </View>
        </Flex>
    )
}

export default ListingComments;


// export const getServerSideProps = async (context) => {
//     // api call (context.params.id)
//     const data = [
//         {
//             name: 'Sam',
//             comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo',
//             createdAt: '15/03/2022'
//         },
//         {
//             name: 'Sam',
//             comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo',
//             createdAt: '15/03/2022'
//         },
//         {
//             name: 'Sam',
//             comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo',
//             createdAt: '15/03/2022'
//         },
//     ];
//     return {
//       props: {
//         comments: data
//       }
//     }
//   }
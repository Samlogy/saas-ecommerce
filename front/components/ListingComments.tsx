import React, { useState } from "react";
import { Flex, Text, Button, Heading } from "@chakra-ui/react"

import { Comment, View, AddComment } from "../components"

const comments =[
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

const ListingComments = ({ productId }: { productId: string }) => {
    const [showAddComment, setShowAddComment] = useState(false);

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
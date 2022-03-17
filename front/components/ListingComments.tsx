import React, { useState } from 'react'
import { Flex, Text, Button, Heading } from '@chakra-ui/react'

import { Comment, View, AddComment } from '../components'
import { IComment } from "../pages/product/[productId]"

const ListingComments = ({ comments }: { comments: IComment[] }) => {
  const [showAddComment, setShowAddComment] = useState(false)

  return (
    <Flex flexDir="column">
      <AddComment isOpen={showAddComment} onClose={() => setShowAddComment(false)} />
      <Heading size="lg" textAlign={'center'} my="1.5rem">
        {' '}
        Leave a Comment{' '}
      </Heading>

      <Button w="10rem" display={'flex'} ml="auto" onClick={() => setShowAddComment(true)}>
        {' '}
        Add Comment{' '}
      </Button>

      <View cond={comments?.length > 0}>
        {comments?.map(comment => (
          <Comment data={comment} />
        ))}
      </View>

      <View cond={comments?.length === 0}>
        <Text textAlign={'center'} my="2rem">
          {' '}
          There's no comment posted yet !{' '}
        </Text>
      </View>
    </Flex>
  )
}

export default ListingComments
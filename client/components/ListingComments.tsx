import { Button, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AddComment, Comment, View } from '../components'
import { IComment } from '../lib/interaces'

const ListingComments = ({ comments }: { comments: IComment[] }) => {
  const [showAddComment, setShowAddComment] = useState(false)
  const textColor = useColorModeValue('balck', 'white')
  return (
    <Flex flexDir="column" px="1.5rem">
      <AddComment isOpen={showAddComment} onClose={() => setShowAddComment(false)} />
      <Heading size="lg" textAlign={'center'} my="1.5rem">
        Leave a Comment
      </Heading>

      <Button
        bg={'accent_3'}
        _hover={{ bg: 'accent_2' }}
        color={'white'}
        w="10rem"
        display={'flex'}
        ml="auto"
        onClick={() => setShowAddComment(true)}
      >
        Add Comment
      </Button>

      <View cond={comments?.length > 0}>
        {comments?.map(comment => (
          <Comment data={comment} />
        ))}
      </View>

      <View cond={comments?.length === 0}>
        <Text textAlign={'center'} my="2rem" fontStyle={'italic'} color={textColor}>
          There's no comment posted yet !
        </Text>
      </View>
    </Flex>
  )
}

export default ListingComments

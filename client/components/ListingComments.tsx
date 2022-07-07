import { Button, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AddComment, Comment, View, Pagination } from '../components'
import { IComment } from '../lib/interfaces'
import { GET_ALL_COMMENTS } from '../lib/services'
import { useAuthStore } from '../store'

const ListingComments = ({ comments }: { comments: IComment[] }) => {
  // pagination logic
  const [page, setPage] = useState<number>(1)
  const data = { info: { pages: 3 } }

  const [showAddComment, setShowAddComment] = useState(false)

  const textColor = useColorModeValue('balck', 'white')

  const isLogged = useAuthStore((state: any) => state.isLogged)

  // load related products (apollo --> API) GET_ALL_COMMENTS
  return (
    <Flex flexDir="column" px="1.5rem">
      <View cond={isLogged}>
        <AddComment />
      </View>

      <Heading size="lg" textAlign={'center'} my="1.5rem">
        Leave a Comment
      </Heading>

      <View cond={comments?.length > 0}>
        {comments?.map(comment => (
          <Comment key={comment?.id} data={comment} />
        ))}

        <Pagination
          page={page}
          pages={[page, page + 1, page + 2, page + 3]}
          changePage={setPage}
          nextPage={() => setPage(prev => prev + 1)}
          prevPage={() => setPage(prev => prev - 1)}
          startPage={() => setPage(1)}
          endPage={() => setPage(data.info.pages)}
          lastPage={data.info.pages}
          isMobile={true}
        />
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

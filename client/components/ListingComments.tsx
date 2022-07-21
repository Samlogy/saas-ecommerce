import { Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { useState, useMemo } from 'react'
import { AddComment, Comment, Pagination, View } from '../components'
import { IComment } from '../lib/interfaces'
import { useAuthStore } from '../store'

export default function ListingComments({ comments }: { comments: IComment[] }) {
  // pagination logic
  const [currentPage, setCurrentPage] = useState(1)
  let PageSize = 1
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return comments.slice(firstPageIndex, lastPageIndex)
  }, [currentPage])

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
          currentPage={currentPage}
          totalCount={comments.length}
          pageSize={PageSize}
          onPageChange={page => setCurrentPage(page)}
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

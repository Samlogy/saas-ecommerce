import React, { useEffect } from 'react'
import { Heading, Flex, Box, Text } from '@chakra-ui/react'

import { Layout, View } from 'components'
import { useNotificationStore } from 'store'
import { INotification } from 'lib/interfaces'

function Notifications() {
  // const [notifications, setNotifications] = useState<INotification[]>([])
  useEffect(() => {
    // load notification by id (useQuery) --> delete useEffect / state related to it / add notification into store
    // setNotification({})
  }, [])
  const notifications = useNotificationStore((state: any) => state.notifications)

  return (
    <Layout isHeaderVisible>
      <Heading as="h2" fontSize="24px">
        Notifications
      </Heading>
      <Flex flexDir="column" justifyContent={'center'} mt="2rem">
        <View cond={notifications.length > 0}>
          {notifications?.map((notification: INotification) => (
            <Box
              key={notification.id}
              boxShadow="md"
              mb="1.5rem"
              borderRadius={'10px'}
              p=".75rem 1rem"
              maxW="30rem"
              minW="20rem"
            >
              <Text mb=".5rem" fontSize="1.3rem">
                {' '}
                {notification.title}{' '}
              </Text>
              <Text mb=".5rem" color="gray_2">
                {' '}
                {notification.text}{' '}
              </Text>
              <Text fontSize=".8rem" fontStyle="italic" textAlign={'right'} color="gray_4">
                {' '}
                {notification.createdAt}{' '}
              </Text>
            </Box>
          ))}
        </View>

        <View cond={notifications.length === 0}>
          <Text color="gray_4"> There's no Notifications </Text>
        </View>
      </Flex>
    </Layout>
  )
}

export default Notifications

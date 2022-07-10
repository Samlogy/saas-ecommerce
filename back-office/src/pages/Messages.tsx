import { Listing } from 'components'
import { useMessageStore } from 'store'

export default function Messages() {
  const messages = useMessageStore((state: any) => state.messages)
  return <Listing title="Messages" data={messages} />
}

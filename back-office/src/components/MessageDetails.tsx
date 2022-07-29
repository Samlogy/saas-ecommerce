import { Details } from 'components'
import { useMessageStore } from 'store'

export default function MessageDetails() {
  const setVisible = useMessageStore((state: any) => state.setVisible)
  const message = useMessageStore((state: any) => state.message)
  const isVisible = useMessageStore((state: any) => state.isVisible)

  return (
    <Details title="Message" data={message} isOpen={isVisible} onClose={() => setVisible(false)} />
  )
}

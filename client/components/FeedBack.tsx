import { Flex, useColorModeValue } from '@chakra-ui/react'
import { MdCheckCircle, MdError, MdInfo, MdWarning } from 'react-icons/md'

import { CustomModal } from './'

interface IFeedBack {
  isOpen: boolean
  onClose: any
  type: string
}

export default function FeedBack({ isOpen, onClose, type }: IFeedBack) {
  const bgColor = useColorModeValue('gray_9', 'gray_2')

  const status = {
    success: <MdCheckCircle size={120} color="green" />,
    error: <MdError size={120} color="red" />,
    warning: <MdWarning size={120} color="orange" />,
    info: <MdInfo size={120} color="blue" />
  }

  const Body = (
    <Flex justify="center" align="center" py="2em" bg={bgColor}>
      {type && status[type]}
    </Flex>
  )

  return <CustomModal isOpen={isOpen} onClose={onClose} body={Body} isClose={false} size="sm" />
}

/*
 const [feedBack, setFeedBack] = useState({
   isOpen: false,
   type: ''
 })


 <FeedBack
          isOpen={feedBack?.isOpen}
          onClose={() =>
            setFeedBack(prevState => {
              return {
                ...prevState,
                isOpen: false
              }
            })
          }
          type={feedBack?.type}
        />
 */

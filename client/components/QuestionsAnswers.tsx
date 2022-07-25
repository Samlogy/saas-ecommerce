import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  useColorModeValue
} from '@chakra-ui/react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { CustomAccordion, SectionWrapper } from '../components'

export default function QuestionsAnswers({ data }: { data: any }) {
  const bgColor = useColorModeValue('gray_9', 'gray_2')
  const Body = data.map((item: any, idx: number) => (
    <AccordionItem
      key={idx}
      mb="1rem"
      border="none"
      boxShadow={'md'}
      borderRadius="10px"
      bg={bgColor}
    >
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton
              _expanded={{ bg: 'accent_2', color: 'white' }}
              borderRadius="10px"
              fontSize={'.9rem'}
            >
              <Box flex="1" textAlign="left" fontWeight="500" py=".5rem">
                {item.question}
              </Box>
              {isExpanded ? <FiMinus size={18} /> : <FiPlus size={18} />}
            </AccordionButton>
          </h2>
          <AccordionPanel
            py="1rem"
            fontSize={'.9rem'}
            bg={isExpanded ? 'accent_2' : 'white'}
            color={isExpanded ? 'white' : 'black'}
            borderRadius="10px"
          >
            {item.answer}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  ))
  return (
    <SectionWrapper title="Some common questions were often asked">
      <CustomAccordion defaultIndex={[0]} allowMultiple body={Body} />
    </SectionWrapper>
  )
}

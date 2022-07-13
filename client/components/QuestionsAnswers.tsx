import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  useColorModeValue
} from '@chakra-ui/react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { SectionWrapper } from '../components'

export default function QuestionsAnswers({ data }: { data: any }) {
  const bgColor = useColorModeValue('gray_9', 'gray_2')
  return (
    <SectionWrapper title="Some common questions were often asked">
      <Box p="1.5rem 1rem">
        <Accordion defaultIndex={[0]} allowMultiple border="none">
          {data.map((item: any, idx: number) => (
            <AccordionItem
              key={idx}
              mb="1rem"
              border="none"
              boxShadow={'md'}
              borderRadius="5px"
              bg={bgColor}
            >
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: 'accent_2', color: 'white' }}
                      borderRadius="10px"
                      fontSize={'.9rem'}
                      py=".75rem"
                    >
                      <Box flex="1" textAlign="left" fontWeight="500">
                        {item.question}
                      </Box>
                      {isExpanded ? <FiMinus size={18} /> : <FiPlus size={18} />}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={4}
                    fontSize={'.9rem'}
                    bg={isExpanded ? 'accent_2' : 'white'}
                    color={isExpanded ? 'white' : 'black'}
                    borderRadius="5px"
                  >
                    {item.answer}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </SectionWrapper>
  )
}


import { FaStar } from "react-icons/fa"
import { useState } from "react";
import { Flex, Radio, Box } from "@chakra-ui/react"

const Rating = ({ initRate }: { initRate?: number }) => {
    const [rate, setRate] = useState(initRate || null);
    const [hover, setHover] = useState(null);
  
    // const styles = {
    //   input: {
    //     display: "none"
    //   },
    //   container: {
    //     display: 'flex'
    //   }
    // }
  
    return(
      <Flex>
        { [...Array(5)].map((star, idx: number) => {
            const currentRate = idx + 1; 
            return(
              <Box as="label">
                {/* <input type="radio" name="rate" style={styles.input} value={currentRate} onClick={() => setRate(currentRate)} /> */}
                <Radio value={currentRate} onChange={() => setRate(currentRate)} name="rate" display="none"> rate </Radio>
                <FaStar className='star' 
                    color={currentRate <= (hover || rate) ? '#ffc107' : '#e4e5e9'} 
                    size={20}
                    onMouseEnter={() => setHover(currentRate)}
                    onMouseLeave={() => setHover(null)}
                    />
              </Box>
            )
          })
        }
      </Flex>
    )
}
export default Rating;
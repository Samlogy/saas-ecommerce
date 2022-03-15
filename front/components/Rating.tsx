
import { BsFillStarFill, BsStarFill, BsStarHalf } from "react-icons/bs"
import { useState, useMemo } from "react";
import { Flex, Box } from "@chakra-ui/react"

const Rating = ({ initRate }: { initRate?: number }) => {
    const [rate, setRate] = useState(initRate || null)
    const [hover, setHover] = useState(null);
  
    return(
      <Flex>
        { [1, 2, 3, 4, 5].map((star, idx: number) => {
            const currentRate = idx + 1; 
            // console.log(currentRate)
            return(
              <Box as="label" key={idx}>
                <input type="radio" name="rate" style={{ display: "none" }} value={currentRate} onClick={() => setRate(currentRate)} />
                  <BsStarFill className='star' 
                    color={currentRate <= (hover || rate) ? '#ffc107' : '#e4e5e9'} 
                    size={20}
                    onMouseEnter={() => setHover(currentRate)}
                    onMouseLeave={() => setHover(null)}
                  /> 
                  {/* { ((rate - currentRate) > 0 && (rate - currentRate) < 1) ? 
                      <BsStarHalf className='star' 
                        color={currentRate <= (hover || rate) ? '#ffc107' : '#e4e5e9'} 
                        size={20}
                        onMouseEnter={() => setHover(currentRate)}
                        onMouseLeave={() => setHover(null)}
                      /> : ''} */}
              </Box>
            )
          })
        }
      </Flex>
    )
}
export default Rating;

import {
  IconButton 
} from '@chakra-ui/react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa"

const SocialMediaButton = ({ type, ...rest }: { type: string, rest: any }) => {
    const icon = (type: string) => {
      if (type === 'facebook') return <FaFacebook color="#787e86" />
      else if (type === 'twitter') return <FaTwitter color="#787e86" />
      else if (type === 'linkedin') return <FaLinkedinIn color="#787e86" />
      else if (type === 'github') return <FaGithub color="#787e86" />
    } 
    return(
      <IconButton variant='outline' borderColor="gray.300" w="4rem" aria-label='Search database' icon={icon(type)} {...rest} />
    )
  
}

export default SocialMediaButton;
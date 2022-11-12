import { useEffect, useState } from 'react'

interface WindowDimentions {
  width: number
  height: number
}

export default function useWindowDimensions(): WindowDimentions {
  const [dimensions, setDimensions] = useState<WindowDimentions>({
    width: 0,
    height: 0
  })
  useEffect(() => {
    function handleResize(): void {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return (): void => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return dimensions
}

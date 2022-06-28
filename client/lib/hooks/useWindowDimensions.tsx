import { useEffect, useState } from 'react'

interface WindowDimentions {
  width: number | undefined
  height: number | undefined
}

const useWindowDimensions = (): WindowDimentions => {
  const [dimensions, setDimensions] = useState<WindowDimentions>({
    width: undefined,
    height: undefined
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

export default useWindowDimensions

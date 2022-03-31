// import { useUser } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router'
import { ReactNode, useEffect } from 'react'

// import { useAuth } from "../store";
interface IProtected {
  children: ReactNode
  isProtected?: boolean
}

export default function ProtectedPage({ children, isProtected }: IProtected) {
  // const isLogged = useAuth((state: any) => state.isLogged)
  const router = useRouter()

  // const { user } = useUser()
  const user = {}

  // protected routes ---> profile

  useEffect(() => {
    if (!user && isProtected) {
      // router.push('/api/auth/login')
    }
  }, [])

  return <>{children}</>
}

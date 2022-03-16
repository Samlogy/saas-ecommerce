import { useEffect, ReactNode } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0'

// import { useAuth } from "../store";
interface IProtected {
  children: ReactNode
  isProtected?: boolean
}

export default function ProtectedPage({ children, isProtected }: IProtected) {
  // const isLogged = useAuth((state: any) => state.isLogged)
  const router = useRouter()

  const { user } = useUser()

  // protected routes ---> profile

  useEffect(() => {
    if (!user && isProtected) {
      router.push('/api/auth/login')
    }
  }, [])

  return <>{children}</>
}

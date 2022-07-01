// import { useUser } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

interface IProtected {
  children: ReactNode
  isProtected?: boolean
}
export default function ProtectedPage({ children, isProtected }: IProtected): any {
  const { loading, error, data } = { loading: false, error: '', data: {} }
  const router = useRouter()

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error?.message}</p>

  if (!data) {
    return router.push('/login')
  }

  return <>{children}</>
}

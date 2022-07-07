import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { useAuthStore } from '../store'
interface IProtected {
  children: ReactNode
}
export default function ProtectedPage({ children }: IProtected): any {
  const isLogged = useAuthStore((state: any) => state.isLogged)
  const { push, pathname } = useRouter()

  const isProtected = pathname === '/profile' || pathname === '/edit-profile'

  // auth not requited
  if (!isProtected) {
    return <>{children}</>
  }

  // auth requited / not logged
  if (isProtected && !isLogged) {
    // push('/login')
    return null
  }

  // auth requited
  if (isProtected && isLogged) {
    return <>{children}</>
  }
}

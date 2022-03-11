import { useEffect, ReactNode } from "react"
import { useRouter } from "next/router"
import { useUser } from '@auth0/nextjs-auth0';

// import { useAuth } from "../store";

export default function ProtectedPage({ children, isProtected }: { children: ReactNode, isProtected?: boolean }) {
  // const isLogged = useAuth((state: any) => state.isLogged)
  const router = useRouter()

  const { user } = useUser()

  // protected routes ---> profile

  useEffect(() => {
    if (!user && isProtected) {
      router.push("/login")
    }
  }, [])

  return(
    <>
      { children }
    </>
  )
}
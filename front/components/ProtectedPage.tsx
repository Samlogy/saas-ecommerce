import { useEffect, ReactNode } from "react"
import { useRouter } from "next/router"

import { useAuth } from "../store";

export default function ProtectedPage({ children, isProtected }: { children: ReactNode, isProtected?: boolean }) {
  const isLogged = useAuth((state: any) => state.isLogged)
  const router = useRouter()

  // protected routes ---> profile

  useEffect(() => {
    if (!isLogged && isProtected) {
      router.push("/login")
    }
  }, [])

  return(
    <>
      { children }
    </>
  )
}
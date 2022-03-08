import { useEffect, ReactNode } from "react"
import { useRouter } from "next/router"

import { useAuth } from "../store";

export default function ProtectedPage({ children }: { children: ReactNode }) {
  const isLogged = useAuth((state: any) => state.isLogged)
  const router = useRouter()

  // protected routes ---> profile

  useEffect(() => {
    if (!isLogged) {
      router.push("/login")
    }
  }, [])

  return(
    <>
      <h1> Welcome This is a protected page </h1>
      { children }
    </>
  )
}
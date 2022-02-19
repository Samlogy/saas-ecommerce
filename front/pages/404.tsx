import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function NotFound() {
    const router = useRouter();

    // redirect the user to home page after 3s
    // useEffect(() => {
    //   setTimeout(() => {
    //       router.push('/')
    //   }, 3000);
    // }, []);

  return (
      <div className="flex flex-col justify-center items-center mt-40">
          <div className="flex flex-col justify-center items-center">
              <h1 className="text-indigo-600 text-7xl font-bold mb-4"> 404 </h1>
              <h1 className="text-gray-900 text-6xl font-bold text-center mb-4"> Page not found </h1>
          </div>
          <div className="flex flex-row flex-wrap justify-center mt-4">
              <Link href="/"> 
                <a className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded mx-4 my-3"> Go back to home </a>
                {/* qsdqsd */}
              </Link>

              <Link href="/contact"> 
                <a className="bg-indigo-200 text-indigo-600 hover:bg-indigo-300 px-4 py-2 rounded mx-4 my-3"> Contact support </a> 
              </Link>
          </div>
      </div>
  )
}
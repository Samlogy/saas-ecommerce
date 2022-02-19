import Head from 'next/head'

import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <Head>
          <title> Ecommerce Web App </title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <div>
          <NavBar /> 
          { children }
          <Footer />
        </div>
      </>
    )
}


export default Layout;
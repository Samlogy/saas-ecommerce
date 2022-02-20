import Head from 'next/head';

import Container from '@mui/material/Container';

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

interface ILayout { 
    children: React.ReactNode, 
    isHeaderVisible?: boolean, 
    isFooterVisible?: boolean 
}

const Layout = ({ children, isHeaderVisible, isFooterVisible }: ILayout) => {
  return (
    <>
        <Head>
            <title> Ecommerce Web App </title>
            <meta name="description" content="Ecommerce Web App" />
            <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    
        <Container maxWidth="lg">
            { isHeaderVisible && <NavBar /> }
            { children }
            { isFooterVisible && <Footer /> }
        </Container>
    </>
  );
};

export default Layout;

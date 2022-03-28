import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import React from 'react';


function Layout({children}) {
    return (
        <div className="container">
            <Navbar/>
            {children}
            <Footer/>
        </div>
        

    );
}

export default Layout;
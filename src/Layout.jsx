import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Topbar from './Components/Topbar';
import Controls from './Components/Controls';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* <Topbar /> */}
            <Navbar />
            <main className="flex-grow min-h-[50vh]">
                <Outlet />
                <Controls />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;

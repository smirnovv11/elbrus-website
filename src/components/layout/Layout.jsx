import { Outlet, useLocation } from "react-router-dom"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import { Suspense, useEffect, useState } from "react";
import { scroller } from "react-scroll";

const scrollToElement = (elementId) => {
    scroller.scrollTo(elementId, {
      duration: 120,
      delay: 0,
      smooth: 'easeInQuad',
    });
};

const Layout = () => {
    const [isFirstLoad, setFirstLoad] = useState(true);

    const location = useLocation();

    useEffect(() => {

        if (isFirstLoad) setFirstLoad(() => { return false })
        else {
            scrollToElement('header')
        }
    }, [location])

    return (
        <>
            <div id="header">
                <Header/>
            </div>
            <main id="main" style={{
                minHeight: '100vh'
            }}>
                <Suspense>
                    <Outlet/>
                </Suspense>
            </main>
            <Footer/>
        </>
    )
}

export default Layout
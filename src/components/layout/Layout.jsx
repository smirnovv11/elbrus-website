import { Outlet, useLocation } from "react-router-dom"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import { useEffect, useState } from "react";
import { scroller } from "react-scroll";

const scrollToElement = (elementId) => {
    scroller.scrollTo(elementId, {
      duration: 100,
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
            scrollToElement('main')
        }
    }, [location])

    return (
        <>
            <Header/>
            <main id="main" style={{
                minHeight: '100vh'
            }}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default Layout
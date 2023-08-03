import { Outlet } from "react-router-dom"
import Header from "../header/Header"
import Footer from "../footer/Footer"

const Layout = () => {
    return (
        <>
            <Header/>
            <main style={{
                minHeight: '100vh'
            }}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default Layout
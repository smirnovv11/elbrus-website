import { Outlet } from "react-router-dom"
import Header from "../header/Header"

const Layout = () => {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <h1>Footer 2023</h1>
        </>
    )
}

export default Layout
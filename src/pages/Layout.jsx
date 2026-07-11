import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { GlobalProvider } from "../store" 



export const Layout = () => {
    return (
        <GlobalProvider>
            <ScrollToTop>
                <Navbar />
                <div className="container mt-4"> 
                    <Outlet />
                </div>
                <Footer />
            </ScrollToTop>
        </GlobalProvider>
    )
}
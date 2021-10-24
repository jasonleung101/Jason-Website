import Footer from "./footer"
import NavBar from "./navbar"

export default function Layout({ children }) {
    return (
        <div id="layout" className='antialiased bg-black'>
            <NavBar />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}
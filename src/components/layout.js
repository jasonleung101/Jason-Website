import NavBar from "./navbar"

export default function Layout({ children }) {
    return (
        <div id="layout" className='antialiased h-screen bg-black'>
            <NavBar />
            <div>
                {children}
            </div>
        </div>
    )
}
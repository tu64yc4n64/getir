import Navigations from "./Navigations"
import Language from "./Language"
import Login from "./Login"
import Register from "./Register"
import "./style.css"

const Header = () => {
    return (
        <div className="md:fixed top-0 z-20 w-full">
            <nav className="h-header bg-header text-[#fff] md:px-4 lg:px-[32px] px-[6px] flex items-end overflow-x-auto">
                <div className="flex justify-between w-[100%] max-w-[1232px] mx-auto">
                    <div className="md:block flex items-end ">
                        <Navigations />
                    </div>
                    <div className="md:flex hidden">
                        <Language />
                        <Login />
                        <Register />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header

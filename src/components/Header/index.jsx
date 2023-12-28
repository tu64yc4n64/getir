import Navigations from "./Navigations"
import Language from "./Language"
import Login from "./Login"
import Register from "./Login"


const Header = () => {
    return (
        <nav className="h-header bg-header text-[#fff] px-[32px] flex items-end">
            <div className="flex justify-between w-[100%] max-w-[1232px] mx-auto">
                <div>
                    <Navigations />
                </div>
                <div className="flex">
                    <Language />
                    <Login />
                    <Register />
                </div>
            </div>
        </nav>
    )
}

export default Header

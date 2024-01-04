import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer"
import LoginModal from "../components/Modal/LoginModal";
import RegisterModal from "../components/Modal/RegisterModal";
import LanguageModal from "../components/Modal/LanguageModal";





export const PageLayout = () => {
    return (
        <div >
            <Suspense>
                <Header />
            </Suspense>
            <div >
                <main className="bg-[#fafafa]">
                    <LoginModal />
                    <RegisterModal />
                    <LanguageModal />
                    <Outlet />
                </main>
                <Suspense>
                    <Footer />
                </Suspense>
            </div>

        </div>
    )
}

export default PageLayout
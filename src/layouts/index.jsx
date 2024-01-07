import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer"
import LoginModal from "../components/Modal/LoginModal";
import RegisterModal from "../components/Modal/RegisterModal";
import LanguageModal from "../components/Modal/LanguageModal";
import HeaderMobil from "../components/Header/HeaderMobil";





export const PageLayout = () => {
    return (
        <div >
            <Suspense>
                <Header />
                <HeaderMobil />
            </Suspense>
            <div >
                <main className="md:bg-[#fafafa]">
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
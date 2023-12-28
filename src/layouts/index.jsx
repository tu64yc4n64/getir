import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer"


export const PageLayout = () => {
    return (
        <div >
            <Suspense>
                <Header />
            </Suspense>
            <div >
                <main >
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
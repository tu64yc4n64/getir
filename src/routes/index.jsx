import { createBrowserRouter } from "react-router-dom";
import PageLayout from "../layouts"
import { FoodPage, HomePage, BazaarPage, BigPage, WaterPage } from "../pages";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <PageLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "",
                element: <FoodPage />
            },
            {
                path: "",
                element: <BigPage />
            },
            {
                path: "",
                element: <WaterPage />
            },
            {
                path: "",
                element: <BazaarPage />
            },

        ]
    }
])

export default routes
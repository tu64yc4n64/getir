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
                path: "yemek",
                element: <FoodPage />
            },
            {
                path: "buyuk",
                element: <BigPage />
            },
            {
                path: "su",
                element: <WaterPage />
            },
            {
                path: "carsi",
                element: <BazaarPage />
            },

        ]
    }
])

export default routes
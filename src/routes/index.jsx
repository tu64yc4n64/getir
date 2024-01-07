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
                element: <HomePage />
            },
            {
                path: "buyuk",
                element: <HomePage />
            },
            {
                path: "su",
                element: <HomePage />
            },
            {
                path: "carsi",
                element: <HomePage />
            },

        ]
    }
])

export default routes
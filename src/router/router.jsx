import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Cards from "../pages/Cards";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/home",
                element: <Cards />
            }
        ]
    }
]);
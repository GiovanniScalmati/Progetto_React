import { createBrowserRouter } from "react-router-dom";
import routes from "../routes/routes";
import Layout from "../components/Layout";
import Homepage, { gamesLoader } from "../views/Homepage";
import GenreView, { gamesByGenreLoader } from "../views/GenreView";

const router = createBrowserRouter([
    {
        path: routes.home,
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Homepage />,
                loader: gamesLoader
            },
            {
                path: routes.genre,
                element: <GenreView />,
                loader: gamesByGenreLoader
            }
        ]
    }
])

export default router;
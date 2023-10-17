import { createBrowserRouter } from "react-router-dom"
import Home from '../pages/Home'
import Concert from '../pages/Concert'
import Theatre from '../pages/Theatre'
import Festival from '../pages/Festival'
import StandUp from '../pages/StandUp'
import NotFound from '../pages/NotFound'
import MainLayout from "../layout/main"

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'concert',
                element: <Concert />
            },
            {
                path: 'theatre',
                element: <Theatre />
            },
            {
                path: 'festival',
                element: <Festival />
            },
            {
                path: 'stand-up',
                element: <StandUp />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
])

export default routes
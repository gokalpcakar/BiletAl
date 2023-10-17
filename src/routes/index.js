import { createBrowserRouter } from "react-router-dom"
import Home from '../pages/Home'
import Concert from '../pages/Concert'
import Theatre from '../pages/Theatre'
import Festival from '../pages/Festival'
import StandUp from '../pages/StandUp'

const routes = createBrowserRouter([
    {
        path: '/',
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
    }
])

export default routes
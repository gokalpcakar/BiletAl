import { Outlet, Link } from "react-router-dom"

function MainLayout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='concert'>Konser</Link>
                    </li>
                    <li>
                        <Link to='theatre'>Tiyatro</Link>
                    </li>
                    <li>
                        <Link to='festival'>Festival</Link>
                    </li>
                    <li>
                        <Link to='standup'>Stand-Up</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default MainLayout
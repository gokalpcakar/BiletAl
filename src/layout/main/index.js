import { Outlet, Link } from "react-router-dom"

function MainLayout() {
    return (
        <div>
            <header>
                <div>
                    <Link to='/'>
                        BiletAl
                    </Link>
                </div>
                <div>
                    <Link>
                        Üye Ol
                    </Link>
                    <Link>
                        Üye Girişi
                    </Link>
                </div>
            </header>
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
            <footer>

            </footer>
        </div>
    )
}

export default MainLayout
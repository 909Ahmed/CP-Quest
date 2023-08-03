import React , { useRef } from 'react'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Navbar() {
    const location =useLocation();

    const ref = useRef(null)

    const handleClick = () => {
        ref.current.click();
    }

    const logout = () => {
        localStorage.removeItem('token');
    }

  return (
    <>
        
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <div className='set'>


                <Link className="navbar-brand" to="/">
                <i className="icon fa-solid fa-layer-group fa-xl" style={{color: `#0561ff`}}></i>
                </Link>
                <div className="btn-group">
                    <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa-regular fa-circle-user fa-xl" style={{color:'white'}}></i>
                    </button>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/account">Account</Link></li>
                        <li><Link className="dropdown-item" to="/saved">Bookmarks</Link></li>
                        <li><Link className="dropdown-item" to="/login">Login</Link></li>
                        <li><Link className="dropdown-item" to="/problems">Problemset</Link></li>
                        {localStorage.getItem('token') &&
                        <li><hr className="dropdown-divider"/></li>}
                        {localStorage.getItem('token') && 
                        <li><Link className="dropdown-item" onClick={logout} to="/login">Logout</Link></li>}
                    </ul>
                </div>

                
                

                </div>


                
                {location.pathname.includes('problems') && <div>
                    <button type="button" className="navbar-toggler bg-light text-dark mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Range
                    </button>
                    <button className="navbar-toggler bg-light text-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    Topics
                    </button>
                </div>
                }
                
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Select a topic</h5>
                        <button  ref={ref} type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link className="nav-link"  aria-current="page" to="/problems/brute" onClick={handleClick}>Brute Force</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/problems/data" onClick={handleClick}>Data structures</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  aria-current="page" to="/problems/implementation" onClick={handleClick}>Implementation</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  aria-current="page" to="/problems/maths" onClick={handleClick}>Maths</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  aria-current="page" to="/problems/greedy" onClick={handleClick}>Greedy</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  aria-current="page" to="/problems/sortings" onClick={handleClick}>Sortings</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  aria-current="page" to="/problems/games" onClick={handleClick}>Games</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  aria-current="page" to="/problems/constructive" onClick={handleClick}>Constructive</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  aria-current="page" to="/problems/interactive" onClick={handleClick}>Interactive</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  aria-current="page" to="/problems/graphs" onClick={handleClick}>Graphs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  aria-current="page" to="/problems/trees" onClick={handleClick}>Trees</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  aria-current="page" to="/problems/strings" onClick={handleClick}>Strings</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  aria-current="page" to="/problems/binary" onClick={handleClick}>Binary Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  aria-current="page" to="/problems/bitmasks" onClick={handleClick}>Bitmasks</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  aria-current="page" to="/problems/dp" onClick={handleClick}>dp</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
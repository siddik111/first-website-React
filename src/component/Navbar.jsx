import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className='container'>
                <div className="logo">
                    <Link to="/Home">Logo</Link>
                </div>
                <div className="menu">
                   <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Service">Service</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                   </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
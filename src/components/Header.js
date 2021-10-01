import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link className='header_elem' to='/' >Home</Link>
            <Link className='header_elem' to ='/Todo App'>Todo App</Link> 
        </header>
    )
}

export default Header

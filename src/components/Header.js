import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link className='header_elem' to='/Home' >Home</Link>
            <Link className='header_elem' to ='/TodoApp'>Todo App</Link> 
        </header>
    )
}

export default Header

import { CartWidget } from '../CartWidget';
import { SearchBar } from '../SearchBar/Index';
import './styles.css';

const NavBar = () => {
    return (
        <nav className="navBar">
            <img src="/src/assets/img/Acquashop-logo.png" alt="logo" className='max-w-[15vw]' />
            <ul className='flex items-center'>
                <li className='px-4'><a href="/">Home</a></li>
                <li className='px-4'><a href="/">Produtos</a></li>
                <li className='px-4'><a href="/">Suporte</a></li>
                <li className='px-4'><a href="/">Contato</a></li>
                <CartWidget />
                <SearchBar />

            </ul>
        </nav>
    )
}

export { NavBar }


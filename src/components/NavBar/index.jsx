import { CartWidget } from '../CartWidget';
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
                <CartWidget/>
                <input type="search" name="search" id="searchbox" placeholder='Pesquisa' className='rounded-lg m-2 ps-4 max-w-[12vw] border-sky-900 border-2 h-8' />

            </ul>
        </nav>
    )
}

export { NavBar }


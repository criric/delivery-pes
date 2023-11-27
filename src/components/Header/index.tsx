import { List, Bag } from '@phosphor-icons/react';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
export function Header() {
    return (
        <nav className='flex justify-between items-center py-6'>
            <img src={logo} alt="Homem de capacete indo rápido com a moto" className='w-[50px]'/>
            <div className='flex gap-3'>
                <NavLink to="/" className="bg-yellow-light text-yellow-dark p-2 rounded">
                    <List size={22} />
                </NavLink>
                <NavLink to="/bag" className="bg-yellow-light text-yellow-dark p-2 rounded">
                    <Bag size={22} weight='fill'/>
                </NavLink>
            </div>
        </nav>
    )
}
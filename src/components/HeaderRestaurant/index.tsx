import { List, Swap, Plus } from '@phosphor-icons/react';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

export function HeaderRestaurant(){
    return (
        <nav className='flex justify-between items-center py-6'>
            <NavLink to="/employee/menu">
                <img src={logo} alt="Homem de capacete indo rápido com a moto" className='w-[50px]'/>
            </NavLink>
            <div className='flex gap-3'>
                <NavLink to="/employee/menu" className="bg-yellow-light text-yellow-dark p-2 rounded hover:bg-yellow hover:text-white">
                    <List size={22} />
                </NavLink>
                <NavLink to="/employee/add" className="bg-yellow-light text-yellow-dark p-2 rounded hover:bg-yellow hover:text-white">
                    <Plus size={22} />
                </NavLink>
                <NavLink to="/" className="bg-yellow-light text-yellow-dark p-2 rounded hover:bg-yellow hover:text-white">
                    <Swap size={22} />
                </NavLink>
            </div>
        </nav>
    )
}
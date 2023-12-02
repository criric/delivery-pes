import { NavLink } from "react-router-dom";

export function Profile(){
    return (
        <div className="flex items-center justify-center h-screen gap-2">
            <NavLink to="/client/menu" className='bg-purple-dark text-white p-2 rounded hover:bg-purple w-40 text-center'>Cliente</NavLink>
            <NavLink to="/employee/menu" className='bg-purple-dark text-white p-2 rounded hover:bg-purple w-40 text-center'>Empregado</NavLink>
        </div>
    )
}
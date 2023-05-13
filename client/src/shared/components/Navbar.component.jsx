import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className='flex-row items-center justify-between p-2 sm:flex'>
                <img className="object-scale-down mx-auto sm:mx-0 sm:p-4 h-14 sm:h-16" src="../../../logo-light.svg" alt="Logo" />
                <ul className='flex justify-center m-2 font-sans sm:justify-normal sm:m-0'>
                    <Link className="p-2 mx-3 text-sm font-semibold text-white transition-all ease-linear bg-teal-700 rounded-md cursor-pointer duration-250 lg:text-base drop-shadow-xl hover:bg-teal-200 hover:text-gray-900 lg:mx-5 lg:py-2 lg:px-3" to="/">Home</Link>
                    <Link className="p-2 mx-3 text-sm font-semibold text-gray-900 transition-all ease-linear rounded-md cursor-pointer duration-250 lg:text-base drop-shadow-xl hover:bg-teal-700 hover:text-gray-100 lg:mx-5 lg:mr-11 lg:py-2 lg:px-3" to="/user">Users</Link>
                </ul>
            </div>
            <Outlet />
        </div>
    )
}

export default Navbar;
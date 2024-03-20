import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";



const NavBar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];

    return (
        <nav className=" bg-orange-400 p-10">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        <IoCloseSharp></IoCloseSharp>
                        : <HiMenuAlt1></HiMenuAlt1>
                }
            </div>
            <ul className={`md:flex md:items-center duration-1000 bg-orange-400 absolute 
            ${open ? 'top-16' : '-top-60 shadow-none'} 
            p-6 shadow-2xl sm:space-y-2 md:static `}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;
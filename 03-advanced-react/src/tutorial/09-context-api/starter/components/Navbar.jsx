import React, {useState, createContext, useContext} from 'react';
import DefaultUser from '../../../../assets/default-avatar.svg'
import NavLinks from "./NavLinks.jsx";

export const NavbarContext = createContext()

export const useAppContext = () => useContext(NavbarContext)

const Navbar = () => {
    const [user, setUser] = useState({name: "Bob"})
    return (
        <NavbarContext.Provider value={{user, setUser}}>
            <nav className="navbar">
                <h5>Context api</h5>
                <NavLinks />
            </nav>
        </NavbarContext.Provider>
    );
};

export default Navbar;
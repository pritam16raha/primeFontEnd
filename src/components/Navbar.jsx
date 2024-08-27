import React, { useState } from 'react'
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from "react-icons/md"

const Navbar = ({containerStyles}) => {

    const [isActive, setIsActive] = useState("home")
  return (
    <nav className={`${containerStyles}`}>
        <a href={'/'} onClick={()=> setIsActive("home")} className={isActive==="home"? "active-link" : ""}>Home</a>
        <a href={'/categories'} onClick={()=> setIsActive("categories")} className={isActive==="categories"? "active-link" : ""}>Categories</a>
        <a href={'/shop'} onClick={()=> setIsActive("shop")} className={isActive==="shop"? "active-link" : ""}>Shop</a>
        <a href={'/contact'} onClick={()=> setIsActive("contact")} className={isActive==="contact"? "active-link" : ""}>Contact</a>
    </nav>
  )
}

export default Navbar
import Link from "next/link"
import React from 'react'

const links =[{
  label: 'Home',
  route: '/'
},{
  label: 'About',
  route: '/about'
}
]

const Header = () => {
  return (
    <header className="bg-black">
        <nav>
        <ul className="text-white flex">
            {links.map(({label,route})=>(
            <li key ={route}>
                <Link href={route}>
                {label}
                </Link>                  
            </li>
            ))}
        </ul>
        </nav>
    </header>
  )
}

export default Header
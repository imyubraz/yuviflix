// "use client"

import Link from 'next/link'
import React from 'react'

const MyNavbar = () => {
    console.log("Client componenttt");
  return (
    <div className="wrapper bg- shadow-lg">
        <div className="container px-2 py-8">
            <div className="row flex">
                <div className="col logo w-1/4 text-xl font-bold">🎥 YuviFlix</div>
                <div className="col menu grow">
                    <nav>
                        <ul className="menus flex justify-end gap-8 text-lg font-medium">
                            <li className='menu'>
                                <Link href={`/`} className='hover:font-bold hover:text-red-700 transition-all ease-in-out duration-200'>Home</Link>
                            </li>
                            <li className='menu'>
                                <Link href={`/movie`} className='hover:font-bold hover:text-red-700 transition-all ease-in-out duration-200'>Movie</Link>
                            </li>
                            <li className='menu'>
                                <Link href={`/about`} className='hover:font-bold hover:text-red-700 transition-all ease-in-out duration-200'>About</Link>
                            </li>
                            <li className='menu'>
                                <Link href={`/contact`} className='hover:font-bold hover:text-red-700 transition-all ease-in-out duration-200'>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyNavbar
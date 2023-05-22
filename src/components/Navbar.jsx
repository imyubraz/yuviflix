"use client"

import React from 'react'

// importing styles in next.js
import styles from "@/styles/navbar.module.css"
import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/components/Nav';

const Navbar = () => {
  return (
    <div className="wrapper">
        <div className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href="/">
                    <Image src={"/yuviflix.png"} width={150} height={50}/>
                </Link>
            </div>
            <Nav/>
        </div>
    </div>
  )
}

export default Navbar
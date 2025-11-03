"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const AboutPage = () => {
 
    const router = useRouter();

    const isLoggedin = true;
    const handleNavigation = () =>{
        if(isLoggedin){
            router.push("/about/address")
        }
        else{
        router.push("/")
        }
    }

    return (
        <div>
            <p>About Page</p>
            <Link href={"/about/address"}>Address</Link>
            <button className='bg-amber-700 p-5' type='button' onClick={handleNavigation}>Address</button>
        </div>
    );
};

export default AboutPage;
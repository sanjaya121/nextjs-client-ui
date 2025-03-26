'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const NavBar = () => {
	return (
		<header className='px-5 bg-dark shadow-sm font-work-sans'>
			<nav className='flex justify-between items-center'>
				<Link href='/'>
					<Image
						src='/logo.png'
						alt='logo'
						width={80}
						height={80}
					/>
				</Link>
			</nav>
		</header>
	);
};

export default NavBar;

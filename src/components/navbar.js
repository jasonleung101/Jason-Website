import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6 cursor-pointer">
                <Link href="/">
                    <span className="font-semibold text-xl tracking-tight">
                        <span className="text-yellow-600 font-extrabold">{`{`}</span>
                        <span className="font-bold"> Dev - Jason </span>
                        <span className="text-yellow-600 font-extrabold">{`}`}</span>
                    </span>
                </Link>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 text-teal-200 text-white" onClick={handleClick}>
                    <svg className="fill-current h-[20px] w-[20px]" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div className={`${active ? '' : 'hidden'} w-full block lg:flex lg:items-center lg:w-auto`}>
                <div className="text-sm lg:flex-grow">
                    <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-white mr-4">
                        <Link href="/">
                            Home
                        </Link>
                    </div>
                    <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-white mr-4">
                        <Link href="/my-work">
                            My Work
                        </Link>
                    </div>
                    <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-white mr-4">
                        <Link href="/contact">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
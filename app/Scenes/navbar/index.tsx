'use client'
import Image from 'next/image';
import Link from './Link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import Logo from '../../../public/assets/Logo.png';
import { SelectedPage } from '@/app/Shared/types';
import useMediaQuery from '@/app/hooks/useMediQuery';
import ActionBtn from '@/app/Shared/ActionBtn';

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    pageTop: boolean;
}

const Navbar = ({ selectedPage, setSelectedPage, pageTop }: Props) => {
    // True if screen is > 1060px (med screen size)
    const isGreatThanMedScreen = useMediaQuery('(min-width: 1060px)');
    const [toggleMenu, setMenuToggle] = useState<boolean>(false);
    
    const handleMenuToggle = () => {
        if (!toggleMenu) {
            setMenuToggle(true);
        } else {
            setMenuToggle(false);
        }
    }

    const flexBetween = 'flex items-center justify-between';
    const navBackground = pageTop ? '' : 'text-claret bg-thistle dropshadow-xl'

    return (
        <nav>
            <div className={`${navBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* left side */}
                        <Image src={Logo} width={100} alt='logo' />
                        {/* right side */}
                        {isGreatThanMedScreen ? (
                            <div className={`${flexBetween} w-full `}>
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <Link
                                        page={'Home'}
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page={'Benefits'}
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page={'Classes'}
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page={'Contact'}
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>
                                {/* CTA */}
                                <div className={`${flexBetween} gap-8`}>
                                    <p>learn more</p>
                                    <ActionBtn setSelectedPage={setSelectedPage}>
                                        Book Now
                                    </ActionBtn>
                                </div>
                            </div>
                        )
                            :
                            (
                                <button
                                    className=' rounded-md bg-claret p-2'
                                    onClick={(handleMenuToggle)}
                                >
                                    <Bars3Icon className=' h-6 w-6 text-lavender' />
                                </button>
                            )}
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {!toggleMenu && !isGreatThanMedScreen && (
                <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-thistle drop-shadow-xl'>
                    {/* Close icon */}
                    <div className='flex justify-end p-12'>
                        <button
                            onClick={(handleMenuToggle)}>
                            <XMarkIcon className=' h-8 w-8 text-claret' />
                        </button>
                    </div>
                    {/* menu items */}
                    <div className={`ml-[33%] flex flex-col gap-10 text-xl font-semibold`}>
                        <Link
                            page={'Home'}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page={'Benefits'}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page={'Classes'}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page={'Contact'}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
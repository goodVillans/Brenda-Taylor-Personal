import { SelectedPage } from '@/app/Shared/types'
import useMediaQuery from '@/app/hooks/useMediQuery';
import HomePageGraphic from '../../../public/assets/HomePageGraphic.png'
import EvolveText from '../../../public/assets/EvolveText.png'
import Image from 'next/image';
import ActionBtn from '@/app/Shared/ActionBtn';
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    const isGreatThanMedScreen = useMediaQuery('(min-width: 1060px)');


  return (
    <section 
        id='home' 
        className='gap-16 bg-gray-50 py-10 md:h-full md:scroll-pb-10'
    >
        {/* image and main header */}
        <div className='md:flex  mx-auto w-5/6 items-center justify-center md:h-5/6 '>
            {/* main header */}
            <div className='z-10 mt-32 md:basis-3/5'>
                {/* headings */}
                <div className='md:-mt-20'>
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 before:content-evolvetext'>
                           <h1>Main Text</h1>
                           <h3>BY-LINE</h3>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid porro inventore beatae necessitatibus veritatis amet velit culpa praesentium. Ipsam quam culpa quis vitae natus quasi dolores harum excepturi nam exercitationem?</p>
                </div>
                {/* Actions */}
                <div>
                    <ActionBtn setSelectedPage={setSelectedPage}>
                        Book a session
                    </ActionBtn>
                    <AnchorLink 
                        className='text-sm font-bold text-claret underline hover:text-lavender'
                        onClick={() => setSelectedPage(SelectedPage.Contact)}
                        href={`#${SelectedPage.Contact}`}
                        >
                        <p>Learn more</p>
                    </AnchorLink>
                </div>
            </div>
            {/* image */}
            <div>
                <Image src={HomePageGraphic} alt="hero Image" />
            </div>
        </div>

    </section>
  )
}

export default Home
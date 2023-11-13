"use client"
import Logo from '@/public/assets/brendaname.png'
import Icon from '@/public/assets/brendaicon.png'
import Image from 'next/image';
import { SelectedPage } from '@/app/Shared/types';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

const Footer = ({setSelectedPage}: Props) => {
  return (
    <footer className='bg-lavender py-16'>
        <div className=' justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <div className='flex items-center justify-start -ml-4'>
                    <Image src={Icon} alt='icon' width={50}/>
                    <Image src={Logo} alt='logo' width={100} className='-ml-2'/>
                </div>
                <p className='my-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolor nam incidunt necessitatibus, voluptas officia quia illum dolores corporis similique!
                </p>
                <p className='text-sm font-sem'>
                    © Brenda Taylor All Rights Reserved
                </p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Social</h4>
                <p className='my-5 text-sm font-medium text-claret'>Youtube</p>
                <p className='my-5 text-sm font-medium text-claret'>Facebook</p>
                <p className='my-5 text-sm font-medium text-claret'>instagram</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Contact</h4>
                <p className='my-5'>for queries that are urgent, call the number below</p>
                <p className='my-5 text-sm font-medium text-claret'>054 678 0290</p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;

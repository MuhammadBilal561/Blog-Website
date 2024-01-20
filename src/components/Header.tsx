
import Image from 'next/image'
import BlogsPage from '@/app/blogs/page'
import Link from 'next/link'
import React from 'react'
import Logo from '/public/logo.png'


const Header = () => {
  return (<>

    <div className='mt-2 mr-2 '>
        <div className='flex p-2 justify-end gap-x-10 font-bold text-xl'>
<Link className='font-extrabold text-xl'  href={'/ '}>Home</Link>
<Link className='font-extrabold  text-xl '  href={'/blogs'}>Blog</Link>
<Link  className='font-extrabold text-xl ' href={'/signupForm'}>Sign Up</Link>
</div>

    </div>
  </>)

}

export default Header
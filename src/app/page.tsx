import Image from 'next/image'
import BlogsPage from '@/app/blogs/page'
import Link from 'next/link'
import React from 'react'
import Logo from '/public/logo.png'
import bg from '@/assets/Home.png'
import Header from '@/components/Header'
import Fotter from '@/components/Fotter'



export default function Home() {
  return ( 
<div className='flex flex-shrink-0 ' >
 <div className='relative w-full'>
<div className='absolute -z-10 w-full '>

<Image
 className=' bg-fixed bg-cover h-screen flex flex-shrink-0  '
 src={bg}
  alt='bg'
  />
</div>
<div className='flex justify-end'>
  <Header />
</div>
<div className='flex justify-end mt-96 pt-20 mr-10  '>
  <Fotter />
</div>
 </div>



</div>


    
  )
}

import React from 'react'
import { FaFacebookF,FaLinkedinIn,FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button"


const Fotter = () => {
  return (
    <div className='font-bold text-lg  lg:flex justify-end max-w-96  gap-x-3 font-bold mt-9  '>
 <div className='flex gap-x-3'>
         <Button className=' bg-slate-200  hover:bg-slate-200' size="icon">
      < FaFacebookF  className="w-4 h-4 text-lg text-black " />
    </Button>

    <Button className=' bg-slate-200 hover:bg-slate-200' size="icon">
      < FaTwitter className="w-4 h-4 text-lg text-black " />
    </Button>

    <Button className='bg-slate-200 hover:bg-slate-200' size="icon">
      < FaLinkedinIn className="w-4 h-4 text-lg text-black " />
    </Button>

         </div>        
        <span className='font-extrabold ml-4 text-2xl  '>Design BY M.Bilal</span>
    </div>
  )
}

export default Fotter
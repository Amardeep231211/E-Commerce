'use client'

import  { Key, useEffect, useState } from 'react'
import UpSlide from './component/UpSlide'
import Link from 'next/link';

function page() {
  const[product,setProduct]=useState([]);

  useEffect( ()=>{
    const getData=async()=>{
      let res=await fetch("http://localhost:3000/api/contact");
      const data=await res.json();
      setProduct(data.product);
    }
    getData();
   
  },[]);
  //Redireact to new page after collecting product id 

  
  console.log(product)
  return (
   <>
   {/* <UpSlide/> */}
   <div className='grid grid-cols-4 w-screen mt-4  cursor-pointer sm:text-left sm:w-auto  sm:flex-none mx-auto  shadow-blue-500/50 ' >
    {
     product.map((item,index)=>(
      <>
      <div  className=' bg-clip-border bg-cover outline-offset-2 shadow-2xl h-84 w-auto  hover:bg-neutral-300 '>
         <div className='bg-cover bg-fit sm:flex-col md:flex-row cover shadow-lg'>
           <img key={index} src={item.mediaUrl} alt="iamge" className=' bg-cover mt-0 justify-start bg-opacity-90 ' />
           </div>
           <div className=' p-1 sm:w-auto '>
           <p>{item.name}</p>
           <p> Rs{item.price}</p>
            <button>
           <Link href={'product/[id]'} as={`/product/${item._id}`}>View Product</Link>
           </button>
         </div >
        
         </div>
         
      
         </>
        
      
     ))

    }
     

   </div>  
   </>
  )
};

export default page


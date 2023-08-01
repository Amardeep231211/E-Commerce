'use client'

import { useRouter } from 'next/navigation';
import Link from 'next/link'
import { useState } from 'react'

const page = () => {
  const [userEmail, setEmail] = useState("")
  const [userPassword, setPassword] = useState("")
 const [message, setMessage] = useState([]);
  const router = useRouter();

  const userLogin = async (e) => {
    e.preventDefault();
    try {

      const res = await fetch('http://localhost:3000/api/userLogin', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail,
          userPassword
        }),
      });

      if (res.ok) {
        const message1= await res.json();
        setMessage(message1.message)
        router.push("/");

      }
      else{
        const message1= await res.json();
        setMessage(message1.message)
      }

    }  catch (error) {
      console.log(error);
  }
  
}

 


return (
  <div className='container w-[400px] text-black mt-7 text-center mx-auto card flex-col'>
    <h1 className='text-2xl'>Login</h1>
    <form onSubmit={userLogin}>
      <div className='flex-col flex gap-4 text-start mt-4'>
        <label>Email</label>
        <input type='email' placeholder='Email' value={userEmail}
          onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type='password' placeholder='Password' value={userPassword}
          onChange={(e) => setPassword(e.target.value)} />

      </div>
      <div className='relative flex flex-col sm:mx-auto  '>
        <button className='relative mt-7 ml-24  bg-blue-500 h-[40px] w-[150px] rounded-full hover:bg-blue-700 '>Login</button>
        <Link href={"/signUp"} className='mt-3 '>Don't hava a account ?</Link>
      </div>
    </form>

    <div className='bg-slate-100 flex flex-col'>
      <div className='text-red-600 px-5 py-2' >
        <p>{message}</p>
      </div>
    </div>

  </div>
)
}

export default page
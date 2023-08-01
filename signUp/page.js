'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
const signUp = () => {
    const [userName, setaName] = useState("")
    const [userEmail, setEmail] = useState("")
    const [userPassword, setPassword] = useState("")
    const [error1, setError] = useState([]);
    const router = useRouter();
    const userSignUP = async (e) => {

        e.preventDefault()
        try {

            const res = await fetch('http://localhost:3000/api/userSignup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userName,
                    userEmail,
                    userPassword
                }),

            });
            if (res.ok) {
                router.push("/login")
            }
            else {
                const response1 = await res.json();
                setError(response1.error)
                console.log(response1);
            }
        } catch (error) {
            console.log("error accure when data send", error);
        }




    }


    return (
        <div className='container w-[400px] text-black mt-7 text-center mx-auto card flex-col'>
            <h1 className='text-2xl'>Sign Up</h1>
            <form onSubmit={userSignUP}>
                <div className='flex-col flex gap-4 text-start mt-4'>
                    <label>Name</label>
                    <input type='text' placeholder='Name' value={userName}
                        onChange={(e) => setaName(e.target.value)} />
                    <label>Email</label>
                    <input type='email' placeholder='Email' value={userEmail}
                        onChange={(e) => setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type='password' placeholder='Password' value={userPassword}
                        onChange={(e) => setPassword(e.target.value)} />

                </div>
                <div className='relative flex flex-col sm:mx-auto  '>
                    <button className='relative mt-7 ml-24  bg-blue-500 h-[40px] w-[150px] rounded-full hover:bg-blue-700 '>Sign</button>
                    <Link href={"/login"} className='mt-3 '>Already hava a account ?</Link>
                </div>
            </form>

            <div className='bg-slate-100 flex flex-col'>
                <div className='text-red-600 px-5 py-2' >
                    <p>{error1}</p>
                </div>
              </div>
         </div>
    )
}

export default signUp
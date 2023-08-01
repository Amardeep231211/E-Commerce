
import Link from 'next/link'
import { cookies } from 'next/dist/client/components/headers';
function Navbar() {

  const cookiesList = cookies()
  const hasCookie = cookiesList.has('token');
  console.log("token",hasCookie)
 let user;
  if(hasCookie){
    user=true
  }
  else
  {
    user= false;
  }
  

  return (
    <>
      <nav className='bg-slate-400 h-14 w-screen sm:mx-auto'>
        <div className='flex  sm:ml-auto justify-start sm:flex-auto sm:mx-auto'>
          <div className='flex gap-11 mt-3    sm:ml-0 sm:mx-auto  '>
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href={"/contect"}>Contact</Link>
              </li>
            </ul>

          </div>
          <div className='justify-end  inline-flex gap-5 mt-3  '>
            <ul>
              <li>
                <Link href={"/card"}>Card</Link>
              </li>
            </ul>
            <div>
              <button className="peer  bg-slate-400 hover:bg-slate-500 text-slate-900 rounded-full  h-8 w-16  ">
                User</button> 
              <div className="hidden peer-hover:flex  hover:flex  w-[100px] flex-col bg-white drop-shadow-lg">
                
                { user ?
                  <>
                    <Link className="px-5 py-3 hover:bg-gray-200" href={"/logout"}>Logout</Link>
                  
                  </>

                :
                <>
                 <Link className="px-5 py-3 hover:bg-gray-200" href={"/login"}>Login</Link>
                
                <Link className="px-5 py-3 hover:bg-gray-200" href={"/signUp"}>SignUp</Link>
                </>
                }
                
               
              </div>
            </div>
            <div>
              <button className="peer  bg-slate-400 hover:bg-slate-500 text-slate-900 ounded-full h-8 w-16">
                Admin</button>
              <div className="hidden peer-hover:flex hover:flex w-[130px] flex-col bg-white drop-shadow-lg">
                <Link className="px-3 py-3 hover:bg-gray-200" href={"/addObject"}>Add Product</Link>
                
              </div>
            </div>
          
          </div>

        </div>

      </nav>

    </>
  )
}

export default Navbar
'use client'
import Link from "next/link"
function UpSlide() {
  return (
    <>
    <div className=" w-screen flex" >
      <div className="w-3/5 bg-sky-500 z-10">
        <div className="text-center mt-20 ml-24 font-semibold">
          <p className="p-2">explore to best </p>
          This is a best site to use for booking and shopying 
        </div>
        <button className="rounded bg-slate-200 ml-24">
          <Link href={"#"}>know More</Link>
          </button>
      </div> 
        <div className="flex-initial w-screen bg-cover  bg-no-repeat  ">
           <img className=" h-96 w-screen "src="sh3.jpg" alt="shopping image" />
           </div>
    </div>
    </>
  )
}

export default UpSlide
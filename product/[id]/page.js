
async function getPost(params){
  const {id}  = params;
  let res=await fetch(`http://localhost:3000/api/contact/${id}`)
  const data= await res.json()
 return data
}
export default async function page({params}){
  const data=await getPost(params)
  const produts=(data.product)
  return(
    <>
    <div className="containerforproductDetails flex grid-flow-row sm:flex-col md:flex-row sm:text-left sm:mx-auto ">
      <div className="relative  h-full w-2/3 sm:flex-col sm:text-left sm:text-2xl">
      <img src={produts.mediaUrl} alt="Product Image" className="h-[400px]" />
      <span className=" text-center  ml-[40%] text-3xl uppercase mt-[30px] text-black">{produts.name}</span>
      </div>
      <div className=" flex-col h-full w-1/2 bg-gray-700 ">
        
          <ul>
            <li>
            <p>{produts.name}</p>
          <span>{produts.price}</span>
          <span>{produts.description}</span>
            </li>
          </ul>
        <button>By Now</button>
      </div>

    </div>
    
    </>
  )
  
  }
  

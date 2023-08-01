'use client'
import { useState } from "react"

function page() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [mediaUrl, setMediaUrl] = useState("")
  const [error, setError] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        name,
        price,
        description,
        mediaUrl,
      }),
    });
    const msg = await res.json()
    setError(msg.error)
     };
   
 return (
    <div className='p-8 max-w-3xl mx-auto '>
      <h1 className='text-3xl'>Add Product</h1>

      <form onSubmit={handleSubmit}
        className='p-4 mt-4 border-1 flex flex-col gap-5'>
        <div>
          <label htmlFor='name'>Name</label>
          <input onChange={(e) => { setName(e.target.value) }}
            value={name}
            type='text' id="name" placeholder='shirt' />
        </div>
        <div>
          <label htmlFor='price'>Price</label>
          <input onChange={(e) => { setPrice(e.target.value) }}
            value={price}
            type='number' id="price" placeholder='1200' />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <textarea className='h-32'
            onChange={(e) => { setDescription(e.target.value) }}
            value={description}
            id="description" placeholder='this is a fashion shirt'
          >
          </textarea>
        </div>
        <div>
          <label htmlFor='mediaurl'>MediaUrl</label>
          <input onChange={(e) => { setMediaUrl(e.target.value) }}
            value={mediaUrl}
            type='text' id="mediaurl" placeholder='http://local---' />
        </div>
        <button className='bg-green-700 p-3 text-white font-bold'>Submit</button>
      </form>
      <div className='bg-slate-100 flex flex-col'>
        <div className='text-red-600 px-5 py-2' >
          <p>{error}</p>
        </div>
      </div>
    </div>
  )
}

export default page
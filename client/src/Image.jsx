import React, { useState } from 'react'
import axios from 'axios'

const Image = () => {
    const [prompt,setPropmt] = useState('')
    const [generatedImage,setGeneratedImage] = useState(null)
    const handleSubmit =async (e)=>{
        e.preventDefault()
        const res = await axios.post('http://localhost:7000/image-generate',{prompt})
        if (!res) {
            console.log('some problem encountered!!');
        }
        setGeneratedImage(res.data[0].url)
    }
    
  return (
    <div className='w-full h-screen bg-pink-300 flex'>
        <div className='max-w-[80%] w-full m-auto flex flex-col gap-10'>
            <h1 className='text-2xl sm:text-4xl font-[900] text-[#ca0b2b] text-center sm:text-left'>Generate Image Using AI</h1>
            <img width={500} src={`${generatedImage? 'girl.webp':generatedImage}`} alt="girl" className='rounded-lg '/>
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-3 '>
                <label className='text-xl sm:text-3xl text-[#d3435b] text-center sm:text-left'>What do you want to create?</label>
                <input type="text"  id="text" placeholder='type here' className='px-4 py-2 rounded-lg bg-[#eb89b7] text-white outline-none border-2px border-[#a86671] text-2xl' onChange={(e)=>setPropmt(e.target.value)}/>
                <button className='px-4 py-2 rounded-lg bg-[#eb89b7] text-2xl font-bold text-[#ec7689]'>Generate</button>
            </form>
        </div>
    </div>
  )
}

export default Image
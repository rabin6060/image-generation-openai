import React, { useState } from 'react'
import axios from 'axios'

const Image = () => {
    const [prompt,setPropmt] = useState('')
    const [generatedImage,setGeneratedImage] = useState(null)
    const [loading,setLoading] = useState(false)
    const handleSubmit =async (e)=>{
        e.preventDefault()
        setPropmt('')
        setLoading(true)
        const res = await axios.post('http://localhost:7000/image-generate',{prompt})
        if (!res) {
            console.log('some problem encountered!!');
        }
        setLoading(false)
        setGeneratedImage(res.data[0].url)
    }

  return (
    <div className='w-full h-screen bg-pink-300 flex'>
        <div className='max-w-[80%] w-full m-auto flex flex-col gap-10 items-center justify-center'>
            <h1 className='text-2xl sm:text-4xl font-[900] text-[#ca0b2b] text-center sm:text-left'>Generate Image Using AI</h1>
            <img width={500} src={`${generatedImage? generatedImage:'girl.webp'}`} alt="girl" className='rounded-lg '/>
            <form onSubmit={handleSubmit} className='w-full sm:w-[60%] flex flex-col gap-3 '>
                <label className='text-xl sm:text-3xl text-[#d3435b] text-center'>What do you want to create?</label>
                <input type="text"  id="text" placeholder='type here' className='px-4 py-2 rounded-lg bg-[#eb89b7] text-[#974855] outline-none border-2px border-[#a86671] text-2xl' onChange={(e)=>setPropmt(e.target.value)}/>
                <button className='px-4 py-2 rounded-lg bg-[#eb89b7] text-2xl font-bold text-[#a84d5d]'>
                    {(loading)?'Loading....':'Generate' }
                </button>
            </form>
        </div>
    </div>
  )
}

export default Image
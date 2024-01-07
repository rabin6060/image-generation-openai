import React, { useState } from 'react'
import axios from 'axios'

const Image = () => {
    const [prompt,setPrompt] = useState('')
    const [generatedImage,setGeneratedImage] = useState(null)
    const [loading,setLoading] = useState(false)
    const handleSubmit =async (e)=>{
        e.preventDefault()
        
        setLoading(true)
        try {
            const res = await axios.post('http://localhost:7000/image-generate',{prompt})
            if (res && res.data.length>0) {
                setGeneratedImage(res.data[0].url)
        }
        } catch (error) {
            console.log(error);
            console.log('some problem encountered!!');
        }
        
        setPrompt('')
        setLoading(false)
        
    }
        const handleDownload = () => {
        if (generatedImage) {
            // Create a temporary anchor element
            const link = document.createElement('a');
            link.href = generatedImage;
            link.download = 'generated_image.jpg'; // Set the desired file name
            link.target = '_blank'
            link.click();
        }
    };

  return (
    <div className='w-full h-screen bg-pink-300 flex'>
        <div className='max-w-[80%] w-full m-auto flex flex-col gap-10 items-center justify-center'>
            <h1 className='text-2xl sm:text-4xl font-[900] text-[#ca0b2b] text-center sm:text-left'>Generate Image Using AI</h1>
             {loading ? (
                <div className='w-[500px] h-[500px] bg-[pink] rounded-lg flex items-center justify-center'>Loading...</div>
            ) : (
            <img width={500} src={generatedImage || 'girl.webp'} alt="girl" className='rounded-lg '/>
            )}
            <button
                    onClick={handleDownload}
                    className='px-4 py-2 rounded-lg bg-[#eb89b7] text-2xl font-bold text-[#a84d5d]'
                    disabled={!generatedImage} // Disable button if no image is generated
                >
                    Download Image
                </button>
            <form onSubmit={handleSubmit} className='w-full sm:w-[60%] flex flex-col gap-3 '>
                <label className='text-xl sm:text-3xl text-[#d3435b] text-center'>What do you want to create?</label>
                <input type="text"  id="text" placeholder='type here' className='px-4 py-2 rounded-lg bg-[#eb89b7] text-[#974855] outline-none border-2px border-[#a86671] text-2xl' onChange={(e)=>setPrompt(e.target.value)}/>
                <button className='px-4 py-2 rounded-lg bg-[#eb89b7] text-2xl font-bold text-[#a84d5d]'>
                    {(loading)?'Loading....':'Generate' }
                </button>
            </form>
        </div>
    </div>
  )
}

export default Image
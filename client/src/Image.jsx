import React from 'react'

const Image = () => {
  return (
    <div className='w-full h-screen bg-pink-300 flex'>
        <div className='max-w-[80%] w-full m-auto flex flex-col gap-10 justify-center items-center'>
            <h1 className='text-3xl sm:text-4xl font-[900] text-[#ca0b2b]'>Generate Image Using AI</h1>
            <img width={500} src="girl.webp" alt="girl" className='rounded-lg '/>
            <form className='w-full flex flex-col gap-2'>
                <label className='text-xl sm:text-2xl text-[#d3435b]'>What do you want to create?</label>
                <input type="text"  id="text" placeholder='type here' className='px-4 py-2 rounded-lg bg-[#eb89b7] text-white outline-none border-2px border-[#a86671] text-2xl'/>
                <button className='px-4 py-2 rounded-lg bg-[#eb89b7] text-2xl font-bold text-[#ec7689]'>Generate</button>
            </form>
        </div>
    </div>
  )
}

export default Image
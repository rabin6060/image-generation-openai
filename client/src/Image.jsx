import React from 'react'

const Image = () => {
  return (
    <div className='w-full h-screen bg-pink-300 flex'>
        <div className='max-w-[80%] w-full m-auto flex flex-col gap-10 justify-center items-center'>
            <h1 className='text-3xl sm:text-4xl font-[900] text-[#ca0b2b]'>Generate Image Using AI</h1>
            <img src="girl.webp" alt="girl" />
            <form className='flex flex-col'>
                <label>What do you want to create?</label>
                <input type="text"  id="text" placeholder='type here'/>
            </form>
        </div>
    </div>
  )
}

export default Image
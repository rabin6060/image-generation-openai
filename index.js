import express from 'express'
import { openai } from './openai.js'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()
app.use(cors({
    origin:'http://localhost:5173'
}))

app.post('/image-generate',async (req,res)=>{
    try {
        const image = await openai.images.generate({
        model:'dall-e-2',
        prompt:'batman'
        });
       
        if (!image.data) {
            res.status(500).send("internal server error")
        }
        res.status(200).json(image.data)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

app.listen(process.env.PORT,()=>{
    console.log(`connected to a port ${process.env.PORT}`);
})

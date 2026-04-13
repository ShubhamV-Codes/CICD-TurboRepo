import "dotenv/config";
import express from 'express';
import { prisma } from '@repo/db'; // coming from packages section prisma
const app = express();
app.use(express.json());

app.get('/', async (req, res)=>{
    res.send('Hello World!');
});

app.post('/signup', async(req, res)=>{
    const {username, password} = req.body;
     const user = await prisma.user.create({
        data:{
            username,
            password
        }
    })
    res.json({
        message:"Signup successful",
        id: user.id
    })
});

app.listen(3002);
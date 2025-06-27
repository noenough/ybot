import { GoogleGenerativeAI } from '@google/generative-ai'; 
import express from "express";
import cors from 'cors';

const app=express();
app.use(express.json());
app.use(cors());
let lastAnswer="";
const ai = new GoogleGenerativeAI("AIzaSyChCkTa6Rmxoj7HzBGgVhjfecHA-9LTKkw");
app.post('/que',async (req,res)=>{
var question=req.body['que'];

try {
  const model=ai.models.getGenerativeModel({ model: "gemini-2.5-flash" });
  const result = await model.generateContent(question);
  const response = result.response;
  const text=response.text;

  res.status(200).json({message:"Success from Gem API"});
 
app.get('/ans',(req,res)=>{
  res.json({answer:text});
})
} catch (error) {
  res.status(500).json({message:"Error from Gem API"})
}
 
});

app.listen(8080);
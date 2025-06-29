import { GoogleGenAI } from "@google/genai";
import express from "express";
import cors from 'cors';

const app=express();
app.use(express.json());
app.use(cors());
let lastAnswer="";

import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI("Your api key");

app.post('/que', async (req, res) => {
  try {
    const message=req.body["que"];
    const result=ai.getGenerativeModel({model:"gemini-2.5-flash"});
    const jgp=await result.generateContent(message);
    res.json({ans:jgp.response.text()});
    
   } catch (error) {
    console.log(error);
  }
});
app.listen(8080);

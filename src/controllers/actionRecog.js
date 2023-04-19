import { actionRecog } from "../models/openai.js";
import globalConv from "../models/globalConv.js";

const { error } = globalConv;

export default async function(req, res){
  const { prompt } = req.query;
  if (!prompt) return res.status(error.INVALID_PROMPT.status).json(error.INVALID_PROMPT);
  
  try{
    const resv = await actionRecog(prompt)
    return res.status(200).json({status: 200, data: JSON.parse(resv.choices[0].text)})
  }catch (err){
    return res.status(501).json({error: "Model overload, try again."})
  }
}
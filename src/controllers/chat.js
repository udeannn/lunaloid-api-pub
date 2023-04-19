/**
 * Chat controllers
 * 
 * @author: miruchigawa
 * 
*/


import { chat } from "../models/openai.js";
import globalConv from "../models/globalConv.js";

const { error } = globalConv;

export default async function(req, res) {
  const { prompt } = req.query
  
  /** ------------ Handling If Doesn't Have Prompt ------------ **/
  if (!prompt) return res.status(error.INVALID_PROMPT.status).json(error.INVALID_PROMPT)
  /** ------------ END ------------ **/
  
  try{
    const resv = await chat(prompt)
    return res.status(200).json({status: 200, data: resv.choices[0].text})
  }catch (err){
    console.log(err)
    return res.status(501).json({error: "Model overload, try again."})
  }
}
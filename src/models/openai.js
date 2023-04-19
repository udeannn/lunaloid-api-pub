import { Configuration, OpenAIApi } from "openai";
import fs from "fs";
import globalConv from "./globalConv.js"



const configuration = new Configuration({
  apiKey: globalConv.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);


export async function chat(prompt) {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `${globalConv.PRASE}\nUser: ${prompt}\nLunaloid:`,
        max_tokens: 3000,
        temperature: 1
      })
      resolve(resp.data)
    }catch (e){
      console.log(e)
      reject(e)
    }
  })
}

export async function actionRecog(prompt) {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `# instructions
change text into json object value action and key
Action are user commands
Key is value command eg. 30 second, chicken on floor
Response must json

user: luna create image chicken
luna: { "action": "create image", "key": "chicken" }
user: create image anime girls holding sword
luna: { "action": "create image", "key": "anime girls holding sword" }
user: luna open camera on 30 sec
luna: { "action": "open camera", "key": "30 sec" }
user: <foreign question>
luna: { "action": null, "key": null }
user: ${prompt}
luna:`,
        max_tokens: 3000,
        temperature: 1
      })
      resolve(resp.data)
    }catch (e){
      console.log(e)
      reject(e)
    }
  })
}

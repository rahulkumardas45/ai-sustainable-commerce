const Groq = require("groq-sdk")

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})

async function generateCategory(name, description){

const prompt = `
You are an AI that classifies products for an e-commerce catalog.

Return ONLY valid JSON.
Do not include explanations.
Do not include markdown.

Product Name: ${name}
Description: ${description}

JSON format:

{
"category":"",
"subcategory":"",
"tags":[],
"sustainability_filters":[]
}
`

const response = await groq.chat.completions.create({
  model: "llama-3.1-8b-instant",
  messages: [
    {
      role: "user",
      content: prompt
    }
  ]
})

return {
  prompt: prompt,
  response: response.choices[0].message.content
}

}

module.exports = { generateCategory }
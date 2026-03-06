const { generateCategory } = require("../services/aiService")
const { calculateImpact } = require("../services/impactService")

// import model to store the response in db
const Product = require("../models/productModel")
const Impact = require("../models/impactModel")
const AiLog = require("../models/aiLogModel")

// model1
exports.generateTags = async (req, res) => {

    try {
        const { name, description } = req.body

        const result = await generateCategory(name, description)


        // extract JSON
        const jsonMatch = result.response.match(/\{[\s\S]*\}/)
        const parsed = JSON.parse(jsonMatch[0])
  

        // save the prompt and response to AiLog
        await AiLog.create({
            prompt: result.prompt,
            response: result.response
        })




        // save to db
        const product = await Product.create({
            name: name,
            description: description,
            category: parsed.category,
            subcategory: parsed.subcategory,
            tags: parsed.tags,
            sustainability_filters: parsed.sustainability_filters
        })

        res.json(product)

    } catch (error) {
        res.status(500).json({ error:"AI service failed" })

    }

}

//module2
exports.generateImpact = async (req, res) => {

    try {
        const { product, quantity } = req.body


        const result = calculateImpact(product, quantity)

        //asve to db

        const impactRecord = await Impact.create({
            product: product,
            quantity: quantity,
            plastic_saved: result.plastic_saved,
            carbon_avoided: result.carbon_avoided,
            impact_statement: result.impact_statement
        })


        res.json(impactRecord)

    } catch (error) {
        res.status(500).json({ error:"AI service failed" })
    }
}
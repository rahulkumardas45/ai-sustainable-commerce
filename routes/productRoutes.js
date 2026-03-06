const express = require("express")

const router = express.Router()

const {generateTags,generateImpact} = require("../controllers/productController")

router.post("/generate-category",generateTags)

router.post("/impact-report",generateImpact)

module.exports = router
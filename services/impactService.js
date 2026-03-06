function calculateImpact(product,quantity){

const plastic_saved = quantity * 100
const carbon_avoided = quantity * 1.5

return {

plastic_saved,
carbon_avoided,
impact_statement:`This order avoided ${plastic_saved} plastic bottles`

}

}

module.exports = {calculateImpact}
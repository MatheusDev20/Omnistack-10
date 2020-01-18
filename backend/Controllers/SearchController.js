const Dev = require('../Models/Dev')
const parseString = require('../utils/ParseStringArray')
module.exports = {
    async index(req,res) {
        // Buscar todos os devs num raio espécifico e filtrar por techs
        console.log(req.query)
        const {latitude,longitude,techs} = req.query
        const techsArray = parseString(techs)

        const devs = await Dev.find({
            techs: {
                $in: techsArray
            },
            location:{
                $near: {
                    $geometry:{
                       type:'Point',
                       coordinates: [longitude,latitude]
                    },
                    $maxDistance: 10000
                }
            }

        })
        return res.json({devs})
    },
}

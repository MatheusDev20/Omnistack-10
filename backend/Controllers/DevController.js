const axios = require('axios')
const Dev = require('../Models/Dev')
const parseString = require('../utils/ParseStringArray')
module.exports = {

    async index(req,res) {
        const devs =  await Dev.find()
        return res.json(devs)
    },
    async store(req,res)  {
    console.log(req.body);
    const {github_username, techs, latitude, longitude} = req.body

    // Verificando se ja existe um dev
        let dev = await Dev.findOne({
            github_username
        })
        if(!dev){
    const apiResponse =  await axios.get(`https://api.github.com/users/${github_username}`);
    
    let {name,avatar_url,bio} = apiResponse.data
    if(!name) {
        name = apiResponse.data.login
    }
    const techsArray = parseString(techs)
    
    const location = {
        type:'Point',
        coordinates: [longitude,latitude]
    }
    
     let dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
           
    })
}
    return res.json(dev)
},
async update() {

},
async destroy(){

}
}
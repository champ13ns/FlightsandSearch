const {City} = require('../models/index.js')

class CityRepository{

    async createCity({name}){
        console.log("name is ",name)
        try{
            const newCity =  await City.create({
                name
            });
            return newCity;
        } catch(err){
            console.log("error from repo layer");
            throw(err)
        }
    }

    async deleteCity(id){
        try{
            await City.destroy({
                where:{
                    id : id
                }
            })
        } catch(err){
            console.log("error from repo layer");
            throw(err)
        }
    }

    async updateCity(data , cityId){
        const city = await City.update(data , {
            where:{
                id : cityId
            }
        })
        return city;
    }

    async getCity(cityId){
        try{
            console.log("city ID is ",cityId)
            const city = await City.findByPk(cityId)
            return city;
        }
        catch(err){
            console.log("error from repo layer");
            throw(err)
        }
    }
    
}

module.exports = CityRepository;

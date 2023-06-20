const {City} = require('../models/index.js')

class CityRepository{
    async createCity({name}){
        try{
            await City.create({
                name
            });
            return City;
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
    }

    async getCity(cityId){
        try{
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

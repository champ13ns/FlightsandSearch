const { CityRepositoryityRepository } = require('./../repository/index')
class CityService {
    constructor(){
        this.cityRepository = new CityRepository()
    }
    async createCity(data){
        try{
            const city = this.cityRepository.createCity(data);
            return city;
        } catch(err){
            console.log("something went wrong on service layer");
            throw(err)
        }
    }
    async deleteCity(id){
        try{
            const city = this.cityRepository.deleteCity(id);
            
        } catch(err){
            console.log("something went wrong on service layer");
            throw(err)
        }
    }
    async updateCity(cityId, data){
        try{
            const city = this.cityRepository.updateCity(cityId , data);
            return city;
        } catch(err){
            console.log("something went wrong on service layer");
            throw(err)
        }
    }
    async getCity(){
        try{
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch(err){
            console.log("something went wrong on service layer");
            throw(err)
        }
    }
}

module.exports = {
    CityService
}
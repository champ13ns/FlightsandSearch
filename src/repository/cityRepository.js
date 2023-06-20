const {City} = require('../models/index.js')

class cityRepository{


    async  createCity(name){
    await City.create(name).then((val) => {
        console.log(val);
    });
    return City;
}

    async  deleteCity (id){
    await City.destroy({
        where : {
            id : id
        }
    }).then(() => {
        console.log("City deleted");
    })
}
}

module.exports = cityRepository;

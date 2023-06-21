const {CityService} = require('./../services/cityService.js')

const cityService = new CityService();

const create = async(req,res) => {
    // POST , data will be inside req.body

    try{
        console.log(req.body)
        const city = await cityService.createCity(req.body);
        return res.status(200).json({
            data : city,
            success : true,
            message : "Successfully created city",
            err : {}
        })
    }   
    catch(err){
        console.log(err);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to create city',
            err : err
        })
    }
}

const destroy = async(req,res) => {
    // GET ->  
    // req.params.id
    try{
        const city = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data : city,
            success : true,
            message : "Successfully deleted city",
            err : {}
        }) 
    }   
    catch(err){
        return res.status(501).json({
            data : {},
            success : false,
            message : 'Not able to delete city',
            err : err
        })
    }
}

const update = async(req,res) => {
    // PATCH -> /city/:id
    // data -> req.body
    try{
        const city = await cityService.updateCity(req.body , req.params.id);
        return res.status(200).json({
            data : city,
            success : true,
            message : "Successfully updated city",
            err : {}
        }) 
    }   
    catch(err){
        return res.status(501).json({
            data : {},
            success : false,
            message : 'Not able to update the city',
            err : err
        })
    }
}

const get = async(req,res) => {
    // GET , /city/:id
    try{
        console.log(req.params.id)
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data : city,
            success : true,
            message : "Successfully get city",
            err : {}
        }) 
    }   
    catch(err){
        return res.status(501).json({
            data : {},
            success : false,
            message : 'Not able to get  city',
            err : err
        })
    }
}

module.exports = {
    create,destroy,update,get
}

const CarModel = require("../models/car");
const ClientModel = require("../models/client");

const CarController = {
  getCarstByClientId: async (req,res) => {
    try {       
      const client = await ClientModel.findById(req.params.idClient);
      if (client) {
        const carsClient = await CarModel.find({owner: req.params.idClient});
        res.status(200).json(carsClient);
      } else {
        res.status(200).json({cod:1, message: "No existe un cliente con ese ID"});
      }

      
    } catch (error) {
      res.status(400).json({message: error.message});
    }
  },
  createCar: async (req,res) => {
    const newCar = new CarModel(req.body);

    try {
      const saveCar = await newCar.save();
      res.json(saveCar);      
    } catch (error) {
      res.status(400).json({message: error.message});
    }
  },

}

module.exports = CarController;
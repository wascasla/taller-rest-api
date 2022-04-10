const RepairModel = require("../models/repair");

const RepairController = {
  getRepairsByCarId: async (req,res) => {
    const client = await RepairModel.find({car: req.params.idCar}).sort({date: 'desc'});
    res.json(client);
  },
  createRepair: async (req,res) => {
    const newRepair = new RepairModel(req.body);

    try {
      const saveRepair = await newRepair.save();
      res.status(200).json(saveRepair);      
    } catch (error) {
      res.status(400).json({message: error.message});
    }
  },

  deleteRepair: async (req, res) => {
    try {
      await RepairModel.findByIdAndDelete(req.params.idRepair);
      res.status(200).json({message: "Eliminado con exito"});
    } catch (error) {
      res.status(400).json({message: error.message});
    }
  }

}

module.exports = RepairController;
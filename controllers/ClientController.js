const ClientModel = require("../models/client");

const ClientController = {
  getClientByName: async (req,res) => {
    const client = await ClientModel.find({name: req.params.name});
    res.json(client);
  },
  getAllClients: async (req,res) => {
    const clients = await ClientModel.find();
    res.json(clients);
  },
  createClient: async (req,res) => {
    const newClient = new ClientModel(req.body);

    try {
      const saveClient = await newClient.save();
      res.json(saveClient);      
    } catch (error) {
      res.status(400).json({message: error.message});
    }
  },

}

module.exports = ClientController;
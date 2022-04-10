const express = require('express');
const CarController = require('../controllers/CarController');
const ClientController = require('../controllers/ClientController');
const RepairController = require('../controllers/RepairController');

const router = express.Router()

module.exports = router;

router.get('/client/all', ClientController.getAllClients);
router.post('/client/create', ClientController.createClient);
router.get('/client/:name', ClientController.getClientByName);

router.get('/car/:idClient', CarController.getCarstByClientId);
router.post('/car/create', CarController.createCar);

router.get('/repair/:idCar', RepairController.getRepairsByCarId);
router.post('/repair/create', RepairController.createRepair);
router.delete('/repair/delete/:idRepair', RepairController.deleteRepair);

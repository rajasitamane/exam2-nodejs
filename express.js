var bodyParser = require('body-parser');
const express = require('express');
var app = express();
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Controller
var controller = require('./controller');

app.use('/api', router);

//To get gadget by id - GET method
router.route('/gadgets/:id').get(controller.getGadgetById);

//To get all gadgets - GET method
router.route('/gadgets').get(controller.getAllGadgets);

//To insert gadget - Post Method
router.route('/gadgets').post(controller.insertGadget);

//To update existing gadget by id
router.route('/gadgets/:id').put(controller.updateGadget);

//To delete gadget
router.route('/gadgets/:id').delete(controller.deleteGadget);


module.exports = app;
//Model
var Gadgets = require('./gadgets');
logger = require('./logger');

//Get gadget by ID
var getGadgetById = function(req,res,next){
    Gadgets.findById(req.params.id)
        .then(gadget => {
            if (gadget) {
                res.status(200).json(gadget);
            } else {
                res.status(404).json({
                    message: "No gadget found"
                });
            }
        }).catch(err => {
            return next(err);
        });
}

//To get all gadgets - GET method
//find method is used to get all objects
var getAllGadgets = function (req, res, next){
    logger.log('info', 'Get all gadgets');
    Gadgets.find()
        .sort()
        .exec()
        .then(result => {
            if (result && result.length) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: "No Gadgets" });
            }
        })
        .catch(err => {
            return next(err);
        });
};


//To insert gadget - Post Method
//save method is used to save objects to collection in MongoDb
var insertGadget = function (req, res, next){
    logger.log('info', 'Create gadget'); 
    var gadget = new Gadgets(req.body);
    gadget.save()
        .then(result => {
            res.status(201).json(result);
        })
        .catch(err => {
            console.log(err);
        });
};


//To update existing gadget by id
var updateGadget = function (req, res, next){
    Gadgets.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, multi: false })
        .then(gadget => {
            res.status(200).json(gadget);
        })
        .catch(error => {
            return next(error);
        });
};


//To delete gadget
var deleteGadget = function (req, res, next) {
    logger.log('info', 'Delete gadget ' + req.params.id);
    Gadgets.remove({ _id: req.params.id })
        .then(gadget => {
            res.status(200).json({ msg: "Gadget Deleted" });
        })
        .catch(error => {
            return next(error);
        });
};

module.exports = { getGadgetById, getAllGadgets, insertGadget, updateGadget, deleteGadget};
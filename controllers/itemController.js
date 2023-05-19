const itemService = require('../models/items');

const getTopSellingItems = async(req,res) => {
    try {
        const result = await itemService.getTopSellingItems();
        res.json(result);
    } catch(err) {
        res.status(404).send({
            error: err.message
        });
    }
}

const getProductDetails = async(req,res) => {
    try {
        const result = await itemService.getProductDetails();
        res.json(result);
    } catch(err) {
        res.status(404).send({
            error: err.message
        });
    } 
}

const updateItem = async(req,res) => {
    try {
        const itemId = req.params.itemId;
        const updateData = req.body;
        const result = await itemService.updateItem(itemId, updateData);
        res.json(result);
    } catch(err) {
        res.status(404).send({
            error: err.message
        });
    }
}

const deleteItem = async(req,res) => {
    try {
        const itemId = req.params.itemId;
        const result = await itemService.deleteItem(itemId);
        res.json(result);
    } catch(err) {
        res.status(404).send({
            error: err.message
        });
    } 
}

module.exports = { getTopSellingItems, getProductDetails, updateItem, deleteItem }
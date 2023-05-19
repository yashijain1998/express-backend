const Item = require('./itemSchema');

const getTopSellingItems = async () => {
    try {
        // this will sort the items based on quantity sold 'Qty' and return top 10
        const result = await Item.find().sort({Qty: -1}).limit(10);
        return result;
    } catch(err) {
        throw err;
    }
}

const getProductDetails = async() => {
    try{
        const threeshold = 100;
        const lowStock = await Item.find({RemainingQty: {$lt:threeshold}}).count();
        const inStock = await Item.find({RemainingQty: {$gt:0}}).count();
        const itemGroup = (await Item.distinct('Group Name')).length;
        return {
            lowStock,
            inStock,
            itemGroup
        }
    } catch(err) {
        throw err;
    }
}

const updateItem = async(itemId, updateData) => {
    try {
        const allowedUpdatesProperty = ['Item Description', 'RemainingQty', 'Price', 'Qty'];
        const requestProperty = Object.keys(updateData);
        const isAllow = requestProperty.every((property) => allowedUpdatesProperty.includes(property));
        if (!isAllow) {
            throw new Error(`Allowed updates are available only on ${allowedUpdatesProperty}`);
        }

        const item = await Item.findById(itemId);
        if(!item) {
            throw new Error('Item does not exist');
        }
        const updatedItem = await Item.findByIdAndUpdate(itemId, updateData, { new: true });
        return updatedItem;
    } catch(err) {
        throw err;
    }
}

const deleteItem = async(itemId) => {
    try {
        const deletedItem = await Item.findByIdAndRemove(itemId);
        if (!deletedItem) throw new Error('item does not exist');
        return deletedItem;
    } catch(err) {
        throw err;
    }
    
}

module.exports = { getTopSellingItems, getProductDetails, updateItem, deleteItem }
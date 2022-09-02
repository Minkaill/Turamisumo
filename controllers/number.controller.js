const Room = require("../Models/Room.model")


module.exports.numberController = {
    getNumbers: async (req, res) => {
        try {
            const getNumbers = await Room.find()
            return res.json(getNumbers)
        } catch (error) {
            res.json(error.message)
        }
    }
}
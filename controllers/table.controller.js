const Table = require("../Models/Table.model");
const User = require("../Models/User.model");

module.exports.tableController = {
  bookingTable: async (req, res) => {
    try {
      const { tableId } = req.params;
      const setTable = await Table.findById(tableId);
      await Table.findByIdAndUpdate(tableId, {
        booking: !setTable.booking,
      });
      res.json(await Table.find());
    } catch (e) {
      res.json(e);
    }
  },
  postTable: async (req, res) => {
    try {
      for (let i = 15; i < 16; i++) {
        console.log(i);
        await Table.create({
          number: i,
          booking: false,
        });
      }
      res.json("готово");
    } catch (e) {
      res.json(e);
    }
  },
  getTable: async (req, res) => {
    try {
      res.json(await Table.find());
    } catch (e) {
      res.json(e);
    }
  },
  postTableChange: async (req, res) => {
    try {
      const { userId } = req.params;
      const setUser = await User.findById(userId);
      const { id, booking } = req.body;
      const idBooking = await Table.findById(id);
      await Table.findByIdAndUpdate(idBooking._id, { booking: !booking });
      res.json({ message: "Success" });
    } catch (e) {
      res.json(e);
    }
  },

  // postRoomType: async (req, res) => {
  //     try {
  //         const { name, images, price } = req.body
  //         const setRoomType = await RoomType.create({
  //             name,
  //             images,
  //             price
  //         })
  //         res.json(setRoomType)
  //     }
  //     catch (e) {
  //         res.json(e)
  //     }
  // },
  // getRoomType: async (req, res) => {
  //     try {
  //         const { type } = req.params
  //         if (type === 'all') {
  //             res.json(await RoomType.find())
  //         } else {
  //             res.json(await RoomType.find({ name: type }))
  //         }
  //     }
  //     catch (e) {
  //         res.json(e)
  //     }
  // }
};

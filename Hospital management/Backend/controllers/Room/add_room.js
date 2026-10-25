import Room from "../../models/RoomModel.js";

export const addRoom = async (req, res) => {
  try {
    let roomNumber = req.body.roomNumber;
    let roomType = req.body.roomType;
    let pricePerDay = req.body.pricePerDay;
    let isAvailable = req.body.isAvailable;
    let patient = req.body.patient;

    let room_created = await Room.create({
      roomNumber : roomNumber,
      roomType : roomType,
      pricePerDay : pricePerDay,
      isAvailable : isAvailable,
      patient : patient,
    });

    res.status(201).json({
      message : "Room Created Successfully",
      data : room_created
    });
  } catch (error) {
    console.log(error.message);

    res.status(400).json({
      message : "Something Went Wrong",
      error : error.message
    });
  }
};

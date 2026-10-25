import Medicine from "../../models/MedicineModel.js";

export const addMedicine = async (req, res) => {
  try {
    let name = req.body.name;
    let category = req.body.category;
    let manufacturer = req.body.manufacturer;
    let price = req.body.price;
    let quantity = req.body.quantity;
    let expiryDate = req.body.expiryDate;

    let medicine_created = await Medicine.create({
      name : name,
      category : category,
      manufacturer : manufacturer,
      price : price,
      quantity : quantity,
      expiryDate : expiryDate,
    });

    res.status(201).json({
      message : "Medicine Created Successfully",
      data : medicine_created
    });
  } catch (error) {
    console.log(error.message);

    res.status(400).json({
      message : "Something Went Wrong",
      error : error.message
    });
  }
};

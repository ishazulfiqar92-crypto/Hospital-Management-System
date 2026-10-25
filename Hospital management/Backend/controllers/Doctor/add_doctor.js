import Doctor from "../../models/DoctorModel.js";

export const addDoctor = async (req, res) => {
  try {
    let name = req.body.name;
    let specialization = req.body.specialization;
    let email = req.body.email;
    let phone = req.body.phone;
    let experience = req.body.experience;
    let department = req.body.department;

    let doctor_created = await Doctor.create({
      name : name,
      specialization : specialization,
      email : email,
      phone : phone,
      experience : experience,
      department : department,
    });

    res.status(201).json({
      message : "Doctor Created Successfully",
      data : doctor_created
    });
  } catch (error) {
    console.log(error.message);

    res.status(400).json({
      message : "Something Went Wrong",
      error : error.message
    });
  }
};

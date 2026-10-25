import Patient from "../../models/PatientModel.js";

export const addPatient = async (req, res) => {
  try {
    let name = req.body.name;
    let age = req.body.age;
    let gender = req.body.gender;
    let phone = req.body.phone;
    let email = req.body.email;
    let address = req.body.address;
    let bloodGroup = req.body.bloodGroup;
    let disease = req.body.disease;

    let patient_created = await Patient.create({
      name : name,
      age : age,
      gender : gender,
      phone : phone,
      email : email,
      address : address,
      bloodGroup : bloodGroup,
      disease : disease,
    });

    res.status(201).json({
      message : "Patient Created Successfully",
      data : patient_created
    });
  } catch (error) {
    console.log(error.message);

    res.status(400).json({
      message : "Something Went Wrong",
      error : error.message
    });
  }
};

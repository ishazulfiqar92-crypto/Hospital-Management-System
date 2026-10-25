import Prescription from "../../models/PrescriptionModel.js";

export const addPrescription = async (req, res) => {
  try {
    let patient = req.body.patient;
    let doctor = req.body.doctor;
    let medicines = req.body.medicines;
    let notes = req.body.notes;

    let prescription_created = await Prescription.create({
      patient : patient,
      doctor : doctor,
      medicines : medicines,
      notes : notes,
    });

    res.status(201).json({
      message : "Prescription Created Successfully",
      data : prescription_created
    });
  } catch (error) {
    console.log(error.message);

    res.status(400).json({
      message : "Something Went Wrong",
      error : error.message
    });
  }
};

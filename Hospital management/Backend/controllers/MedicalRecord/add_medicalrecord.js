import MedicalRecord from "../../models/MedicalrecordModel.js";

export const addMedicalRecord = async (req, res) => {
  try {
    let patient = req.body.patient;
    let doctor = req.body.doctor;
    let diagnosis = req.body.diagnosis;
    let treatment = req.body.treatment;
    let symptoms = req.body.symptoms;
    let notes = req.body.notes;

    let medicalrecord_created = await MedicalRecord.create({
      patient : patient,
      doctor : doctor,
      diagnosis : diagnosis,
      treatment : treatment,
      symptoms : symptoms,
      notes : notes,
    });

    res.status(201).json({
      message : "MedicalRecord Created Successfully",
      data : medicalrecord_created
    });
  } catch (error) {
    console.log(error.message);

    res.status(400).json({
      message : "Something Went Wrong",
      error : error.message
    });
  }
};

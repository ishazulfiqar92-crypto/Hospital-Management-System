import Appointment from "../../models/AppointmentModel.js";

export const addAppointment = async (req, res) => {
  try {
    let patient = req.body.patient;
    let doctor = req.body.doctor;
    let date = req.body.date;
    let time = req.body.time;
    let reason = req.body.reason;
    let status = req.body.status;

    let appointment_created = await Appointment.create({
      patient : patient,
      doctor : doctor,
      date : date,
      time : time,
      reason : reason,
      status : status,
    });

    res.status(201).json({
      message : "Appointment Created Successfully",
      data : appointment_created
    });
  } catch (error) {
    console.log(error.message);

    res.status(400).json({
      message : "Something Went Wrong",
      error : error.message
    });
  }
};

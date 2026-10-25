import Billing from "../../models/BillingModel.js";

export const addBilling = async (req, res) => {
  try {
    let patient = req.body.patient;
    let consultationFee = req.body.consultationFee;
    let medicineFee = req.body.medicineFee;
    let roomFee = req.body.roomFee;
    let otherCharges = req.body.otherCharges;
    let totalAmount = req.body.totalAmount;
    let paymentStatus = req.body.paymentStatus;

    // Agar totalAmount nahi bheja to fees jama kar lo
    if (!totalAmount) {
      totalAmount = (consultationFee || 0) + (medicineFee || 0) + (roomFee || 0) + (otherCharges || 0);
    }

    let billing_created = await Billing.create({
      patient : patient,
      consultationFee : consultationFee,
      medicineFee : medicineFee,
      roomFee : roomFee,
      otherCharges : otherCharges,
      totalAmount : totalAmount,
      paymentStatus : paymentStatus,
    });

    res.status(201).json({
      message : "Billing Created Successfully",
      data : billing_created
    });
  } catch (error) {
    console.log(error.message);

    res.status(400).json({
      message : "Something Went Wrong",
      error : error.message
    });
  }
};

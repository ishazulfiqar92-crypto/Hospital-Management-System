import Department from "../../models/DepartmentModel.js";

export const addDepartment = async (req, res) => {
  try {
    let name = req.body.name;
    let description = req.body.description;
    let location = req.body.location;

    let department_created = await Department.create({
      name : name,
      description : description,
      location : location,
    });

    res.status(201).json({
      message : "Department Created Successfully",
      data : department_created
    });
  } catch (error) {
    console.log(error.message);

    res.status(400).json({
      message : "Something Went Wrong",
      error : error.message
    });
  }
};

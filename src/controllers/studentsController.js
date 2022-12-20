const Students = require("../models/studentsModel");

//creating the data
exports.create = async (req, res) => {
  await Students.create(req.body, (e, data) => {
    if (e) {
      res.status(404).json({
        success: false,
        message: e,
      });
    } else {
      res.status(201).json({
        success: true,
        message: "Successfully created student",
        data: data,
      });
    }
  });
};

//finding the data
exports.findAll = async (req, res) => {
  const product = await Students.find({}, { _id: 0 });
  res.status(200).json({
    success: true,
    product,
  });
};
//using query parameters
exports.findStudents = async (req, res) => {
  const info = await Students.find(
    { name: { $nin: ["Tanim Hasan", "Asif"] } },
    { _id: 0 }
  );
  res.status(200).json({
    success: true,
    message: "Successfully found students",
    data: info,
  });
};

exports.findOthers = (req, res) => {
  //can't work with async
  let query = { name: { $in: ["Tanim Hasan", "Asif"] } };
  let projection = { _id: 0 }; //"name roll ranking"//it will show only name row ranking columns
  Students.find(query, projection, (e, data) => {
    if (e) {
      res.status(404).json({
        success: false,
        message: e,
      });
    } else {
      res.json({
        Students: data,
      });
    }
  });
};

//find individual student
exports.findIndividual = (req, res) => {
  let id = req.params.id;
  let query = { _id: id };
  Students.findOne(query, (e, data) => {
    if (e) {
      res.status(404).json({
        success: false,
        message: e,
      });
    }
    res.status(200).json({ success: true, message: data });
  });
};

//update students
exports.updateStudent = (req, res) => {
  let id = req.params.id;
  let query = { _id: id };
  let reqBody = req.body;
  Students.updateOne(query, reqBody, (e, data) => {
    if (e) {
      res.status(404).json({
        success: false,
        message: e,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Successfully updated student",
        data: data,
      });
    }
  });
};

//delete students
exports.deleteStudent = (req, res) => {
  let id = req.params.id;
  let query = { _id: id };
  Students.deleteOne(query, (e, data) => {
    if (e) {
      res.status(404).json({});
    } else {
      res.status(200).json({
        success: true,
        data: data,
      });
    }
  });
};

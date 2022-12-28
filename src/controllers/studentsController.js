const Students = require("../models/studentsModel");

exports.status = (req, res) => {
  res.status(200).json({
    status: true,
    message: "ok",
  });
};

exports.default = (req, res) => {
  res.status(401).json({
    status: "can't access",
    getRequest: {
      getStatus: "/status",
      getStudents: "/students",
      getStudent: "/student/:id",
      getQuery: "/findStudentsQuery",
      getLogicalQuery: "/findStudentsLogicalQuery",
    },
    postRequest: {
      post: "/insertStudent",
    },
    putRequest: {
      put: "/updateStudent/:id",
    },
    deleteRequest: {
      delete: "/deleteStudent/:id",
    },
  });
};

//creating the data
exports.create = async (req, res) => {
  let query = req.body;
  await Students.create(query, (e, data) => {
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

//Finding all Students from the collection
exports.findAll = async (req, res) => {
  const product = await Students.find({}, {});
  res.status(200).json({
    success: true,
    product,
  });
};

//find using query Operators
exports.findByOperators = async (req, res) => {
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

//find using query logical operators
exports.findByLogicalQuery = (req, res) => {
  let query = {
    $or: [
      { name: { $in: ["Asif", "Mehrab Tanim"] } },
      { roll: { $in: ["191002141", "63"] } },
    ],
  };
  let projection = { _id: 0 };

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

//update students by calling the name from function update
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

//delete students from the main file
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

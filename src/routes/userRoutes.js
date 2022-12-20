const express = require("express");
const router = express.Router();
const studentsController=require("../controllers/studentsController");

router.post("/create",studentsController.create);
router.get("/",studentsController.findStudents);
router.get("/findOthers",studentsController.findOthers);
router.put("/updateStudent/:id",studentsController.updateStudent);
router.get("/findAll",studentsController.findAll);
router.get("/findIndividual/:id",studentsController.findIndividual);
router.delete("/deleteStudent/:id",studentsController.deleteStudent);
module.exports = router;

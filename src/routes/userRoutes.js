const express = require("express");
const router = express.Router();
const studentsController=require("../controllers/studentsController");
const JWTPractice=require("../controllers/JWTPractice");

router.get('/',studentsController.default);
router.get('/status',studentsController.status);
router.get("/students",studentsController.findAll);
router.get("/findStudentsQuery",studentsController.findByOperators);
router.get("/findStudentsLogicalQuery",studentsController.findByLogicalQuery);
router.get("/student/:id",studentsController.findIndividual);
router.post("/insertStudent",studentsController.create);
router.put("/updateStudent/:id",studentsController.updateStudent);
router.delete("/deleteStudent/:id",studentsController.deleteStudent);

router.get("/CreateToken",JWTPractice.CreateToken)
router.get("/DecodeToken",JWTPractice.DecodeToken)

module.exports = router;

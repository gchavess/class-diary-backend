const express = require("express");
const router = express.Router();
const callStudentController = require("../controllers/callStudentController");

router.get("/", callStudentController.getCallStudents);
router.post("/", callStudentController.createCallStudent);
router.put("/:id", callStudentController.updateCallStudent);
router.delete("/:id", callStudentController.deleteCallStudent);

module.exports = router;

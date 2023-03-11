const { saveUserExercise } = require("../controllers/user");

const router = require("express").Router();

// router.get('/save-excercise', saveUserExercise);
router.post("/save-excercise", saveUserExercise);
//
module.exports = router;

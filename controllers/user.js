const User = require("../models/user_details");

function saveUserExercise(req, res, next) {
  const { name, description, duration, type_of_excercise } = req.body;
  const user = User({ name, description, duration, type_of_excercise });
  user
    .save()
    .then((data) => {
      res.status(201).json({ data: data });
    })
    .catch((err) => {
      res.status(400).json({ error: err.errors });
    });
}
module.exports = { saveUserExercise: saveUserExercise };

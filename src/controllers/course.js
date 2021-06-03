const Course = require('../model/Course');

module.exports = {
  async insert(req, res) {
    try {
      const course = await Course.create(req.body);

      return res.send(course);
    } catch (err) {
      return res.status(400).send(err.message);
    }
  },

  async list(req, res) {
    try {
      const courses = await Course.find();

      return res.send(courses);
    } catch (err) {
      return res.status(400).send(err.message);
    }
  },
};

const { Router } = require('express');
const courseController = require('../controllers/course');

const router = Router();

router.post('/course/store', courseController.insert);
router.get('/courses', courseController.list);

module.exports = router;

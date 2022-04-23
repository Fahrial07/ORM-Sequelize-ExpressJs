// const { Router } = require('express');
const express = require('express');
const router = express.Router();

const teacherRouter = require('./teachers.route');


//routes pages home
router.get('/', (req, res) => {
    res.render('home');
});

//teachers
router.use('/teachers', teacherRouter);

module.exports = router;
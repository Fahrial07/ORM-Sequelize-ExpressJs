const express = require('express');
const { render } = require('express/lib/response');
const Controller = require('../controllers/teachers.controller');
const router = express.Router();

router.get('/getAll', (req, res) => {
    Controller.getAll(req, res);
});

router.get('/getById/:id', (req, res) => {
    Controller.getById(req, res);
});

router.post('/create', (req, res) => {
    Controller.create(req, res);
});

router.put('/update/:id', (req, res) => {
    Controller.update(req, res);
});

router.delete('/delete/:id', (req, res) => {
    Controller.delete(req, res);
});

//pages routes

//tambah data
router.get('/form', (req, res) => {
    res.render('create');
});

//show all data
router.get('/', (req, res) => {
    Controller.getAllPages(req, res);
});

// edit data
router.get('/edit/:id', (req, res) => {
    Controller.formEdit(req, res);
});

router.post('/edit/:id', (req, res) => {
    Controller.editData(req, res);
});

//route delete data
router.get('/deleted/:id', (req, res) => {
    Controller.deleted(req, res);
});

module.exports = router;



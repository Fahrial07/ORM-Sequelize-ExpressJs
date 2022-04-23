const { Teacher } = require('../models/index');

class Controller {
    //url API
    static getAll(req, res){
        Teacher.findAll()
            .then(teachers => {
                res.status(200).json(teachers);
            })
            .catch(err => {
                res.send(err);
            })
    }

    static getById(req, res){
        Teacher.findByPk(req.params.id)
            .then(teacher => {
                res.status(200).json(teacher);
            })
            .catch(err => {
                res.send(err);
            })
    }

    static create(req, res){
        Teacher.create(req.body)
            .then(teacher => {
                // res.status(201).json(teacher);
                if(req.body){
                    res.redirect('/teachers');
                } else {
                    alert('Data gagal di tambahkan!');
                    res.redirect('/teachers/form');
                }
            })
            .catch(err => {
                res.send(err);
            })
    };

    static update(req, res){
        Teacher.update(req.body, {
            where: {
                id: req.params.id
            }
        })
            .then(teacher => {
                res.status(200).json(teacher);
            })
            .catch(err => {
                res.send(err);
            })
    }

    static delete(req, res){
        Teacher.destroy({
            where:{
                id: req.params.id
            }
        })
            .then(teacher => {
                res.status(200).json(teacher);
            })
            .catch(err => {
                res.send(err);
            })
    }

    //url pages
    static getAllPages(req, res){
        Teacher.findAll()
            .then(teachers => {
                 res.render('teacher', {teachers});
            })
            .catch(err => {
                res.send(err);
            })
    }

    //delete data by id
   static deleted(req, res){
        Teacher.destroy({
            where:{
                id: req.params.id
            }
        })
            .then(teacher => {
                 res.redirect('/teachers');
            })
            .catch(err => {
                res.send(err);
            })
    }

    //update
    static formEdit(req, res){
        Teacher.findByPk(req.params.id)
            .then(teacher => {
                res.render('edit', {teacher});
            })
            .catch(err => {
                res.send(err);
            })
    }

     static editData(req, res){
        Teacher.update(req.body, {
            where: {
                id: req.params.id
            }
        })
            .then(teacher => {
                  res.redirect('/teachers');
            })
            .catch(err => {
                res.send(err);
            })
    }


}

module.exports = Controller;

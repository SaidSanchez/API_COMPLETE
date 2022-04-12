const express = require('express');
const config=require('config');
const Genres = require('../models/genre');

function list(req, res, next) {
    Genres.find().then(objs => res.status(200).json({
        message:res.__('oklist.genero'),
        obj: objs
    })).catch(ex => res.status(500).json({
        message: res.__('badlist.genero'),
        obj: ex
    }));
}

function index(req, res, next) {
    const id= req.params.id;
    Genres.findOne({"_id":id}).then(obj => res.status(200).json({
        message: res.__('ok.genero'),
        oj: obj
    })).catch(ex => res.status(500).json({
        message: res.__('bad.genero'),
        obj: ex
    }));
}

function create(req, res, next) {
    const description = req.body.description;

    let genre = new Genre({
        description:description
    });

    genre.save().then(obj => res.status(200).json({
        message:res.__('cr.genero'),
        obj: obj
    })).catch(ex => res.status(500).json({
        message:res.__('ncr.genero')
        obj: ex
    }));
}

function replace(req, res, next) {
    const id = req.params.id;
    let description = req.body.description ? req.body.description: "";

    let genre = new Object({
        _description:description
        });

    Genres.findOneAndUpdate({"_id":id}, genre).then(obj => res.status(200).json({
        message: res.__('rp.genero'),
        oj: obj
    })).catch(ex => res.status(500).json({
        message: res.__('nrp.genero')
        obj: ex
    }));
}

function edit(req, res, next) {
    const id = req.params.id;
    const description = req.body.description;

    let genre = new Object();

    if(description){
        genre._description = description;
    }

    Genres.findOneAndUpdate({"_id":id}, genre).then(obj => res.status(200).json({
        message: res.__('up.genero'),
        oj: obj
    })).catch(ex => res.status(500).json({
        message: res.__('nup.genero'),
        obj: ex
    }));
}

function destroy(req, res, next) {
    const id = req.params.id;
    Genres.remove({"_id":id}).then(obj => res.status(200).json({
        message:res.__('dl.genero'),
        oj: obj
    })).catch(ex => res.status(500).json({
        message: res.__('ndl.genero'),
        obj: ex
    }));
}
module.exports = {
  list,index,create,replace,edit,destroy
};

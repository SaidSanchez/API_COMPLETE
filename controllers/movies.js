const express = require('express');
const config=require('config');
const Movie = require('../models/movie');
const Genre=require('../models/genre');

function list(req, res, next) {
    Movie.find().populate("_genre").then(objs => res.status(200).json({
        message: res.__('oklist.movie'),
        obj: objs
    })).catch(ex => res.status(500).json({
        message: res.__('oklist.movie'),
        obj: ex
    }));
}

function index(req, res, next) {
    const id= req.params.id;
    Movie.findOne({"_id":id}).then(obj => res.status(200).json({
        message: res.__('ok.movie'),
        oj: obj
    })).catch(ex => res.status(500).json({
        message:res.__('bad.movie'),
        obj: ex
    }));
}

function create(req, res, next) {
    const title = req.body.title;
    const genereId=req.body.genereId;

    Genre.findOne({"_id":genereId}).then((genre)=>{
      let movie = new Movie({
          title:title,
          genre:genre
      });

      movie.save().then(obj => res.status(200).json({
          message: res.__('cr.movie'),
          obj: obj
      })).catch(ex => res.status(500).json({
          message: res.__('ncr.movie'),
          obj: ex
      }));
    }).catch(ex=>re.status(500).json({
      message:res.__('ncr.movie'),
      obj:ex
    }));
}



function replace(req, res, next) {
    const id = req.params.id;
    let title = req.body.title ? req.body.title: "";

    let movie = new Object({
        _title:title,
    });

    Movie.findOneAndUpdate({"_id":id}, movie).then(obj => res.status(200).json({
        message: res.__('rp.movie'),
        oj: obj
    })).catch(ex => res.status(500).json({
        message:res.__('nrp.movie'),
        obj: ex
    }));
}

function edit(req, res, next) {
    const title = req.body.title;

    let movie = new Object();

    if(tittle){
        movie._title = tittle;
    }

    Movie.findOneAndUpdate({"_id":id}, movie).then(obj => res.status(200).json({
        message: res.__('up.movie'),
        oj: obj
    })).catch(ex => res.status(500).json({
        message: res.__('nup.movie'),
        obj: ex
    }));
}

function destroy(req, res, next) {
    const id = req.params.id;
    Movie.remove({"_id":id}).then(obj => res.status(200).json({
        message: res.__('dl.movie'),
        oj: obj
    })).catch(ex => res.status(500).json({
        message: res.__('ndl.movie'),
        obj: ex
    }));
}

module.exports = {
    list,index,create,replace,edit,destroy
};

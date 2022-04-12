const express=require('express');
const config=require('config')
const Actor=require('../models/actor');
function list(req,res,next) {
  Actor.find().then(objs=>res.status(200).json({
    message:res.__('oklist.actor'),
    obj:objs
  })).catch(ex=>res.status(500).json({
    message:res.__('badlist.actor'),
    obj:ex
  }));
}

function index(req,res,next) {
  const id=req.params.id;
  Actor.findOne({"_id":id}).then(obj=>res.status(200).json({
    message:res.__('ok.actor'),
    obj:obj
  })).catch(ex=>res.status(500).json({
    message:res.__('bad.actor'),
    obj: ex
  }));
}

function create(req,res,next) {
  const name=req.body.name;
  const lastName=req.body.lastName;

  let actor=new Actor({
    name:name,
    lastName:lastName
  });

  actor.save().then(obj=>res.status(200).json({
    message:res.__('cr.actor'),
    obj:obj
  }))
    .catch(ex=>res.status(500).json({
      message:res.__('ncr.actor'),
      obj:ex
    }))
}

function replace(req,res,next) {
  const id=req.params.id;
  let name=req.body.name ? req.body.name : "";
  let lastName=req.body.lastName ? req.body.lastName : "";

  let actor= new Object({
    _name:name,
    _lastName:lastName
  });
  Actor.findOneAndUpdate({"_id":id},actor).then(obj=>res.status(200).json({
    message:res.__('rp.actor'),
    obj:obj
  })).catch(ex=>res.status(500).json({
    message:res.__('nrp.actor'),
    obj:ex
  }));

}

function edit(req,res,next) {
  const id=req.params.id;
  const name=req.body.name;
  const lastName=req.body.lastName;

  let actor=new Object();

  if(name){
    actor._name=name;
  }
  if(lastName){
    actor._lastName=lastName;
  }

  Actor.findOneAndUpdate({"_id":id},actor).then(obj=>res.status(200).json({
    message:res.__('up.actor'),
    obj:obj
  })).catch(ex=>res.status(500).json({
    message:res.__('nup.actor'),
    obj:ex
  }));
}

function destroy(req,res,next) {
  const id=req.params.id;
  Actor.remove({"_id":id}).then(obj=>res.status(200).json({
    message:res.__('dl.actor'),
    obj:obj
  })).catch(ex=>res.status(500).json({
    message:res.__('ndl.actor'),
    obj:ex
  }));
}

module.exports={
  list,index,create,replace,edit,destroy
};

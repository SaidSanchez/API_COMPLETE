const mongoose = require('mongoose');
const mongoosePaginate=require('mongoose-paginate-v2');

const schema = mongoose.Schema({
    _format:String,
    _number:Number,
    _movie:String,
    _status:String,

});

class Copy {
    constructor(name, lastName, phone, status){
        this._name = name;
        this._lastName = lastName;
        this._movie = phone;
        this._status = status;
    }

    get name(){
        return this._name;
    }

    set name(v){
        this._name = v;
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(v){
        this._lastName = v;
    }

    get movie(){
        return this._movie;
    }

    set movie(v){
        this._movie = v;
    }

    get status(){
        return this._status;
    }

    set status(v){
        this._status = v;
    }



}

schema.loadClass(Copy);
schema.plugin(mongoosePaginate);
module.exports = mongoose.model('Copy', schema);

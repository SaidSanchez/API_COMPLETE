const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _copy:String,
    _member:String,
    _date:Date,
});

class Booking {
    constructor(name, lastName, phone, status){
        this._name = name;
        this._lastName = lastName;
        this._phone = phone;
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

    get phone(){
        return this._phone;
    }

    set phone(v){
        this._phone = v;
    }

    get status(){
        return this._status;
    }

    set status(v){
        this._status = v;
    }

}

schema.loadClass(Booking);

module.exports = mongoose.model('Booking', schema);

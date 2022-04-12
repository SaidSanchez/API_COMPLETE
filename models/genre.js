const mongoose = require('mongoose');
const mongoosePaginate=require('mongoose-paginate-v2');

const schema = mongoose.Schema({
    _description:String,

});

class Genre {
    constructor(title){
        this._description= title;
    }

    get genre(){
        return this._description;
    }

    set genre(v){
        this._description = v;
    }

}

schema.loadClass(Genre);
schema.plugin(mongoosePaginate);
module.exports = mongoose.model('Genre', schema);

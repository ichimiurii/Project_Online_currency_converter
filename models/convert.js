'use strict'
var Schema = mongoose.Schema;


var mongoose = require('mongoose');
var attractionSchema = mongoose.Schema({ 
    amount: Number,
    description: String,
    src​_currency: String,
    dest​_currency: String,
    re​ference_date: String,
    },
);
var Attraction = mongoose.model('Attraction', attractionSchema); module.exports = Attraction;





var convert = require('xml-js');
var xml = require('fs').readFileSync('test.xml', 'utf8');
var options = {ignoreText: true, alwaysChildren: true};
var result = convert.xml2js(xml, options); // or convert.xml2json(xml, options)
console.log(result);





// create a schema
var convert = new Schema({

    'amount': {
        type: Number,
        validate: {
            validator: function (v) {
                if (v === '' || !v || v.length === 0) {
                    return true;
                } else {
                    return (/^(?:[1-9]\d*|0)?(?:\.\d+)?$/g).test(v);
                }
            }, message: '{VALUE} include caratteri non ammessi: sono ammessi numeri interi e float'
        }, required: false
    },


    'src​_currency': {
        type: String,
        validate: {
            validator: function (v) {
                let isValid = false;
                let validOptions = ['EUR', 'USD', 'GBP'];
                for (let i in validOptions) {
                    if (validOptions[i] === v) {
                        isValid = true;
                    }
                }
                return isValid;
            }, message: '{VALUE} non è ammesso: i valori ammessi sono EUR, USD, GBP'
        }, required: [true, 'La forma del currency è obbligatoria']
    },



    'dest​_currency': {
        type: String,
        validate: {
            validator: function (v) {
                let isValid = false;
                let validOptions = ['EUR', 'USD', 'GBP'];
                for (let i in validOptions) {
                    if (validOptions[i] === v) {
                        isValid = true;
                    }
                }
                return isValid;
            }, message: '{VALUE} non è ammesso: i valori ammessi sono EUR, USD, GBP'
        }, required: [true, 'La forma del currency è obbligatoria']
    },



    're​ference_date': {
        type: String,
        validate: {
            validator: function (v) {
                return (/^((([a-z ]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))*\.?$/i).test(v);
            }, message: '{VALUE} include caratteri non ammessi'
        }, required: false
    },



}, { collection: 'convert' });


convert.pre('save', function (next) {
    
    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.updatedAt = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.createdAt)
        this.createdAt = currentDate;
    next();
});

convert.pre('update', function (next) {
    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.updatedAt = currentDate;
});



// in questo modo ogni utente ha il medesimo schema creato sopra
var convert_model = mongoose.model('convert', convert, 'convert');

module.exports = { model: convert_model, schema: convert };

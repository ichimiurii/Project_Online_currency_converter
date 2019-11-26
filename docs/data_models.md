# Database Model for MongoDB and XML file


We will present our backend application. I have decided that we want to create our backend application based on Node.js. The application will expose an API for models management. Through the API models will be able to create, delete, update and get one or all models.

As a database, we will use MongoDB or an xml file. Mongoose will be used for communication with the database.

Mongoose internally uses MongoDB Node.js Driver for the communication with MongoDB.  In a complex web application, we will have many types of entities in the database. By using an object modeling framework we will be able to create better encapsulation of data and omit low level considerations. Because of that we will use Mongoose for establishing communication with MongoDB. On [the official project Mongoose page](https://mongoosejs.com) we can find the definition of Mongoose:
MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.


The user schema will look like this:

```javascript
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
//defining user schema
var UserSchema = new Schema({
// details SETTINGS/PREFERENCES
});
```


## Controllers: CRUD operations on model objects

In this use case, we create very simple functions that will be used as controllers for CRUD operations on model objects. So we will have the following methods:

- **create** — function for creating a new object in the system
- **update** — function for updating an existing object in the system
- **delete** — function for deleting an object from the system
- **getAll** — function for getting all objects in the system
- **getOne** — function for getting an object by ID


```javascript
var createObject = function (req, res, next) {
  var user = new User(req.body);

  user.save(function (err) {
    if (err) {
      next(err);
    } else {
      res.json(user);
    }
  });
};
```


## Routes
At the end, we need to route requests to appropriate functions. Basically, we will define application end points (URIs) and connect that end points with these functions that will generate a response.

```javascript
router.route('/route_name')
  .post(createRoute_name)
  .get(getAllRoute_name);

router.route('/route_name/:model_nameId')
  .get(getOneRoute_name)
  .put(updateRoute_name)
  .delete(deleteRoute_name);

router.param('model_nameId', getByIdmodel_name);
```


## Mongodb object modeling for node.js

[MongoDB](https://www.mongodb.com) object modeling tool designed to work in an asynchronous environment. Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.


See [Mongoose: elegant mongodb object modeling for node.js](https://mongoosejs.com) for more information.



## XML file for node.js

In this use case, we create very simple functions that will be used as controllers for CRUD operations on model objects.


```javascript
var fs = require('fs'),
    xml2js = require('xml2js');

var parser = new xml2js.Parser();
fs.readFile(__dirname + '/read.xml', function (err, data) {
    console.log('ReadFile');

    parser.parseString(data, function (err, result) {
        console.dir(result);
        console.log('Done');
    });
});
```


## Routes for XML file
At the end, we need to route requests to appropriate functions. Basically, we will define application end points (URIs) and connect that end points with these functions that will generate a response


```javascript
var convert = require('xml-js');
var xml = 
"<gesmes:Envelope xmlns:gesmes='http://www.gesmes.org/xml/2002-08-01' xmlns='http://www.ecb.int/vocabulary/2002-08-01/eurofxref'>" +
"<gesmes:subject>Reference rates</gesmes:subject>" +
"<gesmes:Sender>" +
"<gesmes:name>European Central Bank</gesmes:name>" +
"</gesmes:Sender>" +
"<Cube>" +
"<Cube time='2019-11-25'>" +
"</Cube>" +
"</Cube>" +
"</gesmes:Envelope>"
var result1 = convert.xml2json(xml, {compact: true, spaces: 4});
var result2 = convert.xml2json(xml, {compact: false, spaces: 4});
console.log(result1, '\n', result2);
```
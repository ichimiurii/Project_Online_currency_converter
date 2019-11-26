const express = require("express");
const BodyParser = require("body-parser");

const path = require('path');

const app = express();

app.use(require('cors')());
app.use('/api', require('cors')());

const pathToSwaggerUi = require('swagger-ui-dist').absolutePath();
const swaggerJSDoc = require('swagger-jsdoc');


var subpath = express();

app.use("/v1", subpath);

var swagger = require('swagger-node-express').createNew(subpath);

app.use(express.static(path.join(__dirname, 'dist')));


swagger.setApiInfo({
  title: "example API",
  description: "API to do something, manage something...",
  termsOfServiceUrl: "",
  contact: "yourname@something.com",
  license: "",
  licenseUrl: ""
});


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/read-xml.html');
});






var xml2js = require('xml2js');


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


var extractedData = "";

var parser = new xml2js.Parser();
parser.parseString(xml, function(err, result){
  if(err) throw err;

  extractedData = result['gesmes:Envelope']['Cube']['Cube time="2019-11-25"']
});

console.log(extractedData);





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








var convert = require('xml-js');
var xml = 
'<?xml version="1.0" encoding="utf-8"?>' +
'<note importance="high" logged="true">' +
'    <title>Online Currency Convertor</title>' +
'    <todo>“amount”: 20.23</todo>' +
'    <todo>“currency”: ”EUR”</todo>' +
'</note>';
var result1 = convert.xml2json(xml, {compact: true, spaces: 4});
var result2 = convert.xml2json(xml, {compact: false, spaces: 4});
console.log(result1, '\n', result2);













// function parseXml(xmlStr) {
//     return new window.DOMParser().parseFromString(xmlStr, "text/xml");
// }


// var parseXml;

// if (typeof window.DOMParser != "undefined") {
//     parseXml = function (xmlStr) {
//         return new window.DOMParser().parseFromString(xmlStr, "text/xml");
//     };
// } else if (typeof window.ActiveXObject != "undefined" &&
//     new window.ActiveXObject("Microsoft.XMLDOM")) {
//     parseXml = function (xmlStr) {
//         var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
//         xmlDoc.async = "false";
//         xmlDoc.loadXML(xmlStr);
//         return xmlDoc;
//     };
// } else {
//     throw new Error("No XML parser found");
// }






// Set api-doc path
swagger.configureSwaggerPaths('', 'api-docs', '');



const app_port = process.env.app_port || 3000;



// Set and display the application URL
var applicationUrl = 'http://localhost:' + app_port;



app.listen(app_port, () => console.log('OnlineCurrencyConverter API running on ' + applicationUrl));




swagger.configure(applicationUrl, '1.0.0');



'use strict';

const express = require('express');
const cors = require('cors');
app.use(require('cors')());
app.use('/api', require('cors')());


const router = express.Router();
const resourceType = 'convert';
const httpStatusCode = {
  resourceOk: 200,
  resourceCreated: 201,
  resourceNotFound: 404,
  resourceUnprocessable: 422,
  genericError: 500,
};





var convert = require('xml-js');
var xml = require('fs').readFileSync('test.xml', 'utf8');
var options = {ignoreText: true, alwaysChildren: true};
var result = convert.xml2js(xml, options); // or convert.xml2json(xml, options)
console.log(result);







router.get('/', cors(), (req, res) => {
  db.getItem(resourceType, res.locals.user)
    .then((items) => {
      if (items !== 'undefined' && items.length > 0) {
        console.log(`GET /${resourceType}: access granted to IP ${req.ip}`);
        res.status(httpStatusCode.resourceOk).json(items);
      } else {
        console.log('GET /${resourceType}: access granted to IP ${req.ip}');
        res.status(httpStatusCode.resourceNotFound).send();
      }
    })
    .catch((error) => {
      console.log(`Error on GET /${resourceType} triggered by  IP ${req.ip}.`);
      res.status(httpStatusCode.genericError).send({
        message: 'error finding the resources.',
      });
    });
});





router.get('/:id', cors(), (req, res) => {
  db.getItem(resourceType, res.locals.user, req.params.id)
    .then((item) => {
      if (item !== 'undefined' && item.length > 0) {
        res.status(httpStatusCode.resourceOk).json(item);
      } else {
        res.status(httpStatusCode.resourceNotFound).send();
      }
    })
    .catch((error) => {
      console.log(`Error on GET /${resourceType}/${req.params.id} triggered by IP ${req.ip}.`);
      res.status(httpStatusCode.genericError).send({
        message: `error finding the resource with id ${req.params.id}`,
      });
    });
});





router.post('/', cors(), (req, res) => {
  db.createItem(resourceType, res.locals.user, req.body)
    .then((item) => {
      console.log(`POST /${resourceType}: access granted to   IP ${req.ip}. Resource with id ${item.URI} created.`);
      res.status(httpStatusCode.resourceCreated)
        .send({
          message: `resource created at ${baseUrl}/${item.URI}.`,
        });
    })
    .catch((error) => {
      console.log(`Error on POST /${resourceType} triggered by  IP ${req.ip}.`);
      res.status(httpStatusCode.resourceUnprocessable).send({
        message: 'error creating the new resource',
        error: error
      });
    });
});






router.put('/:id', cors(), (req, res) => {
  db.editItem(resourceType, res.locals.user, req.params.id, req.body)
    .then((item) => {
      console.log(`PUT /${resourceType}: access granted to IP ${req.ip}. Resource with id ${req.params.id} updated.`);
      res.status(httpStatusCode.resourceOk)
        .send({
          message: `resource ${baseUrl}/${item.URI} correctly updated.`,
        });
    })
    .catch((error) => {
      console.log(`Error on PUT /${resourceType}/${req.params.id} triggered by  IP ${req.ip}.`);
      res.status(httpStatusCode.genericError)
        .send({
          message: `error editing the resource with id ${req.params.id}`,
        });
    });
});





router.delete('/:id', cors(), (req, res) => {
  db.deleteItem(resourceType, res.locals.user, req.params.id)
    .then((result) => {
      console.log(`DELETE /${resourceType}: access granted to IP ${req.ip}. Resource with id ${req.params.id} deleted.`);
      res.status(httpStatusCode.resourceOk)
        .send({
          message: `resource ${baseUrl}/${result.URI} correctly deleted.`,
        });
    })
    .catch((error) => {
      console.log(`Error on DELETE /${resourceType}/${req.params.id} triggered by IP ${req.ip}.`);
      res.status(httpStatusCode.genericError)
        .send({
          message: `error deleting the resource with id: ${req.params.id}.`,
        });
    });
});


module.exports = router;

<img src="/docs/swagger_logo.png">

# API Documentation with Swagger

The swagger module provides tools for designing and building Swagger-compliant APIs entirely in Node.js. It integrates with popular Node.js servers including Express. With swagger, you can specify, build, and test your API from the very beginning, on your laptop. It allows you to change and iterate your design without rewriting the logic of your implementation.


## Setting up Swagger
- Go to [Swagger-UI repository on Github](https://github.com/swagger-api/swagger-ui) - Clone [Swagger-UI repository](https://github.com/swagger-api/swagger-ui.git) repository into project.
- Remove the dist directory from the Swagger-UI folder
- Delete the remainder of the folder (it is not necessary). The dist folder from Swagger-UI contains a functioning example of Swagger-UI, which is all we need.
- Start working in api-docs.yaml (.yaml file format)


## Swagger API request

- ***GET:*** GET All Collections

    `http://localhost:3000/api/convert/`

    `curl --location --request GET "http://localhost:3000/api/convert/"`

    The `/collections` endpoint returns a list of all collections that are accessible by you. The list includes your own collections and the collections that you have subscribed to.
    The response contains an array of collection information containing the `amount`, `currency`, `currency`, `date` and `uid` of each collection.
    Requires API Key as `X-Api-Key` request header or `apikey` URL query parameter.
    - HEADERS
        - X-Api-Key: `{{api_key}}`
    - BODY


- **GET{id}:** Single Collection

    `http://localhost:3000/api/convert/5b030526ddcf8477d4b0e318`

    `curl --location --request GET "http://localhost:3000/api/convert/5b030526ddcf8477d4b0e318"`

    Access the contents of a collection that is accessible to you using its unique id (`uid`).
    Requires API Key as `X-Api-Key` request header or `apikey` URL query parameter.
    - HEADERS
        - X-Api-Key: `{{api_key}}`
    - BODY


- **POST:** Create Collection

    `http://localhost:3000/api/convert/`

    `curl --location --request POST "http://localhost:3000/api/convert/"`

    This endpoint allows you to create v2 format.
    On successful creation of the collection, the response returns the collection `amount`, `currency`, `currency`, `date` and `uid`.
    You can also specify the context of a workspace to create a collection in directly by passing the `workspace` as a query param.
    Requires API Key as `X-Api-Key` request header or `apikey` URL query parameter.
    - HEADERS
        - X-Api-Key: `{{api_key}}`
        - Content-Type: `application/json`
    - BODY


- **PUT{id}:** Update Collection

    `http://localhost:3000/api/convert/5b030526ddcf8477d4b0e318`

    `curl --location --request PUT "http://localhost:3000/api/convert/5b030526ddcf8477d4b0e318"`


    This endpoint allows you to update an existing collection using the Postman Collection v2 format.
    On successful updation of the collection, the response returns the collection `amount`, `currency`, `currency`, `date` and `uid`.
    Requires API Key as `X-Api-Key` request header or `apikey` URL query parameter.
    Note: Please be careful when trying to update the collection, as the existing collection will be replaced by the request body.
    - HEADERS
        - X-Api-Key: `{{api_key}}`
        - Content-Type: `application/json`
    - BODY


- **DELETE{id}:** Delete Collection

    `http://localhost:3000/api/convert/5ceff0d46fbd4208f7b722c4`

    `curl --location --request DELETE "http://localhost:3000/api/convert/5ceff0d46fbd4208f7b722c4"`

    This endpoint allows you to delete an existing collection.
    On successful deletion of the collection, the response returns the `date` and `uid`.
    Requires API Key as `X-Api-Key` request header or `apikey` URL query parameter.
    - HEADERS
        - X-Api-Key: `{{api_key}}`



**Attention**: as Online Currency Convertor is a constantly evolving project, this documentation should also be continuously updated to always represent the latest state of the works.


# Swagger  Online Currency Convertor: Start making api calls
- Start Server from Terminal with command: `node app.js`
- Open a browser on your PC 
- Login/Register on the web-page
- Find your `browser settings` => `Developer tools` => `Application` => `Key: id_token (value)`
- Copy Key: `id_token (value)`
- Open new browser go to the web-page: [http://localhost:3000](http://localhost:3000)
- Paste autorization `Authorize` in `Value:` `Bearer id_token(value)`
- Push de button `Authorize`
- Select a collection to work with
- Start making api calls `GET`, `POST`, `GET{id}`, `PUT{id}`, `DELETE{id}`.
- Push de button `Try it out!` request
- In `Response Body` you should be able to see `server data response`


<img src="/docs/swagger_app.png">


## Notes
If you're using a local server, remember to start the server **before** making any API call.  


### Browser support
Swagger UI works in the latest versions of Chrome, Safari, Firefox, Edge and IE11.


### Alternatives
At the end do we need to use Swagger or are there any alternative? No you don’t need to use Swagger, and there are plenty of alternatives and we used Postman.
- Postman — if you don’t want to host documentation in your application, you can create Postman collection, and distribute that to the user of your API. But if your API is changing fast, you will have a lot of versions of Postman collection and that can be pretty messy.
[Test the API with Postman](./postman.md)

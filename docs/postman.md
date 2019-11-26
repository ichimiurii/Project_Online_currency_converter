<img src="/docs/postman_logo.png" width="407">

# API Documentation with Postman 



The Postman API allows you to programmatically access data stored in Postman account with ease.
The easiest way to get started with the API is to click the Run in Postman button present at the top of the documentation page and use the Postman App to send requests.
Postman supports all the HTTP Verbs, For details about HTTP Verbs, refer to [RFC 2616](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9)


## Get the latest Postman app
To get the latest version of the Postman app, go to the [download page](https://www.getpostman.com/downloads/) and click Download for macOS / Windows / Linux depending on your platform.


## Postman API request

- ***GET:*** GET All Collections

    `http://localhost:3000/api/convert/`

    `curl --location --request GET "http://localhost:3000/api/convert/"`

    The `/collections` endpoint returns a list of all collections that are accessible by you. The list includes your own collections and the collections that you have subscribed to.
    The response contains an array of collection information containing the `amount`, `currency`, `currency`, `date` and `uid` of each collection.
    Requires API Key as `X-Api-Key` request header or `apikey` URL query parameter.
    - HEADERS
        - X-Api-Key: `{{postman_api_key}}`
    - BODY


- **GET{id}:** Single Collection

    `http://localhost:3000/api/convert/5b030526ddcf8477d4b0e318`

    `curl --location --request GET "http://localhost:3000/api/convert/5b030526ddcf8477d4b0e318"`

    Access the contents of a collection that is accessible to you using its unique id (`uid`).
    Requires API Key as `X-Api-Key` request header or `apikey` URL query parameter.
    - HEADERS
        - X-Api-Key: `{{postman_api_key}}`
    - BODY


- **POST:** Create Collection

    `http://localhost:3000/api/convert/`

    `curl --location --request POST "http://localhost:3000/api/convert/"`

    This endpoint allows you to create collections using the Postman Collection v2 format.
    On successful creation of the collection, the response returns the collection `amount`, `currency`, `currency`, `date` and the `uid`.
    You can also specify the context of a workspace to create a collection in directly by passing the `workspace` as a query param.
    Requires API Key as `X-Api-Key` request header or `apikey` URL query parameter.
    - HEADERS
        - X-Api-Key: `{{postman_api_key}}`
        - Content-Type: `application/json`
    - BODY


- **PUT{id}:** Update Collection

    `http://localhost:3000/api/convert/5b030526ddcf8477d4b0e318`

    `curl --location --request PUT "http://localhost:3000/api/convert/5b030526ddcf8477d4b0e318"`


    This endpoint allows you to update an existing collection using the Postman Collection v2 format.
    On successful updation of the collection, the response returns the collection `amount`, `currency`, `currency`, `date` and the `uid`.
    Requires API Key as `X-Api-Key` request header or `apikey` URL query parameter.
    Note: Please be careful when trying to update the collection, as the existing collection will be replaced by the request body.
    - HEADERS
        - X-Api-Key: `{{postman_api_key}}`
        - Content-Type: `application/json`
    - BODY


- **DELETE{id}:** Delete Collection

    `http://localhost:3000/api/convert/5ceff0d46fbd4208f7b722c4`

    `curl --location --request DELETE "http://localhost:3000/api/convert/5ceff0d46fbd4208f7b722c4"`

    This endpoint allows you to delete an existing collection.
    On successful deletion of the collection, the response returns the `amount` and the `uid`.
    Requires API Key as `X-Api-Key` request header or `apikey` URL query parameter.
    - HEADERS
        - X-Api-Key: `{{postman_api_key}}`



**Attention**: as Online Currency Convertor is a constantly evolving project, this documentation should also be continuously updated to always represent the latest state of the works.


# Postman Online Currency Convertor: Start making api calls
- Start Server from Terminal with command: `node app.js`
- Open a browser on your PC 
- Find your `browser settings` => `Developer tools` => `Application` => `Key: id_token (value)`
- Copy Key: `id_token (value)`
- Open Postman application
- Start making api calls `GET`, `POST`, `GET{id}`, `PUT{id}`, `DELETE{id}`.
- Paste autorization `id_token (value)` in `Get New Access Token`
- Push de button `SEND` request
- In `Response Body` you should be able to see `server data response`



## Notes
If you're using a local server, remember to start the server **before** making any API call.  

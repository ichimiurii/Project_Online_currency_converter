
The APIs are mainly used for retrieving data from the main database or xml file.

The APIs documentation is publicly avaiable.


# API Endpoints

Every endpoint perform a atomic operation, based on the REST paradigm: each request type, corresponds to a different resource being served.

The avaible request types are, for now:

 ### GET /endpoint_name 
`returnes every public currency inserted into the database or xml file with its main properties`

*Permissions*: every user can view the ISO currency code.


 ### GET  /endpoint_name/**id** 
`returns the currency with the specified **id** from the database or xml file.`

*Permissions*: every user can view the properties of the selected ISO currency code.


 ### POST /endpoint_name 
`create a new ISO currency code into the database or xml file.`

*Permissions*: every user can create a new ISO currency code.


 ### PUT  /endpoint_name 
`update a existing ISO currency code in the database: the ISO currency code is completely replaced`

*Permissions*: every user can update their ISO currency code.


 ### DELETE /endpoint_name 
`delete a ISO currency code present in the database or in xml file`

*Permissions*: every user can delete their ISO currency code.


## While the avaiable enpoint is:
- Convert

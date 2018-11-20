# MongoDB Node/Express API

Basic API using the Node.js environment, the Express.js framework and MongoDB (NoSQL) database with the Mongoose ODM to make the schemas. And Mocha for testing.

# How to install

```
$ git clone git@github.com:jdm79/mongo-node-api.git
$ cd mongo-node-api
$ npm install
$ node index.js // to run the server
$ npm run test // to run the tests!
```

# How to use

Currently usable with Postman app (other apps are available).

You can send a POST request to http://localhost:6666/api/places 

* On Postman, click on 'Body', then underneath that choose 'Raw' and 'JSON' from the dropdown next to 'Raw'
* In the input area below, you can input JSON query. E.g. { "name": "James's Bakery"}